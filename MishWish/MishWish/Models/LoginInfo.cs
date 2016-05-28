using System;
using System.ComponentModel.DataAnnotations;

namespace MishWish.Models
{
    public class LoginInfo
    {
        [Key]
        public long LoginInfoId { get; set; }

        public long UserId { get; set; }

        public DateTime? LastSessionDate { get; set;}

        public int OTP { get; set; }

        public virtual User User { get; set; }
    }
}