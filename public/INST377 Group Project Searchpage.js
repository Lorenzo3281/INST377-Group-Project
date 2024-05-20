let genreMap = {};

document.addEventListener('DOMContentLoaded', function() {
  fetchGenres();
});

function fetchGenres() {
  const apiUrl = 'https://api.themoviedb.org/3/genre/movie/list?language=en-US';
  const headers = {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Mjc5N2E5MDg2ZGIyZDAyNTY4OTQ0YTZhMDRhMTIxYSIsInN1YiI6IjY2NDkzZmYwOTViZDRhNGJjMDhlODA2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Occ8Up6_4yLg4OMh-RtcpOUQyO7YZfO5lkfpAt-1q-A',
    'Content-Type': 'application/json;charset=utf-8'
  };

  fetch(apiUrl, { headers: headers })
    .then(response => response.json())
    .then(data => {
      data.genres.forEach(genre => {
        genreMap[genre.id] = genre.name;
      });
    })
    .catch(error => {
      console.error('Error fetching genres:', error);
    });
}

document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const movieName = document.getElementById('movie').value.trim();
  const formattedMovieName = movieName.split(' ').join('+');
  searchMovies(formattedMovieName);
});

function searchMovies(movieName) {
  const apiUrl = `https://api.themoviedb.org/3/search/movie?query=${movieName}`;
  const headers = {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Mjc5N2E5MDg2ZGIyZDAyNTY4OTQ0YTZhMDRhMTIxYSIsInN1YiI6IjY2NDkzZmYwOTViZDRhNGJjMDhlODA2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Occ8Up6_4yLg4OMh-RtcpOUQyO7YZfO5lkfpAt-1q-A',
    'Content-Type': 'application/json;charset=utf-8'
  };

  document.getElementById('loadingMessage').classList.remove('hidden');
  document.getElementById('resultsTable').classList.add('hidden');

  fetch(apiUrl, { headers: headers })
    .then(response => response.json())
    .then(data => {
      if (data.results.length > 0) {
        displayResults(data.results);
      } else {
        displayNoResults();
      }
    })
    .catch(error => {
      console.error('Error:', error);
    })
    .finally(() => {
      document.getElementById('loadingMessage').classList.add('hidden');
    });
}

function displayResults(movies) {
  const resultsBody = document.getElementById('resultsBody');
  resultsBody.innerHTML = '';
  movies.forEach(movie => {
    const row = document.createElement('tr');
    const titleCell = document.createElement('td');
    const yearCell = document.createElement('td');
    const genreCell = document.createElement('td');

    titleCell.textContent = movie.title;
    yearCell.textContent = movie.release_date ? movie.release_date.split('-')[0] : 'Unknown';

    const genreNames = movie.genre_ids.map(id => genreMap[id]).join(', ');
    genreCell.textContent = genreNames;

    row.appendChild(titleCell);
    row.appendChild(yearCell);
    row.appendChild(genreCell);
    resultsBody.appendChild(row);
  });
  document.getElementById('resultsTable').classList.remove('hidden');
}

function displayNoResults() {
  const resultsBody = document.getElementById('resultsBody');
  resultsBody.innerHTML = '';
  const row = document.createElement('tr');
  const noResultsCell = document.createElement('td');
  noResultsCell.setAttribute('colspan', '3');
  noResultsCell.textContent = 'No results found';
  row.appendChild(noResultsCell);
  resultsBody.appendChild(row);
  document.getElementById('resultsTable').classList.remove('hidden');
}
