using MishWish.Models;
using MissWish.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MishWish.Dtos
{
    public class UserDto : RegisterBindingModel
    {
        #region Persistent property

        public long UserId { get; set; }
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string MobileNumber { get; set; }

        [Required]
        public string EmailAddress { get; set; }

        public DateTime DOB { get; set; }

        public bool Gender { get; set; }

        public bool IsActive { get; set; }

        public bool IsOTPVerified { get; set; }

        public int? AccountTypeCode { get; set; }

        public bool IsDeleted { get; set; }

        public DateTime? CreatedDate { get; set; }

        public DateTime? UpdatedDate { get; set; }

        public long? UpdatedBy { get; set; }

        public string MetaData { get; set; }

        //public  AccountTypeDto AccountType { get; set; }

        public ICollection<ContactDto> Contacts { get; set; }

        public string Message { get; set; }

        #endregion

        #region CONSTRUCTOR

        public UserDto()
        {
        }

        public UserDto(User user)
        {

            UserId = user.UserId;
            FirstName = user.FirstName;
            LastName = user.LastName;
            MobileNumber = user.MobileNumber;
            EmailAddress = user.Email;
            DOB = user.DOB;
            Gender = user.Gender;
            IsActive = user.IsActive;
            IsOTPVerified = user.IsOTPVerified;
            AccountTypeCode = user.AccountTypeCode;
            IsDeleted = user.IsDeleted;
            CreatedDate = user.CreatedDate;
            UpdatedDate = user.UpdatedDate;
            UpdatedBy = user.UpdatedBy;
            MetaData = user.MetaData;
        }

        #endregion

        #region TO ENTITY
        public User ToEntity()
        {

            var user = new User
            {
                UserId = this.UserId,
                FirstName = this.FirstName,
                LastName = this.LastName,
                MobileNumber = this.MobileNumber,
                Email = this.EmailAddress,
                DOB = this.DOB,
                Gender = this.Gender,
                IsActive = this.IsActive,
                IsOTPVerified = this.IsOTPVerified,
                AccountTypeCode = this.AccountTypeCode,
                IsDeleted = this.IsDeleted,
                CreatedDate = this.CreatedDate,
                UpdatedDate = this.UpdatedDate,
                UpdatedBy = this.UpdatedBy,
                MetaData = this.MetaData,
                //AccountType = this.AccountType,
                //Contacts  = this.Contacts
            };

            return user;
        }

        #endregion
    }
}