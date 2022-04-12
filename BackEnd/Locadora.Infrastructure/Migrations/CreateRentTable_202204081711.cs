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
                .WithColumn("Id_Cliente").AsInt64().NotNullable()
                .WithColumn("Id_Filme").AsInt64().NotNullable()
                .WithColumn("DataLocacao").AsDateTime().NotNullable()
                .WithColumn("DataDevolucao").AsDateTime().NotNullable();

            Create.ForeignKey("FK_Locacao_Cliente")
                .FromTable("Locacao")
                .ForeignColumn("Id_Cliente")
                .ToTable("Cliente").PrimaryColumn("Id")
                .OnDeleteOrUpdate(System.Data.Rule.Cascade);

            Create.ForeignKey("FK_Locacao_Filme")
                .FromTable("Locacao")
                .ForeignColumn("Id_Filme")
                .ToTable("Filme").PrimaryColumn("Id")
                .OnDeleteOrUpdate(System.Data.Rule.Cascade);
        }

        public override void Down()
        {
            Delete.ForeignKey("FK_Locacao_Cliente");
            Delete.ForeignKey("FK_Locacao_Filme");
            Delete.Table("Locacao");
        }

    }
}
