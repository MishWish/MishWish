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

namespace MishWish.Controllers._1._0
{
    /// <summary>
    /// Api for contact
    /// </summary>
    [Authorize]
    public class ContactController : ApiController
    {

        #region CONSTANT
        private const string USER_SUCCESS_MESSAGE = "User was successfully created.";
        private const string USER_SUCCESS_UPDATED = "User was successfully updated.";
        private const string USER_NOT_FOUND = "User not exist.";
        private const string INVALID_PARAMEATER = "Invalid parameter";
        private const string REQUIRED_FIELD = "Make sure that you have included all required fields in your request.";
        private const string INVALID_USERID = "Invalid user details";
        #endregion

        /// <summary>
        /// Get All user contacts
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("api/contact/byuser/{userId}")]
        public List<ContactDto> GetAllContacts(long userId)
        {

            if (userId == 0)
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.BadRequest, INVALID_USERID));
            }

            // Contact list that return list.
            List<ContactDto> ContactList = new List<ContactDto>();
            try
            {
                using (var db = new MishWishEntities())
                {
                    // Get all contact list that associated give user.
                    var contacts = db.Contacts.Where(u => u.UserId == userId).Select(c => new ContactDto
                    {
                        FirstName = c.FirstName,
                        LastName = c.LastName,
                        MobileNumber = c.MobileNumber,
                        UserId = c.UserId

                    }).ToList();

                    ContactList = contacts;
                }

            }
            catch (Exception ex)
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound,ex.Message));
            }

            return ContactList;
        }

        /// <summary>
        /// Get contact detail by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("api/contact/{id}")]
        public ContactDto GetContactById(long id)
        {
            if (id == 0)
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound, INVALID_PARAMEATER));
            }

            try
            {
                using (var db = new MishWishEntities())
                {
                    //Get selected contact
                    var contact = db.Contacts.FirstOrDefault(x => x.UserId == id);

                    if (contact == null)
                    {
                        throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound, USER_NOT_FOUND));
                    }

                    var contactDetail = new ContactDto(contact);

                    return contactDetail;
                }
            }
            catch (Exception ex)
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound, ex.Message));
            }
        }

        /// <summary>
        /// Create new contact that associated  with give user
        /// </summary>
        /// <param name="contactDto"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("api/contact/")]
        public HttpResponseMessage PostContact(ContactDto contactDto)
        {
            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }

            using (var db = new MishWishEntities())
            {

                // Convert contact DTO to entity.
                var contactEntity = contactDto.ToEntity();

                try
                {
                    db.Contacts.Add(contactEntity);
                    db.SaveChanges();
                }
                catch (DbUpdateException)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, REQUIRED_FIELD);
                }
                catch (Exception exGeneral)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, exGeneral.GetType().ToString());
                }

                // Bind return contact DTO.
                ContactDto returnUser = new ContactDto(contactEntity)
                {
                    Message = USER_SUCCESS_MESSAGE
                };

                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created, returnUser);
                return response;
            }
        }

        /// <summary>
        /// Update contact
        /// </summary>
        /// <param name="id"></param>
        /// <param name="contactDto"></param>
        /// <returns></returns>
        [HttpPut]
        [Route("api/contact/{id}")]
        public HttpResponseMessage PutUser(long id, ContactDto contactDto)
        {
            // Check valid parameter
            if (!contactDto.ContactId.Equals(id))
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound, INVALID_PARAMEATER));
            }

            using (var db = new MishWishEntities())
            {
                // Get original contact detail.
                var contactUser = db.Contacts.FirstOrDefault(u => u.ContactId == id);

                // Check contact is exist or not
                if (contactUser == null)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, USER_NOT_FOUND);
                }

                // Convert user DTO to entity.
                var contactEntity = contactDto.ToEntity();

                try
                {
                    db.Entry(contactUser).CurrentValues.SetValues(contactEntity);
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

                // Bind return Contact DTO.
                ContactDto returnUser = new ContactDto(contactEntity)
                {
                    Message = USER_SUCCESS_UPDATED
                };

                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created, returnUser);
                return response;
            }
        }

        /// <summary>
        /// Delete user contact
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete]
        public HttpResponseMessage DeleteContact(long id)
        {
            if (id == 0)
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound, INVALID_PARAMEATER));
            }

            using (var db = new MishWishEntities())
            {

                // Get original contact detail.
                var contact = db.Contacts.FirstOrDefault(c => c.ContactId == id);

                if (contact == null)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, USER_NOT_FOUND);
                }

                // Convert contact DTO to entity.
                try
                {
                    db.Entry(contact).State = EntityState.Modified;
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

                // Bind return contact DTO.
                ContactDto returnUser = new ContactDto(contact)
                {
                    Message = USER_SUCCESS_UPDATED
                };

                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created, returnUser);
                return response;
            }
        }
    }
}
