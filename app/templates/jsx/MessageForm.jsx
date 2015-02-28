var MessageForm = React.createClass({
	handleSubmit: function(e) {
		e.preventDefault();

		var content = this.refs.content.getDOMNode().value.trim();
		if (!content) {
			return;
		}

		// TODO: multiple servers support
		// TODO: get the current channel from the parent components
		// with sth like `this.props.to`
		App.servers[0].say("#meepmeep", content);

		this.refs.content.getDOMNode().value = '';
	},
	render: function() {
		return (
			<div id="form">
				<form action="#" onSubmit={this.handleSubmit}>
					<div className="toolbar">
						<button title="Nickname" disabled><i className="fa fa-user"></i></button>
						<button title="Bold" disabled><i className="fa fa-bold"></i></button>
						<button title="Underline" disabled><i className="fa fa-underline"></i></button>
						<button title="Colors" disabled><i className="fa fa-eyedropper"></i></button>
						<button title="Smilies" disabled><i className="fa fa-smile-o"></i></button>
					</div>
					<textarea ref="content" />
					<button type="submit">Send</button>
				</form>
			</div>
		);
	}
});
