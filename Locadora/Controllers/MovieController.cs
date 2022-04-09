using Locadora.Domain.Entities;
using Locadora.Domain.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace Locadora.Controllers
{
    [Route("api/v1/filmes")]
    public class MovieController : BaseController<Movie, IMovieRepository>
    {
        public MovieController(IMovieRepository repository) : base(repository)
        {
        }
    }
}
