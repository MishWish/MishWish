using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MishWish.Models
{
    [Table("Contacts")]
    public class Contact
    {
        [Key]
        public long ContactId { get; set; }

        public string FullName { get; set; }

        public string MobileNumber { get; set; }

        public long UserId { get; set; }

        public virtual User User { get; set; }
    }
}