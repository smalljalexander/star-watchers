//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/


document.querySelector('button').addEventListener('click', getApod)


    function getApod(){
        const date = document.querySelector('input').value 
    const url = `https://api.nasa.gov/planetary/apod?api_key=JvEGqkuv6abeB5ygZtTgfaMI5641FPuHhOvqLqY9&date=${date}`
    fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('img').src = data.hdurl
        document.querySelector('h2').innerText = data.title
        document.querySelector('h3').innerText = data.explanation 
          if(data.media_type === 'image'){
            document.querySelector('img').src = data.hdurl
          } else if(data.media_type === 'video'){
            document.querySelector('iframe').src = data.url
          }
      })
      .catch(err => {
          console.log(`error ${err}`)
      })
    }

