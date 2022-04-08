using Locadora.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Locadora.Infrastructure.Mappings
{
    public class MovieMapping : IEntityTypeConfiguration<Movie>
    {
        public void Configure(EntityTypeBuilder<Movie> builder)
        {
            builder.HasKey(x => x.Id);

            builder.Property(x => x.Id)
                .ValueGeneratedOnAdd();

            builder.HasIndex(x => new { x.IsReleased, x.Title });

            builder.Property(x => x.Title)
                .HasColumnName("Title")
                .HasColumnType("VARCHAR")
                .HasMaxLength(100)
                .IsRequired();

            builder.Property(x => x.ParentalRating)
                .HasColumnName("ClassificacaoIndicativa")
                .HasColumnType("INT")
                .IsRequired();

            builder.Property(x => x.IsReleased)
                .HasColumnName("Lancamento")
                .HasColumnType("TINYINT")
                .IsRequired();
        }
    }
}
