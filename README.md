# INST377 Movie Search Group Project


##  Our project is written in Javascript, it uses  the TMDB API database,to create top 5 rankings and film search engine

### Description:
 This project is by using the **TMDB API database**, on the Homepage it will have a highlghted categories such as top 10 movies of 2024 and top 10 actors and then the highlighted link button called "Search" will redirect you to the Search page. And then on the Search page it will have a search bar where you will type your desired movie and display the results of the searched movie And then we will have an About page that will go over more in-detail about the website. 
 

 Our target browser is for the **Windows**, **Mac OS** and **Google Chrome** users.


Link to [Developer Manual](#developermanual)














 # Developer Manual

 For our project we wanted to show off a chart of the API database, we chose to display the Top Rated Movies that this database has gathered. To do this we used our authorization token that we recieved once we created an account with the TMDB website and We take the response from the api, in which we also provided conditionals statements to catch errors and successful uses of the api fetch and once it is successful it will return a json and if not then return an error message. Finally it takes the results and put it into the variable data and append it to our created function which in this case is called "displayToprated". And then we decided to showoff 4 highlighted categories of the API database that being "Movies Now Playing", "Trending Movies", "Upcoming Movies", "Trending People". In order to complete this portion of the code all of them follow a similar process, for example on the displayTrendingPeople function we start by creating an empty list as a placeholder for the GET elements and then we assign this list to the ol element in order to for the program to display a numbered list with the gathered data. We then created an index to only gather the top 10 people. And then we use the textContent property to actually target and gather the names of the trending people. And finally we used the appendChild method to attach the gathered data to the empty string list in order to finally display the top 10 trending people. And then we repeatedly do those steps for each of the hightlighted categories.



