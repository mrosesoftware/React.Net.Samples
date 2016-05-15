using System.Web.Mvc;

namespace React.Sample.Controllers
{
    [RoutePrefix("")]
    public class HomeController : Controller
    {
        [Route]
        public ActionResult Index()
        {
            return View("~/Views/Index.cshtml");
        }
    }
}