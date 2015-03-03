var Servers = React.createClass({
	render: function() {
		var servers = this.props.servers.map(function(server) {
			return (
				<Server name={server.name} channels={server.channels} />
			);
		});
		return (
			<ul>
				{servers}
			</ul>
		);
	}
});
