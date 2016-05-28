using System.Web.Http;

namespace MissWish.Controllers._1._0
{
    public class UserController : ApiController
    {
        [Route("api/user")]
        public string GetUsers()
        {
            return "User controller";
        }
    }
}
