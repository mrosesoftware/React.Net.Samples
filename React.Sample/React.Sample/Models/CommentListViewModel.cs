using System.Collections.Generic;

namespace React.Sample.Models
{
    public class CommentListViewModel
    {
        public CommentListViewModel()
        {
            Comments = new List<CommentViewModel>();
        }
        public IList<CommentViewModel> Comments { get; set; }
    }
}