using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Locadora.Domain.Entities
{
    public class Rent : Base
    {
        [JsonPropertyName("IdCliente")]
        [Required]
        public int ClientId { get; set; }

        [JsonPropertyName("Cliente")]
        public Client Client { get; set; }

        [JsonPropertyName("IdFilme")]
        public int MovieId { get; set; }

        [JsonPropertyName("Filme")]
        public Movie Movie { get; set; }

        [JsonPropertyName("DataAluguel")]
        public DateTime RentDate { get; set; }
        [JsonPropertyName("DataDevolucao")]
        public DateTime ReturnDate { get; set; }

        public Rent()
        {
            RentDate = DateTime.UtcNow;
        }
    }
}
