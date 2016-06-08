using MishWish.Dtos;
using MishWish.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;

namespace MishWish.Manager
{
    public class UserManager
    {
        #region CONSTANT
        private const string USER_SUCCESS_MESSAGE = "User was successfully created.";
        private const string INVALID_PARAMEATER = "Invalid parameter";
        private const string NOT_FOUND = "User not exist.";
        private const string REQUIRED_FIELD = "Make sure that you have included all required fields in your request.";
        #endregion

        /// <summary>
        /// Create new user
        /// </summary>
        /// <param name="userDto"></param>
        /// <param name="Request"></param>
        /// <returns></returns>
        public HttpResponseMessage CreateUser(UserDto userDto,HttpRequestMessage Request)
        {

            using (var db = new MishWishEntities())
            {

                // Convert user DTO to entity.
                var userEntity = userDto.ToEntity();

                userEntity.CreatedDate = DateTime.UtcNow;
                userEntity.UpdatedDate = DateTime.UtcNow;

                try
                {
                    db.Users.Add(userEntity);
                    db.SaveChanges();
                }
                catch (DbUpdateException ex)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, REQUIRED_FIELD);
                }
                catch (Exception exGeneral)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, exGeneral.GetType().ToString());
                }

                // Bind return user DTO.
                UserDto returnUser = new UserDto(userEntity)
                {
                    Message = USER_SUCCESS_MESSAGE
                };

                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created, returnUser);
                return response;
            }

        }
    }
}