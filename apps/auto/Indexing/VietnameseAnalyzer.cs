using Lucene.Net.Analysis.Core;
using Lucene.Net.Analysis.Miscellaneous;
using Lucene.Net.Analysis.Standard;
using Lucene.Net.Analysis;
using Lucene.Net.Util;

namespace LawKnowledge.Auto.Indexing;

public sealed class VietnameseAnalyzer(LuceneVersion version) : Analyzer
{
  protected override TokenStreamComponents CreateComponents(string fieldName, TextReader reader)
  {
    var tokenizer = new StandardTokenizer(version, reader);
    TokenStream filter = new StandardFilter(version, tokenizer);
    filter = new LowerCaseFilter(version, filter);
    filter = new StopFilter(version, filter, StandardAnalyzer.STOP_WORDS_SET);
    filter = new ASCIIFoldingFilter(filter);
    return new(tokenizer, filter);
  }
}
