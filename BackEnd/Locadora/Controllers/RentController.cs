using Locadora.Domain.Entities;
using Locadora.Domain.Repositories;
using Locadora.Dtos.Rent;
using Locadora.Extensions;
using Microsoft.AspNetCore.Mvc;

namespace Locadora.Controllers
{
    [Controller]
    [Route("api/v1/alugueis")]
    public class RentController : ControllerBase
    {
        protected readonly IRentRepository _repository;
        private readonly IClientRepository _clientRepository;

        public RentController(IRentRepository repository, IClientRepository clientRepository)
        {
            _repository = repository;
            _clientRepository = clientRepository;
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
        [HttpGet("com-atraso")]
        public async Task<IActionResult> GetAllWithLate() => Ok(await _repository.RentsWithLate());

        [HttpPost()]
        public virtual async Task<IActionResult> Save([FromBody] SaveRentDto model)
        {
            try
            {

                if (!ModelState.IsValid) return Ok(ModelState.GetErrors());

                model.SetMovieReturnDate();

                var rent = new Rent
                {
                    ClientId = model.Client.Id,
                    MovieId = model.Movie.Id,
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

                var rent = await _repository.GetById(id);

                rent.ClientId = model.Client.Id;
                rent.MovieId = model.Movie.Id;

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
