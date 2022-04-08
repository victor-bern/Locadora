using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using System.Data;

namespace Locadora.Infrastructure
{
    public class AppDbContext
    {
        private readonly IConfiguration _configuration;

        public AppDbContext(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public IDbConnection CreateConnection()
        {
            var db = _configuration.GetConnectionString("db");
            return new MySqlConnection(db);
        }

        public IDbConnection CreateMasterConnection()
        {
            var db = _configuration.GetConnectionString("Masterdb");
            return new MySqlConnection(db);
        }
    }
}
