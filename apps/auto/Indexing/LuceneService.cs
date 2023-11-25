using System.Text;
using Lucene.Net.Analysis;
using Lucene.Net.Documents;
using Lucene.Net.Index;
using Lucene.Net.QueryParsers.Classic;
using Lucene.Net.Search;
using Lucene.Net.Store;
using Lucene.Net.Util;
using Directory = System.IO.Directory;

namespace LawKnowledge.Auto.Indexing;

public class LuceneService : ILuceneService
{
  private readonly IndexSearcher _indexSearcher;
  private readonly IndexWriter _indexWriter;
  private readonly QueryParser _queryParser;

  public LuceneService()
  {
    Analyzer analyzer = new VietnameseAnalyzer(LuceneVersion.LUCENE_48);
    _indexWriter = new(FSDirectory.Open("LuceneIndex"),
      new(LuceneVersion.LUCENE_48, analyzer));
    _indexSearcher = new(_indexWriter.GetReader(true));
    _queryParser = new(LuceneVersion.LUCENE_48, "content", analyzer);
  }

  public void ClearAll() => _indexWriter.DeleteAll();

  public void Index()
  {
    foreach (var filePath in Directory.GetFiles(Uri.UnescapeDataString("Output"), "*.txt"))
    {
      var lines = File.ReadAllLines(filePath, Encoding.UTF8);

      var documents = lines.Select(_ => new Document
        { new TextField("content", Path.GetFileNameWithoutExtension(filePath), Field.Store.YES) }).ToList();

      _indexWriter.AddDocuments(documents);
    }

    _indexWriter.Flush(true, true);
  }

  public IEnumerable<Document> Search(string query, int maxResults)
    => _indexSearcher.Search(new BooleanQuery
    {
      { _queryParser.Parse(query), Occur.SHOULD },
      { new FuzzyQuery(new("content", query), 2), Occur.SHOULD }
    }, maxResults).ScoreDocs.Select(scoreDoc => _indexSearcher.Doc(scoreDoc.Doc));
}
