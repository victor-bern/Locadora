using System.Text.Json.Serialization;

namespace Locadora.Domain.Entities
{
    public class Rent
    {
        public int Id { get; set; }
        [JsonPropertyName("IdCliente")]
        public int ClientId { get; set; }
        [JsonIgnore]
        public Client Client { get; set; }
        [JsonPropertyName("IdFilme")]
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
            ReturnDate = Movie.IsReleased ? DateTime.UtcNow.AddDays(2) : DateTime.UtcNow.AddDays(3);
        }
    }
}
