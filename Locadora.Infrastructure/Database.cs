using Dapper;

namespace Locadora.Infrastructure
{
    public class Database
    {
        private readonly AppDbContext _context;

        public Database(AppDbContext context)
        {
            _context = context;
        }

        public void CreateDatabase(string dbName)
        {
            var query = $"SHOW DATABASES";
            using var connection = _context.CreateMasterConnection();

            var records = connection.Query(query).ToList();
            if (!records.Any(x => x.Database == dbName))
                connection.Execute($"CREATE DATABASE {dbName}");
        }
    }
}
