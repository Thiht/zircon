(function(App) {
	// Connection to the initialized networks
	App.servers.forEach(function(server, index, array) {
		server.connect();
	});

	// Enable the accordion buttons
	$('.accordion').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('wrapped');
		$(this).parent().next().slideToggle();
	});
})(App);
