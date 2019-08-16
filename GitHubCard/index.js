/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const userName = 'stephentanksley'

// Make a request for a user with a given ID
axios.get('https://api.github.com/users/stephentanksley') // putting out the call to the API asking for information located at this URL.
  .then(function (response) {
    const info = response.data;
    console.log(response.data)
    console.log(response.data.message)
    const newCard = gitHubCard(info.avatar_url, info.name, info.login, info.location, info.html_url, info.followers, info.following, info.bio)

    const cards = document.querySelector('.cards')
    cards.append(newCard)

    console.log(info.login)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ["RomeNineO", "smv5047", "farjadfazli", "fixmylifedesigns", "jennyobryant"];

function LambdaUsers(Students) {
  Students.map(student => {
    axios.get(`https://api.github.com/users/${student}`) // putting out the call to the API asking for information located at this URL.
      .then(function (response) {
        const info = response.data;
        console.log(response.data)
        console.log(response.data.message)
        const newCard = gitHubCard(info.avatar_url, info.name, info.login, info.location, info.html_url, info.followers, info.following, info.bio)

        const cards = document.querySelector('.cards')
        cards.append(newCard)
        console.log(info.login)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  })
}

LambdaUsers(followersArray);



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function gitHubCard(imgSrc, Name, Username, Location, ProfileURL, Followers, Following, Bio) {

  //Element creation
  const div = document.createElement('div')
  div.classList.add('card')

  const image = document.createElement('img')
  image.src = imgSrc
  div.append(image)

  const cardInfo = document.createElement('div')
  cardInfo.classList.add('card-info')
  div.append(cardInfo)

  const name = document.createElement('h3')
  name.classList.add('name')
  name.textContent = Name;
  cardInfo.append(name)

  const userName = document.createElement('p')
  userName.classList.add('username')
  userName.textContent = Username
  cardInfo.append(userName)

  const homeTown = document.createElement('p')
  homeTown.textContent = `Location: ${Location}`
  cardInfo.append(homeTown)

  const profile = document.createElement('p')
  profile.textContent = "Profile: "
  cardInfo.append(profile)

  const profileLink = document.createElement('a')
  profileLink.setAttribute('href', ProfileURL)
  profileLink.textContent = 'Github'
  profile.append(profileLink)

  const followers = document.createElement('p')
  followers.textContent = `Followers: ${Followers}`;
  cardInfo.append(followers)

  const following = document.createElement('p')
  following.textContent = `Following: ${Following}`;
  cardInfo.append(following)

  const bio = document.createElement('p')
  bio.textContent = `Bio: ${Bio}`
  cardInfo.append(bio)

  return div
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/