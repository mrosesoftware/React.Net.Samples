using System;
using System.Web.Mvc;
using System.Web.UI;
using React.Sample.Models;

namespace React.Sample.Controllers
{
    [RoutePrefix("comments")]
    public class CommentsController : Controller
    {
        private static readonly CommentListViewModel _model;

        static CommentsController()
        {
            _model = new CommentListViewModel();
            var rand = new Random();
            for (var i = 0; i < 5; i++)
            {
                _model.Comments.Add(new CommentViewModel()
                {
                    Author = $"Author {rand.Next(0, 100) * i}",
                    Text = $"Text {rand.Next(0, 100) * i}"
                });
            }
        }

        [OutputCache(Location = OutputCacheLocation.None)]
        [HttpGet]
        [Route]
        public ActionResult GetComments()
        {
            return Json(_model, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        [Route]
        public ActionResult AddComment(CommentViewModel comment)
        {
            _model.Comments.Add(comment);
            return Content("Success :)");
        }
    }
}