using System.Collections.Generic;
using System.Web.Mvc;
using React.Sample.Models;

namespace React.Sample.Controllers
{
    [RoutePrefix("")]
    public class HomeController : Controller
    {
        [Route]
        public ActionResult Index()
        {
            var commentList = new CommentListViewModel()
            {
                Comments = new List<CommentViewModel>()
                {
                    new CommentViewModel() {Author = "Steve", Text = "something"},
                    new CommentViewModel() {Author = "Dave", Text = "something else"}
                }
            };
            return View("~/Views/Index.cshtml", commentList);
        }
    }
}