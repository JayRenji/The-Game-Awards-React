# The Game Awards (React)
## Introduction
This is a migration from another project made with Angular (you can find it in: https://github.com/alvaroFGG/TheGameAwards-Angular )
We wanted to try how difficult it was to migrate from one framework to another and improve it with new functionalities.
This was the final project of the frontend bootcamp we made in UpgradeHub.

## File Structure 
```
📦src  
 ┣ 📂assets  
 ┃ ┣ 📂images  
 ┃ ┃ ┣ 📜1.jpg  
 ┃ ┃ ┣ 📜alert.jpg  
 ┃ ┃ ┣ 📜city.jpg  
 ┃ ┃ ┗ 📜pacha.jpg  
 ┃ ┣ 📂img  
 ┃ ┃ ┣ 📜crown.png  
 ┃ ┃ ┣ 📜footer-background.jpeg  
 ┃ ┃ ┣ 📜header-background.jpeg  
 ┃ ┃ ┣ 📜header-background.webp  
 ┃ ┃ ┣ 📜logo.jpeg  
 ┃ ┃ ┣ 📜logo.png  
 ┃ ┃ ┗ 📜logo.svg  
 ┃ ┣ 📜.DS_Store  
 ┃ ┗ 📜logo.png  
 ┣ 📂components  
 ┃ ┣ 📂ButtonEdit  
 ┃ ┃ ┣ 📜ButtonEdit.jsx  
 ┃ ┃ ┗ 📜ButtonEdit.scss  
 ┃ ┣ 📂ButtonVote  
 ┃ ┃ ┣ 📜ButtonVote.jsx  
 ┃ ┃ ┗ 📜ButtonVote.scss  
 ┃ ┣ 📂HomeCard  
 ┃ ┃ ┣ 📜HomeCard.jsx  
 ┃ ┃ ┗ 📜HomeCard.scss  
 ┃ ┣ 📂LoadingComponent  
 ┃ ┃ ┣ 📜LoadingComponent.jsx  
 ┃ ┃ ┗ 📜LoadingComponent.scss  
 ┃ ┣ 📂PodiumGame  
 ┃ ┃ ┣ 📜PodiumGame.jsx  
 ┃ ┃ ┗ 📜PodiumGame.scss  
 ┃ ┗ 📂SearchBar  
 ┃ ┃ ┗ 📜SearchBar.jsx  
 ┣ 📂core  
 ┃ ┣ 📂Footer  
 ┃ ┃ ┣ 📜Footer.jsx  
 ┃ ┃ ┗ 📜Footer.scss  
 ┃ ┗ 📂Header  
 ┃ ┃ ┣ 📜Header.jsx  
 ┃ ┃ ┗ 📜Header.scss  
 ┣ 📂pages  
 ┃ ┣ 📂Home  
 ┃ ┃ ┣ 📜Home.jsx  
 ┃ ┃ ┗ 📜Home.scss  
 ┃ ┣ 📂Login  
 ┃ ┃ ┣ 📜Login.jsx  
 ┃ ┃ ┗ 📜Login.scss  
 ┃ ┣ 📂Management  
 ┃ ┃ ┣ 📜Management.jsx  
 ┃ ┃ ┗ 📜Management.scss  
 ┃ ┣ 📂Podium  
 ┃ ┃ ┣ 📜Podium.jsx  
 ┃ ┃ ┗ 📜Podium.scss  
 ┃ ┗ 📂Register  
 ┃ ┃ ┣ 📜Register.jsx  
 ┃ ┃ ┗ 📜Register.scss  
 ┣ 📂redux  
 ┃ ┣ 📂games  
 ┃ ┃ ┣ 📜games.actions.js  
 ┃ ┃ ┗ 📜games.reducer.js  
 ┃ ┗ 📜store.js  
 ┣ 📂shared  
 ┃ ┣ 📂Api  
 ┃ ┃ ┗ 📜Api.js  
 ┃ ┣ 📂Context  
 ┃ ┃ ┗ 📜Context.jsx  
 ┃ ┗ 📂functions  
 ┃ ┃ ┗ 📜RequireAuth.jsx  
 ┣ 📜.DS_Store  
 ┣ 📜App.css  
 ┣ 📜App.js  
 ┣ 📜index.css  
 ┗ 📜index.js
```

## Pages
Inside the project you will see the home page where all the nominated games are listed and each of them has a button to vote and another to edit it in the management page.

The second page is the podium where the best three games are shown, you can see how many votes the game has. The best game will appear in the center, the second at the left and the third one at the right of the best game.

As I said, we made a management page where we can edit the games, create new ones and delete existing ones. This page is only available for the admin users but we will explain this later.
It has a functionality where you can see the new game card that you are creating at real time. When created, the new game will appear in the principal page like the other ones


## User Roles

In the data base we have two types of roles, the normal one that any user could have that allows you to vote a game and the admin role that allows this user to enter to the management page.

If you are not logged in you will not be able to vote any game, if you click the vote button and you are not logged in it will appear an alert and tell you to log in. Pretty much the same happens when you are not logged in and you try to enter to the management page, it will redirect you to the login page, and if you log in with an admin role you will enter, if not, you will be redirected to home logged with a normal role.

## Functionalities
### Redux
Yes! We are brave developers so we decided to use redux to work with the data from the API.

- Actions
At the actions file you will find all the functions that works hand to hand with the API, for example, getting all the games from it, creating new ones, editing them...

- Reducer
We made a switch case where we can see how the redux functionality worked, if fetching the games was ok, if it is still loading of it is was an error.
	

### At Home Page
  
 - Search Bar
	It filters the games with the text you type inside the input box, we used the useState Hook in order to look for the games at real time.
	The function we made to filter the games array is this:
	```
	const results = !search ? games : games.filter((game)=> game.title.toLowerCase().includes(search.toLocaleLowerCase()));
	```
	Then we map the results variable inside the html code of the component.

### At Podium
The only "difficult" thing int this component is the function that changes the first position of the array into the second in order that the first game appears in the middle of the best three games.
The statement is the following one:
```
//sort all games and get only the first 3

const sortedGames = games.sort(compare).splice(0,3);

if(!sortedGames.length) return null;

//change positions between first and second game to make the best game to render in the middle

[sortedGames[0], sortedGames[1]] = [sortedGames[1], sortedGames[0]];
```

### At login/register
We created a function located in /src/shared/functions/RequireAuth.jsx that is called when a component requires to be logged in such us management or the vote button. As I explained before, if you are an admin user you will be able to enter to management and if not, you will be redirected to the principal page.
Also we use the Sweet Alerts library for the user experience.
```
export default function RequireAuth({ children }) {

	if (!localStorage.getItem("token") ) {
		Swal.fire({
		position: "center",
		icon: "warning",
		title: "Please, login",
		showConfirmButton: false,
		timer: 1500,
	});

	return <Navigate to="/login" />;
	}

	if (localStorage.getItem("rol")==="admin") {

		return children

	} else {

		return <Navigate to= "/"/>

	}

}
```

## Libraries
Here is a list with all the libraries we used in the project:
 
 - Redux
 - Sweet Alerts
 - Party JS: when podium loads it will appear confetti.
 - Material icons
 - React router
 - Lazy Loading
 - React Hook Forms
 - Axios
 - SASS

## Our GitHub Profiles
- Javier Martínez: https://github.com/sthifer
- Manuela Gutiérrez: https://github.com/ManuelaGutierrezGutierrez
- Javier Esclapes (Jay): https://github.com/JayRenji
- Álvaro Fuentenebro: https://github.com/alvaroFGG 
