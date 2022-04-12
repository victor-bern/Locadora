using Dommel;
using Locadora.Domain.Entities;
using Locadora.Domain.Repositories;

namespace Locadora.Infrastructure.Repositories
{
    public class RentRepository : BaseRepository<Rent>, IRentRepository
    {
        public RentRepository(Database database) : base(database)
        {
        }

        public override async Task<IList<Rent>?> GetAll()
        {
            using var connection = _database.GetConnection();

            var rents = await connection.GetAllAsync<Rent, Movie, Client, Rent>();

            return rents.ToList();
        }

        public override async Task<Rent?> GetById(int id)
        {
            using var connection = _database.GetConnection();

            var rent = await connection.GetAsync<Rent, Movie, Client, Rent>(id);

            if (rent == null) return null;

            return rent;

        }

        public async Task<IList<Rent>> RentsWithLate()
        {
            using var connection = _database.GetConnection();

            var rents = await connection.SelectAsync<Rent, Movie, Client, Rent>(item => item.ReturnDate < DateTime.UtcNow);

            return rents.ToList();
        }
    }
}
