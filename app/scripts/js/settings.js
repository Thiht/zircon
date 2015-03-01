(function(App) {
	var path     = require('path'),
	    dataPath = require('nw.gui').App.dataPath; // See https://github.com/nwjs/nw.js/wiki/App#datapath

	// Initialize the default settings
	App.settings = {};

	// Credentials
	App.settings.defaultNick = 'zircon';

	// UI
	App.settings.timestampFormat = 'isoTime';
	App.settings.minimizeToTray  = false;
	App.settings.defaultTheme    = 'zircon-light.css';

	// Load the persistent settings
	try {
		var userSettings = require(path.join(dataPath, 'settings.json'));
		for (var key in userSettings) {
			if (key in App.settings) {
				App.settings[key] = userSettings[key];
			}
		}
	} catch (err) {
		console.warn(err.message);
	}
})(App);
