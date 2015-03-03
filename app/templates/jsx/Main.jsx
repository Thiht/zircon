var Main = React.createClass({
	addMessage: function(author, content) {
		this.setState({
			messages: this.state.messages.concat([{
				author: author,
				content: content,
				timestamp: Date.now()
			}])
		});
	},
	getInitialState: function() {
		return {
			messages: [],
			users: []
		};
	},
	componentDidMount: function() {
		var self = this;

		// Messages
		App.servers[0].addListener('message', function(from, to, text, message) {
			self.addMessage(from, text);
		});

		App.servers[0].addListener('selfMessage', function(target, toSend) {
			self.addMessage(App.servers[0].nick, toSend);
		});

		// Users
		App.servers[0].addListener('names#meepmeep', function(users) {
			self.setState({
				users: Object.keys(users).map(function(name) {
					return {
						name: name,
						status: users[name]
					};
				})
			});
		});

		App.servers[0].addListener('join#meepmeep', function(nick, message) {
			self.setState({
				users: self.state.users.concat([{
					name: nick,
					status: ''
				}])
			});
		});
	},
	render: function() {
		return (
			<div id="main">
				<Controls />
				<Chat data={this.state} />
			</div>
		);
	}
});

// React initialization
React.render(
	<Main />,
	document.body
);
