//click listener on button in index.html
//get authorization token from url and add 'Bearer' to the beginning of the string (location.hash.substr(1)) <- how you get url
//after user logs in, store that token as a variable, parse from url, then do "Bearer "+token
console.log(location.href)
var token = "BQAoP6JXXFoqm2_mUh8umZ1j3nFJV1yVMPgPBgLPnWYWHvHs6baNoBZeeEDTW90HGg_r42MKJxGZR8KSnGjnNtZeBse7dbn_e4g6amsGROGJCHOSB8tKU89HK_X8VeKdp7IUziPbjAvop-MkxJqTmnmG&token_type=Bearer"

$("main-search").on('click', function(){

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


