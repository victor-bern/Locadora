using Locadora.Domain.Entities;
using Locadora.Domain.Repositories;

namespace Locadora.Infrastructure.Repositories
{
    public class MovieRepository : BaseRepository<Movie>, IMovieRepository
    {
        public MovieRepository(Database database) : base(database)
        {
        }

    }
}
