using Carter;
using LawKnowledge.Auto.Scraping;

var builder = WebApplication.CreateSlimBuilder(args);

builder.Services.AddCarter();
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddTransient<IScraping, Scraping>();

var app = builder.Build();

app.MapCarter();

app.Run();
