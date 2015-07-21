C3 chart
========

Reactive C3 charting library based on D3


Usage
=====

Somewhere in your template, add this:

```Handlebars
<template name="someTemplate">

	{{> c3 myChartData}}

</template>
```

And in .js define helper that returns chart data object as described in c3 docs:

```JavaScript
Template.someTemplate.helpers({
	"myChartData": function() {
		return {
			data: {
				columns: [
					['data1', 30, 200, 100, 400, 150, 250],
					['data2', 130, 100, 140, 200, 150, 50]
				],
				type: 'spline'
			}
		};
	}
});
```

Of course, instead providing static data, you can reactively show data from collection:

```JavaScript
Template.someTemplate.helpers({
	"myChartData": function() {

		theReport = SomeCollection.find().fetch();

		var theData = ["myData"];
		theData.concat(_.pluck(theReport, "expenses"));

		return {
			data: {
				columns: [
					theData
				],
				type: 'line'
			}
		};
	}
});
```
In this example, `SomeCollection` contains key `expenses` that will be shown in the graph.

JSON objects can also be given as data:

```JavaScript
// ...
return {
	data: {
		json: {
			data1: [4, 3, 5, 2],
			data2: [6, 4, 3, 6]
		}
	}
}
```

If you want to use **multiple charts on one page** you must specify a unique id, thus the syntax is a bit different:

```Handlebars
<template name="someTemplate">

	{{> c3 data=myChartData id="chart4"}}

</template>
```

Live example
============

You can see live example built with <a href="http://www.meteorkitchen.com" target="_blank">Meteor Kitchen</a> showing radiation level from geiger counter <a href="http://generator-geiger.meteor.com" target="_blank">here</a>.


That's all folks.

Enjoy! :)
