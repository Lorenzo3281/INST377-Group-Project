function FetchAPI(){ 
    return fetch(`https://api-fulfill.dataexchange.us-east-1.amazonaws.com/v1`)
    .then((res) => res.json())
    .then((data) =>{
        console.log(data)
    })
}