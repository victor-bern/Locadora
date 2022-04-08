using FluentMigrator;

namespace Locadora.Infrastructure.Migrations
{
    [Migration(202204081711)]
    public class CreateRentTable_202204081711 : Migration
    {
        public override void Up()
        {
            Create!.Table("Locacao")
                .WithColumn("Id").AsInt64().NotNullable().PrimaryKey().Indexed().Identity()
                .WithColumn("Id_Cliente").AsInt64().NotNullable().ForeignKey("FK_Locacao_Cliente", "Cliente", "Id").Indexed("FK_Cliente_idx")
                .WithColumn("Id_Filme").AsInt64().NotNullable().ForeignKey("FK_Locacao_Filme", "Cliente", "Id").Indexed("FK_Filme_idx")
                .WithColumn("DataLocacao").AsDateTime().NotNullable()
                .WithColumn("DataDevolucao").AsDateTime().NotNullable();

        }

        public override void Down()
        {
            Delete.ForeignKey("FK_Locacao_Cliente");
            Delete.ForeignKey("FK_Locacao_Filme");
            Delete.Table("Locacao");
        }

    }
}
