// async function randomQuote() {
//     const response = await fetch('https://api.quotable.io/random')
//     const data = await response.json()
//     console.log( `${data.content} —${data.author}`)
//   }
//    randomQuote();

  
chrome.runtime.onMessage.addListener((msg, sender, response)=> {
  if (msg.name == "fetchWords") {
    const apiCall = 'https://api.quotable.io/random';
    console.log(apiCall);

    fetch(apiCall).then(function(res) {
      if (res.status !== 200) {
        response({content: 'Error', author: 'There was a problem loading the quote' });
        return;
      }
      res.json().then(function(data){
        response({content: data.content, author: data.author});
      });
    }).catch(function(err){
      response({content: 'Error', author: 'There was a problem loading the quote' });
    });
    
  }
  return true;
});
  
  
  
  
  


