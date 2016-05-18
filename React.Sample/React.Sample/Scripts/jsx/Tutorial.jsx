var CommentBox = React.createClass({
    getInitialState: function() {
        return { data: this.props.initialData};
    },
    loadComments: function() {
        var xhr = new XMLHttpRequest();
        xhr.open('get', this.props.url, true);
        xhr.onload = function() {
            var data = JSON.parse(xhr.responseText);
            this.setState({ data: data.Comments });
        }.bind(this);
        xhr.send();
    },
    handleCommentSubmit: function(comment) {
        //optimistic update...
        var comments = this.state.data;
        var newComments = comments.concat([comment]);
        this.setState({ data: newComments });
        ///
        var data = new FormData();
        data.append('Author', comment.Author);
        data.append('Text', comment.Text);

        var xhr = new XMLHttpRequest();
        xhr.open('post', this.props.submitUrl, true);
        xhr.onload = function() {
            this.loadComments();
        }.bind(this);
        xhr.send(data);
    },
    componentDidMount: function() {
        this.loadComments();
        window.setInterval(this.loadComments, 3000);
    },
    render: function() {
        return(
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data}/>
                <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
            </div>
        );
    }
});

var CommentList = React.createClass({
    render: function() {
        var commentNodes = this.props.data.map(function(comment) {
            return (
                <Comment author={comment.Author}>
                    {comment.Text}
                </Comment>
            );
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
});

var CommentForm = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        var author = this.refs.author.value.trim();
        var text = this.refs.text.value.trim();
        if (!text || !author) {
            return;
        }

        this.props.onCommentSubmit({ Author: author, Text: text });
        this.refs.author.value = '';
        this.refs.text.value = '';
        return;
    },
    render: function() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <input type="text" className="form-control" ref="author" placeholder="author" />
                <input type="text" className="form-control" ref="text" placeholder="text" />
                <input type="submit" className="btn btn-success" value="Add"/>
            </form>
            
        );
    }
});

var Comment = React.createClass({
    render: function() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                {this.props.children}
            </div>
        );
    }
});