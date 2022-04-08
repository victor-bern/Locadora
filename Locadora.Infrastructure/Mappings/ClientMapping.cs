using Locadora.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Locadora.Infrastructure.Mappings
{
    public class ClientMapping : IEntityTypeConfiguration<Client>
    {
        public void Configure(EntityTypeBuilder<Client> builder)
        {
            builder.HasKey(x => x.Id);

            builder.Property(x => x.Id)
                .ValueGeneratedOnAdd();

            builder.HasIndex(x => new { x.Name, x.Document });

            builder.Property(x => x.Name)
                .HasColumnName("Nome")
                .HasColumnType("VARCHAR")
                .HasMaxLength(200)
                .IsRequired();

            builder.Property(x => x.Document)
                .HasColumnName("CPF")
                .HasColumnType("VARCHAR")
                .HasMaxLength(11)
                .IsRequired();

            builder.Property(x => x.BirthDay)
                .HasColumnName("DataNascimento")
                .HasColumnType("DATETIME")
                .IsRequired();
        }
    }
}
