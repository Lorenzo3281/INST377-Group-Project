let genreMap = {};

document.addEventListener('DOMContentLoaded', function() {
  fetchGenres();
});

function fetchGenres() {
  const apiKey = '72797a9086db2d02568944a6a04a121a';
  const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;

  fetch(apiUrl)
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
  const apiKey = '72797a9086db2d02568944a6a04a121a';
  const apiUrl = `https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=${apiKey}`;
  document.getElementById('loadingMessage').classList.remove('hidden');
  document.getElementById('resultsTable').classList.add('hidden');

  fetch(apiUrl)
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
