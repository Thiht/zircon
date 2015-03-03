var Main = React.createClass({
	getInitialState: function() {
		return {
			messages: [],
			servers: [{
				name: "freenode",
				channels: []
			}],
			users: []
		};
	},
	addMessage: function(author, content) {
		var newMessages = React.addons.update(this.state, {
			messages: {
				$push: [{
					author: author,
					content: content,
					timestamp: Date.now()
				}]
			}
		});

		this.setState(newMessages);
	},
	componentDidMount: function() {

		// Messages
		App.servers[0].addListener('message', function(from, to, text, message) {
			this.addMessage(from, text);
		}.bind(this));

		App.servers[0].addListener('selfMessage', function(target, toSend) {
			this.addMessage(App.servers[0].nick, toSend);
		}.bind(this));

		// Channels
		App.servers[0].addListener('join', function(channel, nick, message) {
			if (nick !== App.servers[0].nick) {
				return;
			}

			var newChannels = React.addons.update(this.state, {
				servers: {
					0: {
						channels: {
							$push: [{
								name: channel
							}]
						}
					}
				}
			});

			this.setState(newChannels);
		}.bind(this));

		// Users
		App.servers[0].addListener('names#meepmeep', function(users) {
			var newUsers = React.addons.update(this.state, {
				users: {
					$set: Object.keys(users).map(function(name) {
						return {
							name: name,
							status: users[name]
						};
					})
				}
			});

			this.setState(newUsers);
		}.bind(this));

		App.servers[0].addListener('join#meepmeep', function(nick, message) {
			var newUsers = React.addons.update(this.state, {
				users: {
					$push: [{
						name: nick,
						status: ''
					}]
				}
			});

			this.setState(newUsers);
		}.bind(this));

		App.servers[0].addListener('part#meepmeep', function(nick, reason, message) {
			var newUsers = React.addons.update(this.state, {
				users: {
					$apply: function(users) {
						return users.filter(function(user) {
							return nick != user.name;
						});
					}
				}
			});

			this.setState(newUsers);
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
