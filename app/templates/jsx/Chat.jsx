var Chat = React.createClass({
	render: function() {
		return (
			<div className="row">
				<nav className="cell sidebar left">
					<Servers />
				</nav>
				<div className="cell">
					<div className="inner">
						<Messages />
						<MessageForm />
					</div>
				</div>
				<nav className="cell sidebar right">
					<Users />
				</nav>
			</div>
		);
	}
});

// React initialization
React.render(
	<Chat />,
	document.getElementById('app')
);