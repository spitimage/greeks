# Options Greeks Visualization
Hopefully this project is helpful for anyone who is interested in how options greeks fundamentally change over time. Secondarily, I'm running a sanity check and comparison between two quant libraries. 

## Quant Library Comparison
For the past couple years, I've been building some auto-trading software as a hobby. I'm a big fan of equity options, so I needed a good library for calculating greeks and prices. This project represents my first step in comparing [quantlib][ql] (C++) with [mibian][mibian] (python). Using each library, I generated some data with identical inputs and plotted the results in a time series. Results are [here][site].

## Results
The results are identical. This is good news - at least in situations when the simple calculations (ignoring interest, dividends, etc) will do. 

## Tech
I used raw [d3][d3] for the simple plots. D3 is my favorite option for getting a web-ready SVG done fast.

## License
[MIT](http://opensource.org/licenses/MIT)

[ql]: http://quantlib.org/index.shtml
[mibian]: http://code.mibian.net/
[site]: http://spitimage.github.io/greeks
[d3]: http://d3js.org/