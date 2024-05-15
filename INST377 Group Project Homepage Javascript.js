async function FetchAPI(){ 
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Njk4MWVhY2Q1MzNmZGE1MTQ0MjJmYjhiNTg2YzExYyIsInN1YiI6IjY2NDU0MDAzY2M2ZWUyNmVmZDVjYTEwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ok2hDpRa1efANtr1GqM83v6uBTPL_60oFizxrTHxYHI"
        },})
    .then((res) => res.json())
    .then((data) =>{
        console.log(data)
    })
}
