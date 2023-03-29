function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
 sleep(2000); 
  //or

//   async function myFunction() {
//     console.log('Start');
//     await sleep(2000);
//     console.log('End');
//   }
  
//   myFunction();
  