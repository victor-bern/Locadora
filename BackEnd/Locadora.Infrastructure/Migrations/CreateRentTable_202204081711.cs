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
                .WithColumn("Id_Cliente").AsInt64().NotNullable().Indexed("FK_Cliente_idx")
                .WithColumn("Id_Filme").AsInt64().NotNullable().Indexed("FK_Filme_idx")
                .WithColumn("DataLocacao").AsDateTime().NotNullable()
                .WithColumn("DataDevolucao").AsDateTime().NotNullable();

            Create.ForeignKey("FK_Locacao_Cliente")
                .FromTable("Locacao")
                .ForeignColumn("Id_Cliente")
                .ToTable("Cliente")
                .PrimaryColumn("Id")
                .OnDelete(System.Data.Rule.Cascade)
                .OnUpdate(System.Data.Rule.None);

            Create.ForeignKey("FK_Locacao_Filme")
                .FromTable("Locacao")
                .ForeignColumn("Id_Filme")
                .ToTable("Filme")
                .PrimaryColumn("Id")
                .OnDelete(System.Data.Rule.Cascade)
                .OnUpdate(System.Data.Rule.None);

        }

        public override void Down()
        {
            Delete.ForeignKey("FK_Locacao_Cliente");
            Delete.ForeignKey("FK_Locacao_Filme");
            Delete.Table("Locacao");
        }

    }
}
