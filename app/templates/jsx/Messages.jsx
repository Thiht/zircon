var Messages = React.createClass({
	componentDidUpdate: function(prevProps, prevState) {
		// Scroll to the bottom of #messages
		this.getDOMNode().scrollTop = this.getDOMNode().scrollHeight;
	},
	render: function() {
		var messages = this.props.messages.map(function(message) {
			return (
				<Message author={message.author} content={message.content} timestamp={message.timestamp} />
			);
		});

		return (
			<div id="messages">
				{messages}
			</div>
		);
	}
});
