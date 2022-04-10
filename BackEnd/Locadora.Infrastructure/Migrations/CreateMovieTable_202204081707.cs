using FluentMigrator;

namespace Locadora.Infrastructure.Migrations
{
    [Migration(202204081707)]
    public class CreateMovieTable_202204081707 : Migration
    {
        public override void Up()
        {
            Create!.Table("Filme")
                .WithColumn("Id").AsInt64().NotNullable().PrimaryKey().Indexed().Identity()
                .WithColumn("Titulo").AsString(100).NotNullable().Indexed("idx_Titulo")
                .WithColumn("ClassificacaoIndicativa").AsInt32().NotNullable().Indexed("idx_Lancamento")
                .WithColumn("Lancamento").AsInt16().NotNullable();
        }

        public override void Down()
        {
            Delete.Table("Filme");
        }

    }
}
