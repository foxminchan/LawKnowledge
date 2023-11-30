using Carter;
using LawKnowledge.Auto.Scraping;

namespace LawKnowledge.Auto.Endpoints;

public class DataProcessingEndpoint : ICarterModule
{
  public void AddRoutes(IEndpointRouteBuilder app)
  {
    app.MapGet("/", (IScraping scraping) =>
      scraping.DataProcessing()
    );

    app.MapGet("/split", (IScraping scraping) =>
      scraping.SplitData()
    );

    app.MapGet("/ping", () => "Server is running");
  }
}
