using Locadora.Domain.Entities;
using Locadora.Domain.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace Locadora.Controllers
{
    [Route("api/v1/clientes")]
    public class ClientController : BaseController<Client, IClientRepository>
    {
        public ClientController(IClientRepository repository) : base(repository)
        {
        }
    }
}
