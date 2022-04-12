using System.Text.Json.Serialization;

namespace Locadora.Domain.Entities
{
    public class Movie : Base
    {
        [JsonPropertyName("Titulo")]
        public string Title { get; set; }
        [JsonPropertyName("ClassificacaoIndicativa")]
        public int ParentalRating { get; set; }
        [JsonPropertyName("Lancamento")]
        public int ReleaseYear { get; set; }
    }
}
