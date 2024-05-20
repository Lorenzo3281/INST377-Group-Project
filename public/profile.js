async function loadprofile(){
    var host = window.location.origin;
    console.log(host)
    await fetch( `${host}/profile`)
    .then((res) => res.json())
    .then((res) =>{
        console.log(res)
    // Construct HTML for displaying existing profiles
    var profileList = '<h2>Existing Profiles:</h2>';
    profiles.forEach((profile) => {
        profileList += `<p>Name: ${profile.Profile_first_name} ${profile.Profile_last_name}, Email: ${profile.Profile_email}, Favorite Movie: ${profile.FavoriteMovie}</p>`;
    });
    
    // Append existing profiles HTML to the userprof div
    document.getElementById('userprof').innerHTML = profileList;
})
.catch((error) => {
    console.error('Error fetching profiles:', error);
});
}



window.onload = loadprofile