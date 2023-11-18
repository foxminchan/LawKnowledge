using LawKnowledge.Auto;

var builder = WebApplication.CreateSlimBuilder(args);

var app = builder.Build();

app.MapGet( "/", () =>
  new Scraping().DataProcessing()
);

app.Run();
