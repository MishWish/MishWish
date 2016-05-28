using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MishWish.Web.Startup))]
namespace MishWish.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
