//click listener on button in index.html
//get authorization token from url and add 'Bearer' to the beginning of the string (location.hash.substr(1)) <- how you get url
//after user logs in, store that token as a variable, parse from url, then do "Bearer "+token
console.log(location.href)
var token;

$("main-search").on('click', function(){

})
fetch('URL_GOES_HERE', { 
    method: 'get', 
    headers: new Headers({
      'Authorization': 'Bearer ' + token
    })
  })
//on click of search button run a search function that includes the fetch call
//add token variable in as header, google how to add header to a fetch
//make the fetch call with the authorizationToken as a header
