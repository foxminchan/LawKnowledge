using Carter;
using LawKnowledge.Auto.Indexing;
using LawKnowledge.Auto.Scraping;

var builder = WebApplication.CreateSlimBuilder(args);

builder.Services.AddCarter();
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddTransient<IScraping, Scraping>();
builder.Services.AddTransient<ILuceneService, LuceneService>();

var app = builder.Build();

app.MapCarter();

app.Run();
