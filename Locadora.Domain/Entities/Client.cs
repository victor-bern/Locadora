using System.Text.Json.Serialization;

namespace Locadora.Domain.Entities
{
    public class Client
    {
        public int Id { get; set; }
        [JsonPropertyName("Nome")]
        public string Name { get; set; }
        [JsonPropertyName("CPF")]
        public string Document { get; set; }
        [JsonPropertyName("DataNascimento")]
        public DateTime BirthDay { get; set; }
    }
}
