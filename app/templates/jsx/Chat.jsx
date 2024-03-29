var Chat = React.createClass({
	render: function() {
		return (
			<div className="table">
				<div className="row">
					<div className="cell sidebar left">
						<Servers servers={this.props.data.servers} />
					</div>
					<div className="cell">
						<div className="inner">
							<Messages messages={this.props.data.messages} />
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
