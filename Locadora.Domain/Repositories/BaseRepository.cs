using Locadora.Domain.Entities;

namespace Locadora.Domain.Repositories
{
    public interface BaseRepository<Entity> where Entity : class
    {
        Task<List<Entity>?> GetAll();
        Task<Entity?> GetById(int id);
        Task Save(Entity entity);
        Task<Error?> Edit(Entity entity, int id);
        Task<Error?> Delete(int id);
    }
}
