var Users = React.createClass({
	getInitialState: function() {
		return {users: []};
	},
	componentDidMount: function() {
		var self = this;
		// TODO: multiple servers support
		App.servers[0].addListener('names#meepmeep', function(nicks) {
			self.setState({
				users: Object.keys(nicks).map(function(key) {
					return {
						name: key,
						status: nicks[key]
					};
				})
			});
		});

		App.servers[0].addListener('join#meepmeep', function(nick, message) {
			console.log(nick);
		});
	},
	render: function() {
		var users = this.state.users.map(function(user) {
			return (
				<User name={user.name} status={user.status} />
			);
		});
		return (
			<ul>
				<li>
					<a href="#">
						Users
						<i className="fa fa-angle-down accordion"></i>
					</a>
					<ul>
						{users}
					</ul>
				</li>
			</ul>
		);
	}
});