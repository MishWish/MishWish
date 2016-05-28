namespace MishWish.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class _001_Added_Tables_MishWishApp : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.AccountTypes",
                c => new
                    {
                        Code = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Description = c.String(),
                    })
                .PrimaryKey(t => t.Code);
            
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        UserId = c.Long(nullable: false, identity: true),
                        FirstName = c.String(maxLength: 256),
                        LastName = c.String(maxLength: 256),
                        MobileNumber = c.String(nullable: false, maxLength: 20),
                        Email = c.String(nullable: false),
                        DOB = c.DateTime(nullable: false),
                        Gender = c.Boolean(nullable: false),
                        IsActive = c.Boolean(nullable: false),
                        IsOTPVerified = c.Boolean(nullable: false),
                        AccountTypeCode = c.Int(nullable: true,defaultValue:1), // By default accountType standered user. 
                        IsDeleted = c.Boolean(nullable: false),
                        CreatedDate = c.DateTime(),
                        UpdatedDate = c.DateTime(),
                        UpdatedBy = c.Long(),
                        MetaData = c.String(storeType: "xml"),
                    })
                .PrimaryKey(t => t.UserId)
                .ForeignKey("dbo.AccountTypes", t => t.AccountTypeCode, cascadeDelete: false)
                .Index(t => t.AccountTypeCode);
            
            CreateTable(
                "dbo.Contacts",
                c => new
                    {
                        ContactId = c.Long(nullable: false, identity: true),
                        FirstName = c.String(nullable: false, maxLength: 256),
                        LastName = c.String(nullable: false, maxLength: 256),
                        MobileNumber = c.String(maxLength: 20),
                        UserId = c.Long(nullable: false),
                    })
                .PrimaryKey(t => t.ContactId)
                .ForeignKey("dbo.Users", t => t.UserId, cascadeDelete: false)
                .Index(t => t.UserId);
            
            CreateTable(
                "dbo.LoginInfo",
                c => new
                    {
                        LoginInfoId = c.Long(nullable: false, identity: true),
                        UserId = c.Long(nullable: false),
                        LastSessionDate = c.DateTime(),
                        OTP = c.Int(nullable: false),
                        MetaData = c.String(storeType: "xml"),
                    })
                .PrimaryKey(t => t.LoginInfoId)
                .ForeignKey("dbo.Users", t => t.UserId, cascadeDelete: false)
                .Index(t => t.UserId);
            
            CreateTable(
                "dbo.TransactionHistory",
                c => new
                    {
                        TransactionHistoryId = c.Long(nullable: false, identity: true),
                        UserId = c.Long(nullable: false),
                        CreaditAmount = c.Decimal(nullable: false, precision: 18, scale: 2),
                        DebitAmount = c.Decimal(nullable: false, precision: 18, scale: 2),
                        TransactionBy = c.Long(nullable: false),
                        CreatedDate = c.DateTime(),
                        UpdatedDate = c.DateTime(),
                        IsDeleted = c.Boolean(nullable: false),
                        MetaData = c.String(storeType: "xml"),
                    })
                .PrimaryKey(t => t.TransactionHistoryId)
                .ForeignKey("dbo.Users", t => t.UserId, cascadeDelete: false)
                .Index(t => t.UserId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.TransactionHistory", "UserId", "dbo.Users");
            DropForeignKey("dbo.LoginInfo", "UserId", "dbo.Users");
            DropForeignKey("dbo.Contacts", "UserId", "dbo.Users");
            DropForeignKey("dbo.Users", "AccountTypeCode", "dbo.AccountTypes");
            DropIndex("dbo.TransactionHistory", new[] { "UserId" });
            DropIndex("dbo.LoginInfo", new[] { "UserId" });
            DropIndex("dbo.Contacts", new[] { "UserId" });
            DropIndex("dbo.Users", new[] { "AccountTypeCode" });
            DropTable("dbo.TransactionHistory");
            DropTable("dbo.LoginInfo");
            DropTable("dbo.Contacts");
            DropTable("dbo.Users");
            DropTable("dbo.AccountTypes");
        }
    }
}
