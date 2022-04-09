using Dommel;
using Locadora.Domain.Entities;
using Locadora.Domain.Repositories;

namespace Locadora.Infrastructure.Repositories
{
    public class BaseRepository<TEntity> : IBaseRepository<TEntity> where TEntity : Base
    {
        protected readonly Database _database;

        public BaseRepository(Database database)
        {
            _database = database;
        }
        public async Task<IList<TEntity>?> GetAll()
        {
            using var connection = _database.GetConnection();

            var clients = await connection.GetAllAsync<TEntity>();

            return clients.ToList();
        }

        public async Task<TEntity?> GetById(int id)
        {
            using var connection = _database.GetConnection();

            var client = await connection.GetAsync<TEntity>(id);

            return client;
        }
        public async Task Save(TEntity entity)
        {
            using var connection = _database.GetConnection();

            await connection.InsertAsync(entity);
        }

        public async Task<Error?> Edit(TEntity entity, int id)
        {
            using var connection = _database.GetConnection();

            var entityExists = await connection.GetAsync<TEntity>(id);

            if (entityExists == null) return new Error("Não foi possível encontrar um item esse id");

            entity.Id = id;

            await connection.UpdateAsync(entity);

            return null;
        }

        public async Task<Error?> Delete(int id)
        {
            using var connection = _database.GetConnection();

            var entity = await connection.GetAsync<TEntity>(id);

            if (entity == null) return new Error("Não foi possível encontrar um item esse id");

            await connection.DeleteAsync(entity);
            return null;
        }
    }
}
