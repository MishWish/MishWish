using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MishWish.Models
{
    [Table("AccountTypes")]
    public class AccountType
    {
        [Key]
        public int Code { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public virtual ICollection<User> Users { get; set; }
    }
}