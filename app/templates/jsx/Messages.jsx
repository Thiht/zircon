var Messages = React.createClass({
	// User-defined methods
	addMessage: function(from, text) {
		this.setState({
			messages: this.state.messages.concat([
				{
					author: from,
					content: text,
					timestamp: Date.now()
				}
			])
		});
	},
	// React methods
	getInitialState: function() {
		return {messages: []};
	},
	componentDidMount: function() {
		var self = this;
		// TODO: multiple servers support
		App.servers[0].addListener('message', function(from, to, text, message) {
			self.addMessage(from, text);
		});

		App.servers[0].addListener('selfMessage', function(target, toSend) {
			self.addMessage(App.servers[0].nick, toSend);
		});
	},
	componentDidUpdate: function(prevProps, prevState) {
		// Scroll to the bottom of #messages
		this.getDOMNode().scrollTop = this.getDOMNode().scrollHeight;
	},
	render: function() {
		var messages = this.state.messages.map(function(message) {
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
