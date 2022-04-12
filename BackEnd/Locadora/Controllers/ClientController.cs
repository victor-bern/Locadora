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

        [HttpGet("{name}")]
        public async Task<IActionResult> GetByName(string name)
        {
            var cliente = await _repository.GetByName(name);

            return Ok(cliente);
        }

        public override async Task<IActionResult> Delete(int id)
        {
            try
            {
                var error = await _repository.Delete(id);

                if (error != null) return BadRequest(error);

                return NoContent();

            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}
