using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Locadora.Domain.Entities
{
    public class Client : Base
    {
        [JsonPropertyName("Nome")]
        [Required(ErrorMessage = "Cliente precisa de um nome")]
        public string Name { get; set; }
        [JsonPropertyName("CPF")]
        [MinLength(10, ErrorMessage = "O Cpf deve possuir 11 números")]
        [Required(ErrorMessage = "Cliente precisa do seu cpf")]
        public string Document { get; set; }
        [JsonPropertyName("DataNascimento")]
        [Required(ErrorMessage = "Cliente precisa da data de nascimento")]
        public DateTime BirthDay { get; set; }
    }
}
