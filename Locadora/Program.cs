using FluentMigrator.Runner;
using Locadora.Domain.Mappers;
using Locadora.Domain.Repositories;
using Locadora.Infrastructure;
using Locadora.Infrastructure.Extensions;
using Locadora.Infrastructure.Repositories;
using System.Reflection;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSingleton<AppDbContext>();
builder.Services.AddSingleton<Database>();
builder.Services.AddScoped<IClientRepository, ClientRepository>();
builder.Services.AddScoped<IMovieRepository, MovieRepository>();
builder.Services.AddScoped<IRentRepository, RentRepository>();
builder.Services.AddLogging(c => c.AddFluentMigratorConsole())
    .AddFluentMigratorCore()
    .ConfigureRunner(c => c.AddMySql5()
        .WithGlobalConnectionString(builder.Configuration.GetConnectionString("db"))
        .ScanIn(Assembly.Load("Locadora.Infrastructure")).For.Migrations());

builder.Services.AddControllers();


builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();


if (app.Environment.IsDevelopment() || app.Environment.IsEnvironment("Docker"))
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

if (app.Environment.IsProduction()) app.UseHttpsRedirection();

app.UseAuthorization();
app.MapControllers();
app.Register();
app.MigrateDatabase();
app.Run();
