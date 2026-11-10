import express from 'express';
const app = express();
const port = 3000;
app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.get('/api/fun-fact',async(req, res)=>{
    try{
        const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
         const funfacts = await(response.json())
         console.log(funfacts)
          console.log(funfacts.text)
        res.json({fact:funfacts.text})

    }catch(e){
        return res.status(404).json({'error': 'could not fetch fun fact'})
    }
})

app.listen(port,()=>{
    console.log('Server is running on port: '+port)
})