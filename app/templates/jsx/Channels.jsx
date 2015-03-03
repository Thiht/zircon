var Channels = React.createClass({
	render: function() {
		var channels = this.props.channels.map(function(channel) {
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
