Template.c3.rendered = function() {
	var chart = c3.generate(this.data || { data: { columns: [] }});

	this.autorun(function (tracker) {
		if(UI.getData()) {
			chart.load(UI.getData().data || { columns: [] });
		}
	});
};

Template.c3.helpers({
});

Template.c3.events({

});
