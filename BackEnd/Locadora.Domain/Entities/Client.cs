using System.Text.Json.Serialization;

namespace Locadora.Domain.Entities
{
    public class Client : Base
    {
        [JsonPropertyName("Nome")]
        public string Name { get; set; }
        [JsonPropertyName("CPF")]
        public string Document { get; set; }
        [JsonPropertyName("DataNascimento")]
        public DateTime BirthDay { get; set; }
    }
}
