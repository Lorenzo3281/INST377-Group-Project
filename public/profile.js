async function loadprofile(){
    var host = window.location.origin;
    console.log(host)
    await fetch( `${host}/profile`)
    .then((res) => res.json())
    .then((res) =>{
        console.log(res)
    var tablehe
    })

}



window.onload = loadprofile