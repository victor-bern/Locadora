using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Locadora.Dtos.Rent
{
    public class EditRentDto
    {
        [JsonPropertyName("IdCliente")]
        [Required]
        public int ClientId { get; set; }

        [JsonPropertyName("IdFilme")]
        [Required]
        public int MovieId { get; set; }

        [JsonPropertyName("DataAluguel")]
        public DateTime RentDate { get; private set; }
        [JsonPropertyName("DataDevolucao")]
        public DateTime ReturnDate { get; private set; }

        public EditRentDto()
        {
            RentDate = DateTime.UtcNow;
        }
    }
}
