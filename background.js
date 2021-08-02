
chrome.runtime.onInstalled.addListener(() => {
  console.log('onInstalled...');
  // create alarm after extension is installed / upgraded
  chrome.alarms.create('startRequest', { periodInMinutes: 4 });
  startRequest();
 
    
    
  });
  

  chrome.alarms.onAlarm.addListener(alarm=>{
    startRequest();
  });




async function startRequest() {
  
  const response = await fetch('https://api.quotable.io/random');
  const newData = await response.json();
  const data = `${newData.content} —${newData.author}`
  console.log(data);
  // chrome.storage.sync.set({data});

  
  var options = {
    title: 'Random Quotes',
    message: data,
    iconUrl: '/images/favicon-16x16.png',
    type: 'basic',
    // requireInteraction: true
  }
  chrome.notifications.create('', options);
 
}



  
    
 

   

  
  


