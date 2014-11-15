function plot(selection, filename, viewWidth) {

    viewWidth = viewWidth || 400;
    var viewHeight = viewWidth * 3 / 4;
    var margin = {top: 20, right: 20, bottom: 30, left: 50},
        width = viewWidth - margin.left - margin.right,
        height = viewHeight - margin.top - margin.bottom;


    d3.json(filename, function (error, json) {

        var x = d3.scale.linear()
            .domain(d3.extent(json.data, function (d) {
                return d.x;
            }))
            .range([0, width]);

        var y = d3.scale.linear()
        var y1max = d3.max(json.data, function (d) {
            return d.y1;
        })
        var y2max = d3.max(json.data, function (d) {
            return d.y2;
        })
        var y3max = d3.max(json.data, function (d) {
            return d.y3;
        })
        var ymax = d3.max([y1max, y2max, y3max]);
        y.domain([0, ymax])
            .range([height, 0]);

        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");

        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left");

        var line1 = d3.svg.line()
            .x(function (d) {
                return x(d.x);
            })
            .y(function (d) {
                return y(d.y1);
            });

        var line2 = d3.svg.line()
            .x(function (d) {
                return x(d.x);
            })
            .y(function (d) {
                return y(d.y2);
            });

        var line3 = d3.svg.line()
            .x(function (d) {
                return x(d.x);
            })
            .y(function (d) {
                return y(d.y3);
            });

        var color = d3.scale.category10();

        var svg = d3.select(selection).append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);

        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis);

        svg.append("g")
            .append("text")
            .attr("y", y.range()[0] - 20)
            .attr("x", x.range()[0] + 10)
            .attr("dy", ".71em")
            .style("text-anchor", "begin")
            .text(json.options.xLabel);

        svg.append("g")
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", y.range()[1] + 10)
            .attr("x", x.range()[0] - 20)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text(json.options.yLabel);


        svg.append("path")
            .datum(json.data)
            .attr("class", "line")
            .style('stroke', color('y1'))
            .attr("d", line1);

        svg.append("path")
            .datum(json.data)
            .attr("class", "line")
            .style('stroke', color('y2'))
            .attr("d", line2);

        svg.append("path")
            .datum(json.data)
            .attr("class", "line")
            .style('stroke', color('y3'))
            .attr("d", line3);

        var xtitle = x.range()[1] / 2;
        svg.append("text")
            .attr("x", xtitle)
            .attr("y", 10)
            .attr("class", "title")
            .text(json.options.title);


        var lx = x.range()[1] - 50;
        var ly = y.range()[0] - 50;
        var legend = svg.append("g")
            .attr("class", "legend")
            .attr("transform", "translate(" + lx + "," + ly + ")");

        legend.append('circle')
            .attr('cx', 0)
            .attr('cy', 0)
            .attr('r', 5)
            .style('fill', color('y1'))
            .style('opacity', .7);

        legend.append('text')
            .attr('x', 10)
            .attr('y', 5)
            .text(json.options.y1Label)

        legend.append('circle')
            .attr('cx', 0)
            .attr('cy', 15)
            .attr('r', 5)
            .style('fill', color('y2'))
            .style('opacity', .7);

        legend.append('text')
            .attr('x', 10)
            .attr('y', 20)
            .text(json.options.y2Label)

        legend.append('circle')
            .attr('cx', 0)
            .attr('cy', 30)
            .attr('r', 5)
            .style('fill', color('y3'))
            .style('opacity', .7);

        legend.append('text')
            .attr('x', 10)
            .attr('y', 35)
            .text(json.options.y3Label)

    });
}

