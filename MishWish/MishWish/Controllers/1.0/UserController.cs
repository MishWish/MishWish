using MishWish.Dtos;
using MishWish.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MissWish.Controllers._1._0
{
    [Authorize]
    public class UserController : ApiController
    {

        #region CONSTANT
        private const string USER_SUCCESS_MESSAGE = "User was successfully created.";
        private const string USER_SUCCESS_UPDATED = "User was successfully updated.";
        private const string USER_NOT_FOUND = "User not exist.";
        private const string INVALID_PARAMEATER = "Invalid parameter";
        private const string NOT_FOUND = "User not exist.";
        private const string REQUIRED_FIELD = "Make sure that you have included all required fields in your request.";
        #endregion


        /// <summary>
        /// Get all users
        /// </summary>
        /// <returns></returns>
        [Route("api/user")]
        [HttpGet]
        public List<UserDto> GetUsers()
        {
            List<UserDto> returnUsers = new List<UserDto>();
            try
            {
                using (var db = new MishWishEntities())
                {
                    var users = db.Users.ToList();
                    //Return all users
                    returnUsers = users.Select(t => new UserDto(t)).ToList();

                    return returnUsers;
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

            
        /// <summary>
        /// Get user detail by user id 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Route("api/user/{id}")]
        [HttpGet]
        public UserDto GetUserById(long id)
        {
            //Check valid id 
            if (id == 0)
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound, INVALID_PARAMEATER));
            try
            {
                using (var db = new MishWishEntities())
                {

                    var user = db.Users.FirstOrDefault(x => x.UserId == id && !x.IsDeleted);

                    if (user == null)
                    {
                        throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound, NOT_FOUND));
                    }
                    var userDetail = new UserDto(user);

                    return userDetail;
                }
            }
            catch (Exception ex)
            {

                throw new Exception(ex.Message);
            }
        }

        /// <summary>
        /// Insert new user
        /// </summary>
        /// <param name="userDto"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("api/user")]
        public HttpResponseMessage PostUser(UserDto userDto)
        {
            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }

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

        /// <summary>
        /// Update user.
        /// </summary>
        /// <param name="id"></param>
        /// <param name="userDto"></param>
        /// <returns></returns>
        [HttpPut]
        [Route("api/user/{id}")]
        public HttpResponseMessage PutUser(long id,UserDto userDto)
        {
            //Check valid id
            if(!userDto.UserId.Equals(id))
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound, INVALID_PARAMEATER));
            }
            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }

            using (var db = new MishWishEntities())
            {

                // Get original user detail.
                var fullUser = db.Users.FirstOrDefault(u => u.UserId == id && !u.IsDeleted);

                if (fullUser == null)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, USER_NOT_FOUND);
                }

                // Convert user DTO to entity.
                var userEntity = userDto.ToEntity();

                userEntity.CreatedDate = fullUser.CreatedDate;
                userEntity.UpdatedDate = DateTime.UtcNow;

                try
                {
                    // Update selected user
                    db.Entry(fullUser).CurrentValues.SetValues(userEntity);
                    db.SaveChanges();
                }
                catch (DbUpdateException ex)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Make sure that you have included all required fields in your request.");
                }
                catch (Exception exGeneral)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, exGeneral.GetType().ToString());
                }

                // Bind return user DTO.
                UserDto returnUser = new UserDto(userEntity)
                {
                    Message = USER_SUCCESS_UPDATED
                };

                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created, returnUser);
                return response;
            }
        }

        /// <summary>
        /// Delete user
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete]
        public HttpResponseMessage DeleteUser(long id)
        {
            if (id == 0)
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound, INVALID_PARAMEATER));
            
            using (var db = new MishWishEntities())
            {

                // Get original user detail.
                var fullUser = db.Users.FirstOrDefault(u => u.UserId == id && !u.IsDeleted);

                if (fullUser == null)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, USER_NOT_FOUND);
                }

                // Convert user DTO to entity.
                fullUser.UpdatedDate = DateTime.UtcNow;
                fullUser.IsDeleted = true;

                try
                {
                    db.Entry(fullUser).State = EntityState.Modified;
                    db.SaveChanges();
                }
                catch (DbUpdateException ex)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Make sure that you have included all required fields in your request.");
                }
                catch (Exception exGeneral)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, exGeneral.GetType().ToString());
                }

                // Bind return user DTO.
                UserDto returnUser = new UserDto(fullUser)
                {
                    Message = USER_SUCCESS_UPDATED
                };

                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created, returnUser);
                return response;
            }
        }

    }
}
