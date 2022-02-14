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

console.log(generateRandomNumbers(40));