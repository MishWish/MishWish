namespace MishWish.Migrations
{
    using Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<MishWish.Models.MishWishEntities>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
            AutomaticMigrationDataLossAllowed = false;
        }

        protected override void Seed(MishWish.Models.MishWishEntities context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //

            // AccountType static data.
            context.AccountTypes.AddOrUpdate(
                new AccountType() { Code = 1, Name = "Standered user", Description = "This is Standered user of mishwish portal" },
                new AccountType() { Code = 2, Name = "Support user", Description = "This is Support user of mishwish portal" },
                new AccountType() { Code = 3, Name = "Admin user", Description = "This is Admin user of mishwish portal" }
            );

        }
    }
}
