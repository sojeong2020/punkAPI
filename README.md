# PUNK API Angular practice

https://punkapi.com/documentation/v2

Get Beers
Gets beers from the api, you can apply several filters using url paramaters, the available options are listed below.

https://api.punkapi.com/v2/beers

Get a Single Beer
Gets a beer from the api using the beers id.

https://api.punkapi.com/v2/beers/1
Get Random Beer

Get Random Beer
Gets a random beer from the API, this takes no paramaters.

https://api.punkapi.com/v2/beers/random

Pagination
Requests that return multiple items will be limited to 25 results by default. You can access other pages using the ?page paramater, you can also increase the amount of beers returned in each request by changing the ?per_page paramater.

https://api.punkapi.com/v2/beers?page=2&per_page=80

Parameters
All parameters are optional and without them the API will just return the beers in ascending order from their ID. Parameters are passed in as a query string and can be chained together.

If a parameter is passed without a value it will return a 400 error.

https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6