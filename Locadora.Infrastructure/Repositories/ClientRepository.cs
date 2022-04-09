using Dommel;
using Locadora.Domain.Entities;
using Locadora.Domain.Repositories;

namespace Locadora.Infrastructure.Repositories
{
    public class ClientRepository : BaseRepository<Client>, IClientRepository
    {
        public ClientRepository(Database database) : base(database)
        {
        }

        public async Task<Client> GetByName(string name)
        {
            using var connection = _database.GetConnection();

            var client = await connection.FirstOrDefaultAsync<Client>(x => x.Name == name);

            return client;
        }
    }
}
