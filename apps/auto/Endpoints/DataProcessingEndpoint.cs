using Carter;
using LawKnowledge.Auto.Indexing;
using LawKnowledge.Auto.Scraping;

namespace LawKnowledge.Auto.Endpoints;

public class DataProcessingEndpoint : ICarterModule
{
  public void AddRoutes(IEndpointRouteBuilder app)
  {
    app.MapGet("/", (IScraping scraping) =>
      scraping.DataProcessing()
    );

    app.MapGet("/index", (ILuceneService luceneService) =>
      luceneService.Index()
    );

    app.MapGet("/search", (ILuceneService luceneService, string query, int maxResults) =>
      luceneService.Search(query, maxResults)
    );

    app.MapGet("/clear", (ILuceneService luceneService) =>
      luceneService.ClearAll()
    );
  }
}
