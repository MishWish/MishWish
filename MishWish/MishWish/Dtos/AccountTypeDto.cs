using MishWish.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MishWish.Dtos
{
    public class AccountTypeDto
    {
        public int Code { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        //public virtual ICollection<User> Users { get; set; }

        public AccountTypeDto() { }

        public AccountTypeDto(AccountType accountType)
        {
            Code = accountType.Code;
            Name = accountType.Name;
            Description = accountType.Description;
        }

        public AccountType ToEntity()
        {
            var accountType = new AccountType
            {
                Code = this.Code,
                Name = this.Name,
                Description = this.Description
            };
            return accountType;
        }
    }
}