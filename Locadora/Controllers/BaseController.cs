using Locadora.Domain.Entities;
using Locadora.Domain.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace Locadora.Controllers
{
    [ApiController]
    public class BaseController<TEntity, TRepository> : ControllerBase
        where TEntity : class
        where TRepository : IBaseRepository<TEntity>
    {
        protected readonly TRepository _repository;

        public BaseController(TRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var clients = await _repository.GetAll();
            return Ok(clients);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById(int id)
        {
            var client = await _repository.GetById(id);

            if (client == null) return NotFound(new Error("Não foi possível encontrar um item com esse id"));

            return Ok(client);
        }

        [HttpPost()]
        public async Task<IActionResult> Save([FromBody] TEntity model)
        {
            try
            {
                if (!ModelState.IsValid) return BadRequest(ModelState);

                await _repository.Save(model);

                return Ok(model);

            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPut("edit/{id:int}")]
        public async Task<IActionResult> Edit([FromBody] TEntity model, int id)
        {
            try
            {
                if (!ModelState.IsValid) return BadRequest(ModelState);

                var error = await _repository.Edit(model, id);

                if (error != null) return BadRequest(error);

                return Ok(model);

            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpDelete("delete/{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                if (!ModelState.IsValid) return BadRequest(ModelState);

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
