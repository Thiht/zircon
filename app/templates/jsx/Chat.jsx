var Chat = React.createClass({
	render: function() {
		return (
			<div className="table">
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
						<Users users={this.props.data.users} />
					</div>
				</div>
			</div>
		);
	}
});
