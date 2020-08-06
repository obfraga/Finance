// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

import '../css/site.scss';


var yahooFinance = require('yahoo-finance');

yahooFinance.historical({
    symbol: 'AAPL',
    from: '2012-01-01',
    to: '2012-12-31',
    // period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
}, function (err, quotes) {
    alert("a");
});

// This replaces the deprecated snapshot() API
yahooFinance.quote({
    symbol: 'AAPL',
    modules: ['price', 'summaryDetail'] // see the docs for the full list
}, function (err, quotes) {
    alert("b");
});