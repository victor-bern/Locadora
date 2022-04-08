using Locadora.Domain.Entities;

namespace Locadora.Domain.Repositories
{
    public interface IClientRepository
    {
        Task<List<Client>> GetAll();
    }
}
