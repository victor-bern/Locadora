﻿using Microsoft.EntityFrameworkCore;

namespace Locadora.Infrastructure
{
    public class AppDbContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySQL("Server=localhost;Database=Locadora;Uid=root;Pwd=admin;");
        }
    }
}