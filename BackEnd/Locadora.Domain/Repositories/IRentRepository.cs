using Locadora.Domain.Entities;

namespace Locadora.Domain.Repositories
{
    public interface IRentRepository : IBaseRepository<Rent>
    {
        public Task<IList<Rent>> RentsWithLate();
    }

}
