setTimeout(()=>{
    console.log('Hello');

},1000);


setTimeout(()=>{
    console.log('How have  you been?');

},2000);

// setInterval(function(){
//     console.log('hello');
// },200);

let myPromises=new Promises((resolve,reject)=>{
 let success=true;
 if(success){
    resolve('Task done successfully');
 }
 else
 {
    reject('Task failed!');
 }

})

myPromises.then((message) => console.log(message));
myPromises.catch((error) => console.log(error));
