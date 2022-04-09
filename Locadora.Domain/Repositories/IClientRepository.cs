using Locadora.Domain.Entities;

namespace Locadora.Domain.Repositories
{
    public interface IClientRepository : IBaseRepository<Client>
    {
        Task<Client> GetByName(string name);
    }
}
