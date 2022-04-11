using Locadora.Domain.Entities;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Locadora.Dtos.Rent
{
    public class SaveRentDto
    {
        [JsonPropertyName("Cliente")]
        [Required(ErrorMessage = "O Cliente precisa ser enviado")]
        public Client Client { get; set; }

        [JsonPropertyName("Filme")]
        [Required(ErrorMessage = "O filme precisa ser enviado")]
        public Movie Movie { get; set; }

        [JsonPropertyName("DataLocacao")]
        public DateTime RentDate { get; private set; }
        [JsonPropertyName("DataDevolucao")]
        public DateTime ReturnDate { get; private set; }

        public SaveRentDto()
        {
            RentDate = DateTime.UtcNow;
        }

        public void SetMovieReturnDate()
        {
            ReturnDate = Movie.IsReleased ? DateTime.UtcNow.AddDays(2) : DateTime.UtcNow.AddDays(3);
        }
    }
}
