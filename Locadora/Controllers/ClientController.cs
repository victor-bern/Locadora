using Locadora.Domain.Entities;
using Locadora.Domain.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace Locadora.Controllers
{
    [ApiController]
    [Route("api/v1/clientes")]
    public class ClientController : ControllerBase
    {
        private readonly IClientRepository _clientRepository;

        public ClientController(IClientRepository clientRepository)
        {
            _clientRepository = clientRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var clients = await _clientRepository.GetAll();
            return Ok(clients);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById(int id)
        {
            var client = await _clientRepository.GetById(id);

            if (client == null) return NotFound(new Error("Não foi possível encontrar um cliente com esse id"));

            return Ok(client);
        }

        [HttpPost()]
        public async Task<IActionResult> SaveClient([FromBody] Client model)
        {
            try
            {
                if (!ModelState.IsValid) return BadRequest(ModelState);

                await _clientRepository.Save(model);

                return Ok(model);

            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPut("{id:int}")]
        public async Task<IActionResult> EditClient([FromBody] Client model, int id)
        {
            try
            {
                if (!ModelState.IsValid) return BadRequest(ModelState);

                var error = await _clientRepository.Edit(model, id);

                if (error != null) return BadRequest(error);

                return Ok(model);

            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

    }
}
