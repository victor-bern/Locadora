using Locadora.Domain.Entities;
using Locadora.Domain.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace Locadora.Controllers
{
    [Route("api/v1/alugueis")]
    public class RentController : BaseController<Rent, IRentRepository>
    {
        public RentController(IRentRepository repository) : base(repository)
        {
        }
    }
}
