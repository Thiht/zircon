var Channels = React.createClass({
	getInitialState: function() {
		return {channels: []};
	},
	componentDidMount: function() {
		var self = this;
		// TODO: multiple servers support
		App.servers[0].addListener('join', function(channel, nick, message) {
			if (nick !== App.servers[0].nick) {
				return;
			}

			self.setState({
				channels: self.state.channels.concat([
					{
						name: channel
					}
				])
			});
		});
	},
	render: function() {
		var channels = this.state.channels.map(function(channel) {
			return (
				<Channel name={channel.name} />
			);
		});
		return (
			<ul>
				{channels}
			</ul>
		);
	}
});