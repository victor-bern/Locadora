using Dapper.FluentMap;
using Dapper.FluentMap.Dommel;
using Microsoft.Extensions.Hosting;

namespace Locadora.Domain.Mappers
{
    public static class RegisterMappers
    {
        public static IHost Register(this IHost host)
        {
            FluentMapper.Initialize(config =>
            {
                config.AddMap(new ClientMapper());
                config.AddMap(new MovieMapper());
                config.AddMap(new RentMapper());
                config.ForDommel();
            });

            return host;
        }
    }
}
