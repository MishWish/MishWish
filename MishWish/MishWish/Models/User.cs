using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MishWish.Models
{
    [Table("Users")]
    public class User
    {
        [Key]
        public long UserId { get; set; }

        [StringLength(256)]
        public string FirstName { get; set; }

        [StringLength(256)]
        public string LastName { get; set; }

        [Required]
        [StringLength(20)]
        public string MobileNumber { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public DateTime DOB { get; set; }

        public bool Gender { get; set; }

        public bool IsActive { get; set; }

        public bool IsOTPVerified { get; set; }

        [Required]
        public int AccountTypeCode { get; set; }

        public DateTime? CreatedDate { get; set; }

        public DateTime? UpdatedDate { get; set; }

        public long? UpdatedBy { get; set; }

        [Column(TypeName = "xml")]
        public string MetaData { get; set; }

        public virtual AccountType AccountType { get; set; }

        public virtual ICollection<Contact> Contacts { get; set; }

        public virtual ICollection<LoginInfo> LoginInfos { get; set; }

        public virtual ICollection<TransactionHistory> TransactionHistory { get; set; }

    }
}