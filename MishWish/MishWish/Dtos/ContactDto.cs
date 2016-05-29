using MishWish.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MishWish.Dtos
{
    public class ContactDto
    {
        #region Persistent property
        public long ContactId { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string MobileNumber { get; set; }

        public long UserId { get; set; }

        public string Message { get; set; }

        //public virtual User User { get; set; }
        #endregion
        #region Constractor
        public ContactDto() { }

        public ContactDto(Contact contact)
        {
            ContactId = contact.ContactId;
            FirstName = contact.FirstName;
            LastName = contact.LastName;
            MobileNumber = contact.MobileNumber;
            UserId = contact.UserId;
        }
        #endregion

        #region To entity

        public Contact ToEntity()
        {
            var contact = new Contact
            {
                ContactId = this.ContactId,
                FirstName = this.FirstName,
                LastName = this.LastName,
                MobileNumber = this.MobileNumber,
                UserId = this.UserId
            };
            return contact;
        }
        #endregion

    }

}