using Dapper.FluentMap.Dommel.Mapping;
using Locadora.Domain.Entities;

namespace Locadora.Domain.Mappers
{
    public class RentMapper : DommelEntityMap<Rent>
    {
        public RentMapper()
        {
            ToTable("Filme");
            Map(x => x.Id).ToColumn("Id").IsKey();
            Map(x => x.ClientId).ToColumn("Id_Cliente");
            Map(x => x.MovieId).ToColumn("Id_Filme");
            Map(x => x.RentDate).ToColumn("DataLocacao");
            Map(x => x.ReturnDate).ToColumn("DataDevolucao");
        }
    }
}
