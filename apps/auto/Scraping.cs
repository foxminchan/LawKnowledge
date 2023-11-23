using HtmlAgilityPack;
using System.Net;
using System.Text;

namespace LawKnowledge.Auto;

public class Scraping
{
  private readonly HtmlDocument _htmlDocument = new();
  private readonly ILogger<Scraping> _logger = new Logger<Scraping>(new LoggerFactory());

  private List<string> GetData(string filePath)
  {
    filePath = Uri.UnescapeDataString(filePath);

    if (!File.Exists(filePath))
    {
      _logger.LogError("{file} not found: {path}", nameof(File), filePath);
      return new();
    }

    _htmlDocument.LoadHtml(File.ReadAllText(filePath, Encoding.UTF8));
    return GetBodyStr(_htmlDocument.DocumentNode.Descendants().Skip(1).ToList());
  }

  private static List<string> GetBodyStr(IEnumerable<HtmlNode> htmlNodes)
    => htmlNodes
      .Where(node => !node.HasChildNodes && !string.IsNullOrWhiteSpace(node.InnerText))
      .Select(node => WebUtility.HtmlDecode(node.InnerText).Trim())
      .Select(text =>
      {
        var sb = new StringBuilder(text)
          .Replace("\n\n", "\n")
          .Replace("\t\t", "\t")
          .Replace("\r\r", "\r")
          .Replace("…", "")
          .Replace("(", "")
          .Replace(")", "")
          .Replace(";", "");

        return sb.ToString();
      })
      .Where(text => !string.IsNullOrEmpty(text) &&
                     !text.StartsWith('{') &&
                     text.Length > 1 &&
                     text != "\n" && text != "\r" && text != "\t" &&
                     text != "." && text != "," && text != "|")
      .ToList();

  public void DataProcessing()
  {
    const string outputDirectory = "Output";

    if (!Directory.Exists(outputDirectory))
      Directory.CreateDirectory(outputDirectory);

    foreach (var filePath in Directory.GetFiles(Uri.UnescapeDataString("Raw/demuc"), "*.html"))
    {
      var outputPath = Path.Combine(outputDirectory, Path.GetFileNameWithoutExtension(filePath) + ".txt");
      File.WriteAllLines(outputPath, GetData(filePath));
      _logger.LogInformation("Output: {path}", outputPath);
    }
  }
}
