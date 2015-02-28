var Servers = React.createClass({
	getInitialState: function() {
		return {servers: [{name: "freenode"}]};
	},
	render: function() {
		var servers = this.state.servers.map(function(server) {
			return (
				<Server name={server.name} />
			);
		});
		return (
			<ul>
				{servers}
			</ul>
		);
	}
});