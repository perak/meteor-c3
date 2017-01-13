c3charts = {};

Template.c3.rendered = function() {
	var getData = function() {
		// this.data.data.data can only exist if template has been passed a data attribute
		// https://github.com/perak/meteor-c3/issues/1
		var thisData = UI.getData();
		var data;
		if (thisData && thisData.data && thisData.data.data) {
			data = thisData.data
			data.bindto = thisData.id ? "#"+thisData.id : "#chart"
		} else {
			data = thisData || { data: { columns: [] }}
		}
		return data;
	};

	var data = getData() || { columns: [] };
	var chart = c3.generate(data);

	var id = this.data.id || "chart";
	c3charts[id] = chart;

	this.autorun(function (tracker) {
		if(UI.getData()) {
			chart.load(getData().data || { columns: [] });
		}
	});
};

Template.c3.destroyed = function() {
	var id = this.data.id || "chart";
	delete c3charts[id];
};

Template.c3.helpers({
	chartId: function() {
		return this.id || "chart"
	}
});

Template.c3.events({

});
