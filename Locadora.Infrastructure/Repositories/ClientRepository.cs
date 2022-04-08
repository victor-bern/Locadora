using Dommel;
using Locadora.Domain.Entities;
using Locadora.Domain.Repositories;

namespace Locadora.Infrastructure.Repositories
{
    public class ClientRepository : IClientRepository
    {
        private readonly Database _database;

        public ClientRepository(Database database)
        {
            _database = database;
        }

        public async Task<List<Client>> GetAll()
        {
            using var connection = _database.GetConnection();

            var clients = await connection.GetAllAsync<Client>();

            return clients.ToList();
        }
    }
}
