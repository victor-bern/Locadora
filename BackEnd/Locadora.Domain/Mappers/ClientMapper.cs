using Dapper.FluentMap.Dommel.Mapping;
using Locadora.Domain.Entities;

namespace Locadora.Domain.Mappers
{
    public class ClientMapper : DommelEntityMap<Client>
    {
        public ClientMapper()
        {
            ToTable("Cliente");
            Map(x => x.Id).ToColumn("Id").IsKey();
            Map(x => x.Name).ToColumn("Nome");
            Map(x => x.Document).ToColumn("CPF");
            Map(x => x.BirthDay).ToColumn("DataNascimento");
        }
    }
}
