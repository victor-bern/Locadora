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

        public override async Task<Error?> Delete(int id)
        {
            try
            {
                using var connection = _database.GetConnection();

                var entity = await connection.GetAsync<Client>(id);

                if (entity == null) return new Error("Não foi possível encontrar um item esse id");

                await connection.DeleteMultipleAsync<Rent>(item => item.ClientId == entity.Id);

                await connection.DeleteAsync(entity);
                return null;
            }
            catch (Exception ex)
            {
                return new Error(ex.Message);
            }

        }
    }
}
