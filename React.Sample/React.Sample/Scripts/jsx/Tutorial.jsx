var CommentBox = React.createClass({
    render: function() {
        return(
            <div className="commentBox">
                Hello world, I am a comment box {this.props.name}
            </div>
        );
    }
});