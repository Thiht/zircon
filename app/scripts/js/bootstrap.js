(function(App) {
	// Connection to the initialized networks
	App.servers.forEach(function(server, index, array) {
		server.connect();
	});
})(App);