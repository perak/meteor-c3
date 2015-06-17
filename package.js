Package.describe({
	name: 'perak:c3',
	summary: "Reactive C3 charting library based on D3",
	version: "1.0.1",
	git: "https://github.com/perak/meteor-c3.git"
});

// Before Meteor 0.9?
if(!Package.onUse) Package.onUse = Package.on_use;

Package.onUse(function (api) {
	if(api.versionsFrom) {
		api.versionsFrom('METEOR@0.9.0');
	}

	api.use("sergeyt:d3@3.4.1", 'client');
	api.use('templating');

	api.add_files('c3/c3.js', "client");
	api.add_files('c3/c3.css', "client");
	api.add_files('template.html', "client");
	api.add_files('template.js', "client");
});
