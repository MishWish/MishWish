using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MishWish.Models
{
    [Table("Contacts")]
    public class Contact
    {
        [Key]
        public long ContactId { get; set; }

        [Required]
        [StringLength(256)]
        public string FirstName { get; set; }

        [Required]
        [StringLength(256)]
        public string LastName { get; set; }

        [StringLength(20)]
        public string MobileNumber { get; set; }

        public long UserId { get; set; }

        public virtual User User { get; set; }
    }
}