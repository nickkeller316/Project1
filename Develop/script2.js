//click listener on button in index.html
//get authorization token from url and add 'Bearer' to the beginning of the string (location.hash.substr(1)) <- how you get url
//after user logs in, store that token as a variable, parse from url, then do "Bearer "+token

var equal = location.href.indexOf("=")
var amp = location.href.indexOf("&")
var token = location.href.substr(equal +1, amp)
console.log(token)

$("main-search").on('click', function(event){
  event.preventDefault()
})

var apiUrl = "https://nickkeller316.github.io/Project1/Develop/index2.html#access_token=" + token +"&token_type=Bearer&expires_in=3600"


fetch(apiURL)   
  .then(function(response){
    return response.json();
  })
   .then(function(data){
     console.log(data)
   })

  headers: new Headers({
      'Authorization': 'Bearer ' + token
    })
  
//on click of search button run a search function that includes the fetch call
//add token variable in as header, google how to add header to a fetch
//make the fetch call with the authorizationToken as a header


