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
        public async Task<List<Client>?> GetAll()
        {
            using var connection = _database.GetConnection();

            var clients = await connection.GetAllAsync<Client>();

            return clients.ToList();
        }

        public async Task<Client?> GetById(int id)
        {
            using var connection = _database.GetConnection();

            var client = await connection.GetAsync<Client>(id);

            return client;
        }
        public async Task Save(Client entity)
        {
            using var connection = _database.GetConnection();

            await connection.InsertAsync(entity);
        }

        public async Task<Error?> Edit(Client entity, int id)
        {
            using var connection = _database.GetConnection();

            var client = await connection.GetAsync<Client>(id);

            if (client == null) return new Error("Não foi possível encontrar um cliente com esse id");

            client.Name = entity.Name;
            client.Document = entity.Document;
            client.BirthDay = entity.BirthDay;

            await connection.UpdateAsync(client);

            return null;
        }

        public async Task<Error?> Delete(int id)
        {
            using var connection = _database.GetConnection();

            var client = await connection.GetAsync<Client>(id);

            if (client == null) return new Error("Não foi possível encontrar um cliente com esse id");

            await connection.DeleteAsync(client);
            return null;
        }

    }
}
