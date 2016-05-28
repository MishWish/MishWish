namespace MishWish.Models
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class MishWishEntities : DbContext
    {
        public MishWishEntities()
            : base("name=MishWishEntities")
        {
        }

        public DbSet<User> Users { get; set; }

        public DbSet<AccountType> AccountTypes { get; set; }

        public DbSet<TransactionHistory> TransactionHistory { get; set; }

        public DbSet<Contact> Contacts { get; set; }

        public DbSet<LoginInfo> LoginInfo { get; set; }


        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
        }
    }
}
