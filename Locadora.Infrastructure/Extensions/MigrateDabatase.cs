using FluentMigrator.Runner;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace Locadora.Infrastructure.Extensions
{
    public static class MigrateDabatase
    {
        public static IHost MigrateDatabase(this IHost host)
        {
            using var scope = host.Services.CreateScope();

            var databaseService = scope.ServiceProvider.GetRequiredService<Database>();
            var migrationService = scope.ServiceProvider.GetRequiredService<IMigrationRunner>();
            try
            {
                databaseService.CreateDatabase("Locadora");

                migrationService.ListMigrations();
                migrationService.MigrateUp();
            }
            catch
            {
                throw;
            }

            return host;
        }
    }
}
