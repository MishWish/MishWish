using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MishWish.Models
{
    [Table("LoginInfo")]
    public class LoginInfo
    {
        [Key]
        public long LoginInfoId { get; set; }

        public long UserId { get; set; }

        public DateTime? LastSessionDate { get; set;}

        public int OTP { get; set; }

        [Column(TypeName = "xml")]
        public string MetaData { get; set; }

        public virtual User User { get; set; }
    }
}