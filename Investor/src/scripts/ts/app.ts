// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

//--- Request to https://finance.yahoo.com/quote/AAPL

//
import 'scss/app.scss'
import 'scss/site.scss'

const Http = new XMLHttpRequest();
const url = 'https://fcsapi.com/api-v2/stock/list?country=Brazil&access_key=';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
    console.log(Http.responseText)
}