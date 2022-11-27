// Application progamming interface api

const jokeEL  = document.getElementById('joke');
const jokesbtn = document.getElementById('jokesbtn');

jokesbtn.addEventListener('click',  generateJoke)

// Fuunction Call
generateJoke()


 async function generateJoke(){
    const config = {
        headers: {
            Accept:'application/json',
        },
    }

    //Fetch data
    const res = await fetch('https://icanhazdadjoke.com'
    , config)

   const data = await res.json()
   jokeEL.innerHTML = data.joke
  

}

//USING THEN METHOD 

// function generateJoke(){
//     const config = {
//         headers: {
//             'Accept':'application/json',
//         },
//     }

//     //Fetch data
//     fetch('https://icanhazdadjoke.com',config)
//     .then(res=> res.json())
//     .then(data =>{
//         jokeEL.innerHTML = data.joke
//     })

// }