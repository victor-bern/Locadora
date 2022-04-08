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

            builder.Property(x => x.Name)
                .HasColumnName("name")
                .HasColumnType("VARCHAR")
                .HasMaxLength(150)
                .IsRequired();

            builder.Property(x => x.Document)
                .HasColumnName("document")
                .HasColumnType("VARCHAR")
                .HasMaxLength(11)
                .IsRequired();

            builder.Property(x => x.BirthDay)
                .HasColumnName("birth_day")
                .HasColumnType("DATE")
                .IsRequired();
        }
    }
}
