using Locadora.Domain.Entities;

namespace Locadora.Domain.Repositories
{
    public interface IBaseRepository<Entity> where Entity : class
    {
        Task<IList<Entity>?> GetAll();
        Task<Entity?> GetById(int id);
        Task Save(Entity entity);
        Task<Error?> Edit(Entity entity, int id);
        Task<Error?> Delete(int id);
    }
}
