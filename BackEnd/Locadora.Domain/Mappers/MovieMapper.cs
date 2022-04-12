using Dapper.FluentMap.Dommel.Mapping;
using Locadora.Domain.Entities;

namespace Locadora.Domain.Mappers
{
    public class MovieMapper : DommelEntityMap<Movie>
    {
        public MovieMapper()
        {
            ToTable("Filme");
            Map(x => x.Id).ToColumn("Id").IsKey();
            Map(x => x.Title).ToColumn("Titulo");
            Map(x => x.ParentalRating).ToColumn("ClassificacaoIndicativa");
            Map(x => x.ReleaseYear).ToColumn("Lancamento");
        }
    }
}
