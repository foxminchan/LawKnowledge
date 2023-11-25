using Lucene.Net.Documents;

namespace LawKnowledge.Auto.Indexing;

public interface ILuceneService
{
  public IEnumerable<Document> Search(string query, int maxResults);
  public void ClearAll();
  public void Index();
}
