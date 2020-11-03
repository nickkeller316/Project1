//click listener on button in index.html
//get authorization token from url and add 'Bearer' to the beginning of the string (location.hash.substr(1)) <- how you get url
//after user logs in, store that token as a variable, parse from url, then do "Bearer "+token

var equal = location.href.indexOf("=")
var amp = location.href.indexOf("&")
var token = "Bearer " + location.href.substring(equal +1, amp)



// console.log(token)

$("main-search").on('click', function(event){
  event.preventDefault()


  
})
// {/* <p data-hour = "${bizHours[i]}" class="hour">${bizHours[i]}</p> */}


fetch("https://api.spotify.com/v1/search?q=prince&type=artist", {headers:{"Authorization": token, "Accept": "application/json"} })   

  .then(function(response){
    return response.json();
  })
   .then(function(data){
    console.log(data);

    

     var cardOne = $(".avatar-image2");
     var artistName2 = ("<h2>" +data.artists.items[0].name+ "</h2>");
    

     var artNameDiv = $(".artistName2") 
     var imgDiv = data.artists.items[0].images[2].url;
     var genresDIv2 = $(".genres2")
     var genresData1 = ("<p> <br/><br/><br/>" +data.artists.items[0].genres+ "</p>");
     genresDIv2.append(genresData1)


     cardOne.append('<img src=' + imgDiv + '>');
     artNameDiv.append(artistName2)

   });
   

/* <div class="blog-post">
          <h3 id="result-one"><small>3/6/2015</small></h3>
          <img class="thumbnail" src="https://placehold.it/850x350" />
          <p>
            Praesent id metus massa, ut blandit odio. Proin quis tortor orci.
            Etiam at risus et justo dignissim congue. Donec congue lacinia dui,
            a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci.
            Quisque eget odio ac lectus vestibulum faucibus eget in metus. In
            pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus.
          </p>
          <div class="callout">
            <ul class="menu simple">
              <li><a href="#">Author: Mike Mikers</a></li>
              <li><a href="#">Comments: 3</a></li>
            </ul>
          </div>
        </div> */


// var baseUrl = "https://api.spotify.com/"
// var artistPer = "v1/artists/0OdUWJ0sBjDrqHygGUXeCF"
// var artist = baseUrl + artistPer
// fetch(artist)   
//   .then(function(response){
//     return response.json();
//   })
//    .then(function(data){
//      console.log(data)
//    })
// spotify login
// Mermph@gmail.com
// Annster67