var Server = React.createClass({
	render: function() {
		return (
			<li>
				<a href="#">
					<i className="fa fa-angle-down accordion"></i>
					{this.props.name}
				</a>
				<Channels />
			</li>
		);
	}
});