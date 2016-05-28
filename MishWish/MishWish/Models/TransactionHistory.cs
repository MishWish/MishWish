using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace MishWish.Models
{
    [Table("TransactionHistory")]
    public class TransactionHistory
    {
        [Key]
        public long TransactionHistoryId { get; set; }

        public long UserId { get; set; }

        public Decimal CreaditAmount { get; set; }

        public Decimal DebitAmount { get; set; }

        [Required]
        public long TransactionBy { get; set; }

        public DateTime? CreatedDate { get; set; }

        public DateTime? UpdatedDate { get; set; }

        [Column(TypeName = "xml")]
        public string MetaData { get; set; }

        public virtual User User { get; set; }
    }
}