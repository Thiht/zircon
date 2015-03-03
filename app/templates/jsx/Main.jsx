var Main = React.createClass({
	getInitialState: function() {
		return {
			users: []
		};
	},
	componentDidMount: function() {
		var self = this;

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
