using System.Web.Mvc;
using MPD.Electio.SDK;
using MPD.Electio.SDK.Endpoints;
using MPD.Electio.SDK.Services;

namespace React.Sample.Controllers
{
    [RoutePrefix("consignments")]
    public class ConsignmentsController : Controller
    {
        [Route]
        public ActionResult Index()
        {
            var consignmentService = new ConsignmentService("xxx", Production.Instance,
                new SdkReferenceLogger());
            var consignment = consignmentService.GetConsignment("EC-000-043-Y6A");
            return View("~/Views/Consignments/Consignment.cshtml", consignment);
        }
    }
}