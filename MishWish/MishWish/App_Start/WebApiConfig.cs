using MishWish.App_Start;
using System.Net.Http.Headers;
using System.Web.Http;
using System.Web.Http.Cors;

namespace MissWish
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {

            // Web API routes
            config.MapHttpAttributeRoutes();


            //var cors = new EnableCorsAttribute()

            var cors = new EnableCorsAttribute("http://localhost:49573, http://localhost:21723,", "*", "*");

            // Other configuration omitted
            config.EnableCors(cors);
            cors.SupportsCredentials = true;
            config.SetCorsPolicyProviderFactory(new MishWishPolicyProviderFactory());

            // Web API configuration and services
            config.Formatters.JsonFormatter.SupportedMediaTypes.Add(new MediaTypeHeaderValue("application/json"));

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            var json = config.Formatters.JsonFormatter;

            config.Formatters.Remove(config.Formatters.XmlFormatter);
        }
    }
}
