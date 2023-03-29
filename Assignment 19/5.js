function delay(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }
delay(2000);  

//or 

delay(1000).then(() => {
  console.log('This will be executed after 1000ms');
});

