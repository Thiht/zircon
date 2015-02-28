var Chat = React.createClass({
	render: function() {
		return (
			<div className="row">
				<div className="cell sidebar left">
					<Servers />
				</div>
				<div className="cell">
					<div className="inner">
						<Messages />
						<MessageForm />
					</div>
				</div>
				<div className="cell sidebar right">
					<Users />
				</div>
			</div>
		);
	}
});

// React initialization
React.render(
	<Chat />,
	document.getElementById('app')
);
