 const container = document.querySelector('.container');


chrome.runtime.sendMessage({name: "fetchWords"}, (response)=>{
    console.log(response);
    container.innerHTML = `${response.content} - ${response.author}`;
});



