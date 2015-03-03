var Users = React.createClass({
	render: function() {
		var users = this.props.users.map(function(user) {
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
