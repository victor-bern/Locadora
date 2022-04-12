using Locadora.Domain.Entities;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Locadora.Dtos.Rent
{
    public class EditRentDto
    {
        [JsonPropertyName("Cliente")]
        [Required]
        public Client Client { get; set; }

        [JsonPropertyName("Filme")]
        [Required]
        public Movie Movie { get; set; }

    }
}
