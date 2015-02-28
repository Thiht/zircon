(function(App) {
	var irc = require('irc');

	// Initialize the servers
	App.servers = [];
	App.servers.push(new irc.Client('irc.freenode.net', 'zircon', {
		autoRejoin: true,
		channels: ['#meepmeep'],
		autoConnect: false
	}));
})(App);