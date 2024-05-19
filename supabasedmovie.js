const supabaseClient = require('supabase/supabase-js')
const express = require('express')

const app =express()
const port = 3000
app.use(express.static(__dirname + '/public'))


const supabaseUrl = 'https://tqfptifcqulmmrwpeiyg.supabase.co'
const supabaseKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxZnB0aWZjcXVsbW1yd3BlaXlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYxMzIzNjgsImV4cCI6MjAzMTcwODM2OH0.piB_lRWzBBHzuRPTalauk6wIfTSWybbELJ81q9V8qYA'
const supabase = supabaseClient.createClient(supabasUrl, supabasekey)
 app.get('/profiles', async (req, res) => {
    console.log('attempting to get all customers')
    const { data, error } = await supabase
    .from('Profile')
    .select()
    console.log('Data:',data)
    console.log('Error:',error)

})

app.listen(port, () => {
        console.log('App is alive')
})