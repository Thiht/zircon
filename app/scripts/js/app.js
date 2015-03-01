var App = {};

(function(App) {
	var gui = require('nw.gui'),
	    win = gui.Window.get();

	// Dev shortcuts
	var shortcut = new gui.Shortcut({
		key: 'Ctrl+Shift+J',

		active: function() {
			win.showDevTools();
		},

		failed: function(msg) {
			console.log(msg);
		}
	});

	gui.App.registerGlobalHotKey(shortcut);
})(App);
