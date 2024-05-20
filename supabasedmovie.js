const supabaseClient = require('@supabase/supabase-js')
const bodyParser = require('body-parser')
const express = require('express')
const validator = require("email-validator");

const app =express()
const port = 3000
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'))


const supabaseUrl = 'https://tqfptifcqulmmrwpeiyg.supabase.co'
const supabaseKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxZnB0aWZjcXVsbW1yd3BlaXlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYxMzIzNjgsImV4cCI6MjAzMTcwODM2OH0.piB_lRWzBBHzuRPTalauk6wIfTSWybbELJ81q9V8qYA'
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey)

app.get('/', (req,res) =>{
    res.sendfile('INST377-Movie-Search-Group-Project\public\INST377 Group Project Homepage.html',{root:__dirname})
})

 app.get('/profiles', async (req, res) => {
    console.log('Attempting to get all movie user Profiles')
    const { data, error } = await supabase
    .from('Profile')
    .select()
    
    if(error) {
        console.log('Error')
        res.send(error)

    }else{
        res.send(data)
    }
    

})


app.post('/profile', async(req,res) =>{
    console.log('Adding Profile')
    var firstname = req.body.firstname
    var lastname = req.body.lastname
    var email = req.body.email
    var movie = req.body.movie

    if(!validator.validate(email)){
        console.log(`Your ${email} is invalid`)
        res.statusCode =400;
        res.header('Content-type', 'application/json')
        var errorjson={
            "message": `${email} is not a valid email`
        }
        res.send(JSON.stringify(errorjson))
        return;
    }

    const { data, error } = await supabase
    .from('Profile')
    .insert({'Profile_first_name': firstname, 'Profile_last_name': lastname, 'Profile_email': email  ,'FavoriteMovie': movie})
    .select()
    
    if(error) {
         console.log('Error')
         res.send(error)
        }else{
            res.send(data)
            }

})

app.listen(port, () => {
        console.log('Movie search APP is working!')
}) 