function shuffle(array) {
    var tmp, current, top = array.length;
    if(top) while(--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
    return array;
  }

function generateRandomNumbers(totalNumbersToGenerate) {
    for (var a=[],i=0;i<totalNumbersToGenerate;++i) {
        a[i]=i;
    }

    return shuffle(a);
}

function createRandomNumberArray(howManyInArray) {
    let result;
    
    if(typeof howManyInArray !== 'number') {
        throw 'The parameter supplied must be a number.';
    }
    else if(howManyInArray > 100000) {
        throw 'createRandomNumberArray will not create arrays with a length that exceeds 100000.';
    }
    result =  generateRandomNumbers(howManyInArray);
    console.log('createRandomNumberArray  result: ', result);
    return result;
}


let aPromise = new Promise(function(resolve, reject) {
    setTimeout(function() { resolve('Resolved!!!'); },10000 );

});


//let myPromise = new Promise(function(resolve, reject) {
//    resolve(); //execute when successful.
//    reject(); //execute when an error occurs
//});


//myPromise.then(
//    function(value) { /* code if successful */},
//    function(error) { /* code if error */}
//)


let myPromise1 = new Promise(function(resolve, reject) {
    let totalNums = 1000;

    let arr =[];
    
    try {
        arr = createRandomNumberArray(totalNums);
        resolve(arr);
    }
    catch(err){
        //execute when an error occurs
        reject(err);
    }
});

let myPromise2 = new Promise(function(resolve, reject) {
    let val = 'x1000';

    let arr =[];
    
    try {
        arr = createRandomNumberArray(val);
        resolve(arr);
    }
    catch(err){
        //execute when an error occurs
        reject(err);
    }
});

myPromise1.then(
    function(value) { console.log('It resolved to: ', value); },
    function(error) { console.log('An errorr occurred: ', error); }
);

myPromise2.then(
    function(value) { console.log('It resolved to: ', value); },
    function(error) { console.log('An error occurred: ', error); }
);

function displayResults(results, where) {
    document.getElementById(where).innerHTML = results;
}

let myAppPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("I love You !!"); }, 3000);
  });
  
  myAppPromise.then(function(value) {
      console.log(" myAppPromise.then value: ", value)
    displayResults(value, "results1");
  });

function getFile(myCallback) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
    req.onload = function() {
        if (req.status == 200) {
            myCallback(req.responseText, "results2");
        } else {
            myCallback("Error: " + req.status, "results2");
        }
    }
    req.send();
}
  
getFile(displayResults);

let myPromise = new Promise(function(myResolve, myReject) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.htm");
    req.onload = function() {
      if (req.status == 200) {
        myResolve(req.response);
      } else {
        myReject("File not Found");
      }
    };
    req.send();
  });
  
  myPromise.then(
    function(value) {displayResults(value , "results3");},
    function(error) {displayResults(error, "results3");}
  );

