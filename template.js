
Template.c3.rendered = function() {

	// this.data.data.data can only exist if template has been passed a data attribute
	// https://github.com/perak/meteor-c3/issues/1
	var data;
	if (this.data && this.data.data && this.data.data.data) {
		data = this.data.data
		data.bindto = this.data.id ? "#"+this.data.id : "#chart"
	} else {
		data = this.data || { data: { columns: [] }}
	}
	var chart = c3.generate(data);

	this.autorun(function (tracker) {
		if(UI.getData()) {
			chart.load(UI.getData().data || { columns: [] });
		}
	});
};

Template.c3.helpers({
	chartId: function() {
		return this.id || "chart"
	}
});

Template.c3.events({

});
