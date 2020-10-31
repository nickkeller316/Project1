//click listener on button in index.html
//get authorization token from url and add 'Bearer' to the beginning of the string (location.hash.substr(1)) <- how you get url
//after user logs in, store that token as a variable, parse from url, then do "Bearer "+token

var equal = location.href.indexOf("=")
var amp = location.href.indexOf("&")
var token = "Bearer " + location.href.substring(equal +1, amp)
console.log(token)

$("main-search").on('click', function(event){
  event.preventDefault()
})

var apiUrl = "https://api.spotify.com/v1/search?q=prince&type=artist"

fetch(apiUrl, {headers:{"Authorization": token, "Accept": "application/json"} })   
  .then(function(response){
    return response.json();
  })
   .then(function(data){
     console.log(data)
   })

//on click of search button run a search function that includes the fetch call
//add token variable in as header, google how to add header to a fetch
//make the fetch call with the authorizationToken as a header


