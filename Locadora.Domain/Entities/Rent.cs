using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Locadora.Domain.Entities
{
    public class Rent : Base
    {
        [JsonPropertyName("IdCliente")]
        [Required]
        public int ClientId { get; set; }

        public Client Client { get; set; }

        [JsonPropertyName("IdFilme")]
        [Required]
        public int MovieId { get; set; }

        [JsonIgnore]
        public Movie Movie { get; set; }

        [JsonPropertyName("DataAluguel")]
        public DateTime RentDate { get; private set; }
        [JsonPropertyName("DataDevolucao")]
        public DateTime ReturnDate { get; private set; }

        public Rent()
        {
            RentDate = DateTime.UtcNow;
        }
    }
}
