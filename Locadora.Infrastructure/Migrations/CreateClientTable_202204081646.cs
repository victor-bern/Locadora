using FluentMigrator;

namespace Locadora.Infrastructure.Migrations
{
    [Migration(202204081646)]
    public class CreateClientTable_202204081646 : Migration
    {
        public override void Up()
        {
            Create!.Table("Cliente")
                .WithColumn("Id").AsInt64().NotNullable().PrimaryKey().Indexed().Identity()
                .WithColumn("Nome").AsString(200).NotNullable().Indexed("idx_NOME")
                .WithColumn("CPF").AsString(11).NotNullable().Indexed("idx_CPF")
                .WithColumn("DataNascimento").AsDateTime().NotNullable();
        }

        public override void Down()
        {
            Delete.Table("Client");
        }

    }
}
