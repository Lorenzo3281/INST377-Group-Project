function fetchMoviesNowPlaying() {
    fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Njk4MWVhY2Q1MzNmZGE1MTQ0MjJmYjhiNTg2YzExYyIsInN1YiI6IjY2NDU0MDAzY2M2ZWUyNmVmZDVjYTEwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ok2hDpRa1efANtr1GqM83v6uBTPL_60oFizxrTHxYHI"
        }
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Error getting movies now playing data: " + response.statusText);
        }
    })
    .then(data => {
        displayMovies(data.results, ".NowPlayingMovies ol");
    })
    .catch(error => {
        console.error(error);
    });
}

function fetchTrendingMovies() {
    fetch("https://api.themoviedb.org/3/trending/movie/day", {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Njk4MWVhY2Q1MzNmZGE1MTQ0MjJmYjhiNTg2YzExYyIsInN1YiI6IjY2NDU0MDAzY2M2ZWUyNmVmZDVjYTEwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ok2hDpRa1efANtr1GqM83v6uBTPL_60oFizxrTHxYHI"
        }
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Error getting trending movies data: " + response.statusText);
        }
    })
    .then(data => {
        displayMovies(data.results, ".TrendingMovies ol");
    })
    .catch(error => {
        console.error(error);
    });
}

function fetchUpcomingMovies() {
    fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Njk4MWVhY2Q1MzNmZGE1MTQ0MjJmYjhiNTg2YzExYyIsInN1YiI6IjY2NDU0MDAzY2M2ZWUyNmVmZDVjYTEwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ok2hDpRa1efANtr1GqM83v6uBTPL_60oFizxrTHxYHI"
        }
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Error getting upcoming movies data: " + response.statusText);
        }
    })
    .then(data => {
        displayMovies(data.results, ".UpcomingMovies ol");
    })
    .catch(error => {
        console.error(error);
    });
}

function fetchTrendingPeople() {
    fetch("https://api.themoviedb.org/3/trending/person/day", {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Njk4MWVhY2Q1MzNmZGE1MTQ0MjJmYjhiNTg2YzExYyIsInN1YiI6IjY2NDU0MDAzY2M2ZWUyNmVmZDVjYTEwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ok2hDpRa1efANtr1GqM83v6uBTPL_60oFizxrTHxYHI"
        }
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Error getting trending people data: " + response.statusText);
        }
    })
    .then(data => {
        displayTrendingPeople(data.results);
    })
    .catch(error => {
        console.error(error);
    });
}

function displayMovies(movies, selector) {
    const list = document.querySelector(selector);
    list.innerHTML = "";

    movies.forEach((movie, index) => {
        if (index < 10) {
            const listItem = document.createElement("li");
            listItem.textContent = `${movie.title} (${movie.release_date.split("-")[0]})`;
            list.appendChild(listItem);
        }
    });
}

function displayTrendingPeople(people) {
    const list = document.querySelector(".TrendingPeople ol");
    list.innerHTML = "";

    people.forEach((person, index) => {
        if (index < 10) {
            const listItem = document.createElement("li");
            listItem.textContent = `${person.name}`;
            list.appendChild(listItem);
        }
    });
}

async function fetchToprated() {
    await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Njk4MWVhY2Q1MzNmZGE1MTQ0MjJmYjhiNTg2YzExYyIsInN1YiI6IjY2NDU0MDAzY2M2ZWUyNmVmZDVjYTEwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ok2hDpRa1efANtr1GqM83v6uBTPL_60oFizxrTHxYHI"
        }
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Error getting top rated data: " + response.statusText);
        }
    })
    .then(data => {
        displayTopratedChart(data.results);
    })
    .catch(error => {
        console.error(error);
    });
}

async function displayTopratedChart(){
    const data= await fetchToprated();
    if( data.length > 0) {
    console.log(data)
     titles =[];
     votes = [];
    };

      data.forEach(rated =>{
        titles.push(rated.title)
        votes.push(rated.vote_count)

            })
            const ctx = document.getElementById('myChart').getContext('2d');
            new Chart(ctx, {
                type: 'line',
                data: {
                  labels: titles,
                  datasets: [{
                    label: 'Popularity Votes',
                    data: votes,
                    borderWidth: 1
                  }]
                },
                options: {
                  scales: {
                    y: {
                      beginAtZero: true
                    }
                  }
                }
              });
           
      
}


document.addEventListener("DOMContentLoaded", () => {
    fetchMoviesNowPlaying();
    fetchTrendingMovies();
    fetchUpcomingMovies();
    fetchTrendingPeople();
    fetchToprated();
});
