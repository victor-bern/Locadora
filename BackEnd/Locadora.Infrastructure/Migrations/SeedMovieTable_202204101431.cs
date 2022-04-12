using FluentMigrator;

namespace Locadora.Infrastructure.Migrations
{
    [Migration(202204101413)]
    public class SeedMovieTable_202204101431 : Migration
    {
        public override void Up()
        {
            Insert.IntoTable("Filme")
             .Row(new
             {
                 Titulo = "O Poderoso Chefão",
                 ClassificacaoIndicativa = 14,
                 Lancamento = 1972
             });
            Insert.IntoTable("Filme")
             .Row(new
             {
                 Titulo = "Harry Potter",
                 ClassificacaoIndicativa = 0,
                 Lancamento = 2001
             });
            Insert.IntoTable("Filme")
             .Row(new
             {
                 Titulo = "Morbius",
                 ClassificacaoIndicativa = 14,
                 Lancamento = 2022
             });
            Insert.IntoTable("Filme")
             .Row(new
             {
                 Titulo = "Green Book",
                 ClassificacaoIndicativa = 10,
                 Lancamento = 2020
             });
            Insert.IntoTable("Filme")
             .Row(new
             {
                 Titulo = "Doutor Estranho No Multiverso da Loucura",
                 ClassificacaoIndicativa = 14,
                 Lancamento = 2022
             });
        }

        public override void Down()
        {
            Delete.FromTable("Filme").Row(new
            {
                Titulo = "O Poderoso Chefão"
            });
            Delete.FromTable("Filme").Row(new
            {
                Titulo = "Harry Potter"
            });
            Delete.FromTable("Filme").Row(new
            {
                Titulo = "Morbius"
            });
            Delete.FromTable("Filme").Row(new
            {
                Titulo = "Green Book"
            });
            Delete.FromTable("Filme").Row(new
            {
                Titulo = "Doutor Estranho No Multiverso da Loucura"
            });
        }

    }
}
