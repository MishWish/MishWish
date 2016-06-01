using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Web.Cors;
using System.Web.Http.Cors;

namespace MishWish.App_Start
{
    /// <summary>
    /// Factory to build a custom CORS policy provider for CAPZURE API
    /// 1. Mainly done to support dynamic subdomains for the CAPZURE PORTAL
    /// </summary>
    public class MishWishPolicyProviderFactory : ICorsPolicyProviderFactory
    {
        public ICorsPolicyProvider GetCorsPolicyProvider(HttpRequestMessage request)
        {
            var route = request.GetRouteData();
            var controller = (string)route.Values["controller"];
            var corsRequestContext = request.GetCorsRequestContext();
            var originRequested = corsRequestContext.Origin;

            var policy = GetPolicyForControllerAndOrigin(controller, originRequested);

            return new CustomPolicyProvider(policy);
        }


        private string[] validOrigins =
        {

            @"http://mishwishcallwish.com",
        };

        private const string BASEURL_LOCALHOST = @"http://localhost:";             // Dont allow domains that include localhost...

        private CorsPolicy GetPolicyForControllerAndOrigin(string controller, string originRequested)
        {
            bool isValidCors = false;
            CorsPolicy policy = null;

            // See if we match any valid origins ?
            foreach (var org in validOrigins)
            {
                if (originRequested == org)
                {
                    isValidCors = true;
                    break;
                }
            }

            // Do database lookup to determine if the controller is allowed for
            // the origin and create CorsPolicy if it is (otherwise return null)

            // Local host...
            if (originRequested.ToLower().Contains(BASEURL_LOCALHOST))
                isValidCors = true;


            // Do we have a valid Origin that we are willing to honor ?
            if (isValidCors)
            {
                policy = new CorsPolicy();
                policy.Origins.Add(originRequested);
                policy.AllowAnyMethod = true;
                policy.AllowAnyHeader = true;
                policy.SupportsCredentials = true;


            }

            return policy;
        }
    }

    /// <summary>
    /// Wrapper to provide the Custom Policy Provider to the CORS engine
    /// </summary>
    public class CustomPolicyProvider : ICorsPolicyProvider
    {
        CorsPolicy policy;

        public CustomPolicyProvider(CorsPolicy policy)
        {
            this.policy = policy;
        }

        public Task<CorsPolicy> GetCorsPolicyAsync(HttpRequestMessage request)
        {
            return Task.FromResult(this.policy);
        }

        public Task<CorsPolicy> GetCorsPolicyAsync(HttpRequestMessage request, CancellationToken cancellationToken)
        {
            return Task.FromResult(this.policy);
        }
    }
}