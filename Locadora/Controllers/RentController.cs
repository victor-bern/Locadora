using Locadora.Domain.Entities;
using Locadora.Domain.Repositories;
using Locadora.Dtos.Rent;
using Microsoft.AspNetCore.Mvc;

namespace Locadora.Controllers
{
    [ApiController]
    [Route("api/v1/alugueis")]
    public class RentController : ControllerBase
    {
        protected readonly IRentRepository _repository;

        public RentController(IRentRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public virtual async Task<IActionResult> GetAll()
        {
            var entities = await _repository.GetAll();
            return Ok(entities);
        }

        [HttpGet("{id:int}")]
        public virtual async Task<IActionResult> GetById(int id)
        {
            var entity = await _repository.GetById(id);

            if (entity == null) return NotFound(new Error("Não foi possível encontrar um item com esse id"));

            return Ok(entity);
        }

        [HttpPost()]
        public virtual async Task<IActionResult> Save([FromBody] SaveRentDto model)
        {
            try
            {
                if (!ModelState.IsValid) return BadRequest(ModelState);

                var rent = new Rent
                {
                    ClientId = model.ClientId,
                    MovieId = model.MovieId,
                    RentDate = model.RentDate,
                    ReturnDate = model.ReturnDate,
                };

                await _repository.Save(rent);

                return Ok(model);

            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPut("edit/{id:int}")]
        public virtual async Task<IActionResult> Edit([FromBody] EditRentDto model, int id)
        {
            try
            {
                if (!ModelState.IsValid) return BadRequest(ModelState);

                var rent = new Rent
                {
                    ClientId = model.ClientId,
                    MovieId = model.MovieId,
                    RentDate = model.RentDate,
                    ReturnDate = model.ReturnDate,
                };


                var error = await _repository.Edit(rent, id);

                if (error != null) return BadRequest(error);

                return Ok(model);

            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpDelete("delete/{id:int}")]
        public virtual async Task<IActionResult> Delete(int id)
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
