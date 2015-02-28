var dateformat = require('dateformat');

var Message = React.createClass({
	render: function() {
		var formattedTimestamp = dateformat(this.props.timestamp, App.settings.timestampFormat),
		    author = (this.props.author === App.servers[0].nick ? "me" : "someone");
		return (
			<div className={"message " + author}>
				<strong className="nick">{this.props.author}</strong>
				<p className="speech-bubble">
					{this.props.content}
					<span className="timestamp">{formattedTimestamp}</span>
				</p>
			</div>
		);
	}
});
