# INST377 Movie Search Group Project


##  Our project is written in Javascript, it uses  the TMDB API database,to create top 5 rankings and film search engine

### Description:
 This project is by using the **TMDB API database**, on the Homepage it will have a highlghted categories such as top 10 movies of 2024 and top 10 actors and then the highlighted link button called "Search" will redirect you to the Search page. And then on the Search page it will have a search bar where you will type your desired movie and display the results of the searched movie And then we will have an About page that will go over more in-detail about the website. 
 

 Our target browser is for the **Windows**, **Mac OS** and **Google Chrome** users.


Link to [Developer Manual](#developermanual)














 # Developer Manual

 For our project we wanted to show off a chart of the API database, we chose to display the Top Rated Movies that this database has gathered. To do this we used our authorization token that we recieved once we created an account with the TMDB website and We take the response from the api, in which we also provided conditionals statements to catch errors and successful uses of the api fetch and once it is successful it will return a json and if not then return an error message. Finally it takes the results and put it into the variable data and append it to our created function which in this case is called "displayToprated". And then we decided to showoff 4 highlighted categories of the API database that being "Movies Now Playing", "Trending Movies", "Upcoming Movies", "Trending People". In order to complete this portion of the code all of them follow a similar process, for example on the displayTrendingPeople function we start by creating an empty list as a placeholder for the GET elements and then we assign this list to the ol element in order to for the program to display a numbered list with the gathered data. We then created an index to only gather the top 10 people. And then we use the textContent property to actually target and gather the names of the trending people. And finally we used the appendChild method to attach the gathered data to the empty string list in order to finally display the top 10 trending people. And then we repeatedly do those steps for each of the hightlighted categories. For our Search page did something similar to how we gathered data for our homepage. We referenced the API page to fetch the API in order to initiate it into our page along with the authorization token we recieved so that we may access the data in the API. And then we targeted the chosen elements that we wanted from each movie title such as the the movie title itself, the Year the movie was made, and whatever genre the film may be. While also throwing conditions to make sure only the values we wanted to include in our program are the only thing that is gathered. And then we created a table that would only display once the user has searched for a title. And in this table we made individual columns titled "Title", "Year", and "Genre", so we took the data we gathered from the API and populated the targeted columns so that the movie titles would go in the title column, the years would go in the year column and the genres would go in the genre column. For our supabase database we create a database called "profile" to hold, user profile information, and post it. It uses node.js, with  express  and nodemon, as well as node library email-validator. To use run your version of this on the databse you must npm install nodemon, express and email-validator
 


 ## Installation and Dependencies:
To install your application and its dependencies, users can follow these steps:

Ensure Node.js and npm are installed on your system.
Clone the repository containing your application.
Navigate to the root directory of your application.
Run npm install to install all dependencies listed in the package.json file.


## Running the Application on a Server:
To run your application on a server, users can follow these steps:

Navigate to the root directory of your application.
Run npm start or node <your_entry_script.js> to start the server.
The server will start listening on the specified port (in your case, port 3000 by default).
Access the application using a web browser or API client by visiting http://localhost:3000 or the appropriate server address.
 ## API Documentation:
**Endpoints:**
**GET /:**

**Description:** Serves the homepage HTML file.
GET /profiles:

**Description:** Retrieves all movie user profiles from the Supabase database.
    Response: JSON array containing user profiles.
POST /profile:

# Description: Adds a new movie user profile to the Supabase database.
Request Body:
firstname (string): First name of the user.
lastname (string): Last name of the user.
email (string): Email address of the user.
movie (string): Favorite movie of the user.
Response: JSON object containing the inserted profile data if successful; error message otherwise.
Example Usage:


# Example Usage:
To retrieve all profiles: GET /profiles
To add a new profile:
POST /profile
Content-Type: application/json

{
  "firstname": "John",
  "lastname": "Doe",
  "email": "john@example.com",
  "movie": "Inception"
}


 # Dependencies: The application requires the @supabase/supabase-js library for interacting with Supabase, as well as body-parser and express.

Server Setup: You initialize your Express application, set up middleware for parsing JSON bodies (body-parser), and serve static files from a directory named public.

Supabase Configuration:  Define the URL and API key for your Supabase instance and create a Supabase client.

# Routes:

GET /: Serves an HTML file located at public/INST377 Group Project Homepage.html.
GET /profiles: Retrieves all movie user profiles from the Supabase database.
POST /profile: Adds a new movie user profile to the Supabase database. It expects JSON data in the request body containing firstname, lastname, email, and movie. Before inserting the profile, it validates the email using the email-validator library.
Server Start: The application listens on port 3000, and once started, it logs a message confirming that the server is running.


# Future Developments: 
## Known Bugs:
Email Validation Issue:

Description: The email validation might not cover all edge cases or may not be functioning as expected.
Expected Resolution: Review and enhance email validation to ensure it covers a wider range of valid email formats and edge cases.
Error Handling and Logging:

Description: Error handling and logging mechanisms might be insufficient, leading to potential issues being unnoticed.
Expected Resolution: Implement robust error handling throughout the application, including logging errors to facilitate troubleshooting.
Roadmap for Future Development:
## Video Integration:
Description: Allow users to add video trailers of movies, possibly using a JavaScript library for video playback.
### Expected Features:
Video upload functionality.
Integration with a video clip JavaScript library for playback.
Display of video trailers on movie detail pages.
Implementation Steps:
Research and select a suitable JavaScript library for video playback.
Develop a user interface for video upload and playback.
Integrate video functionality into the application's backend and frontend.
## Poster Management:
**Description:** Enhance the application to manage movie posters, potentially implementing features like a poster slider or allowing users to upload movie posters.
**Expected Features:****
Poster upload functionality.
Slider component for displaying movie posters.
User interface for managing and uploading posters.
Implementation Steps:
Develop backend APIs for managing poster data.
Implement frontend components for uploading and displaying posters.
Integrate poster management functionality with existing movie data.
## Trending Genres:
**Description:**Implement a feature to showcase trending movie genres based on user interactions or external data sources.
Expected Features:
Algorithm for determining trending genres.
User interface for displaying trending genres.
Dynamic updating of trending genres based on user interactions.
**Implementation Steps:**
Define criteria for determining trending genres (e.g., viewing history, user ratings).
Develop backend logic to analyze data and determine trending genres.
Implement frontend components to display trending genres. 



