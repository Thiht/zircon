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

		// Messages
		App.servers[0].addListener('message', function(from, to, text, message) {
			this.addMessage(from, text);
		}.bind(this));

		App.servers[0].addListener('selfMessage', function(target, toSend) {
			this.addMessage(App.servers[0].nick, toSend);
		}.bind(this));

		// Users
		App.servers[0].addListener('names#meepmeep', function(users) {
			this.setState({
				users: Object.keys(users).map(function(name) {
					return {
						name: name,
						status: users[name]
					};
				})
			});
		}.bind(this));

		App.servers[0].addListener('join#meepmeep', function(nick, message) {
			this.setState({
				users: this.state.users.concat([{
					name: nick,
					status: ''
				}])
			});
		}.bind(this));
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
