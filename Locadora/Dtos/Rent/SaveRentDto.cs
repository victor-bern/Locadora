using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Locadora.Dtos.Rent
{
    public class SaveRentDto
    {
        [JsonPropertyName("IdCliente")]
        [Required]
        public int ClientId { get; set; }

        [JsonPropertyName("IdFilme")]
        [Required]
        public int MovieId { get; set; }

        [JsonPropertyName("DataLocacao")]
        public DateTime RentDate { get; set; }
        [JsonPropertyName("DataDevolucao")]
        public DateTime ReturnDate { get; set; }

        public SaveRentDto()
        {
            RentDate = DateTime.UtcNow;
        }
    }
}
