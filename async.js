async function hello() {
    return await Promise.resolve("Hello");
  };
  
hello().then(console.log);




  
async function makeResult(items) {
  console.log("makeResult started");
    let newArr= [];
    for(let i = 0; i < items.length; i++) {
      let a = document.createElement('a');
      let li = document.createElement('li');
      a.appendChild(document.createTextNode(items[i]));
      li.appendChild(a);
      newArr.push(li);
    }
    return newArr;
  }

function useThatResult(listItems) {
  console.log("useThatResult started");
  let ul = document.getElementById("myMenu");
  for(let i=0; i<listItems.length; i++){
    ul.appendChild(listItems[i]);
  }
}
  
async function getResult() {
    console.log("getResult started");
    let arr = ['ONE', 'TWO', 'THREE'];
    let result = await makeResult(arr); // Blocked on this line
    useThatResult(result); // Will not be executed before makeResult() is done
}

setTimeout(getResult, 30000);


async function foo() {
  let promise = new Promise(function(resolve, reject) {
    setTimeout(function() { resolve("done!")}, 60000);
  });

  //waits until the promise resolves
  let result = await promise;

  console.log(result);

}

function filterSearch() {
  //declare my variables
  let input, filter, ul, li, a, i;

  input = document.getElementById("mySearch");

  filter = input.value.toUpperCase();

  ul = document.getElementById("myMenu");

  li = ul.getElementsByTagName("li");

  //loop through each listItem
  for (i = 0; i < li.length; i++) {
    //grab the first hyperlink in this listItem
    a = li[i].getElementsByTagName("a")[0];

    //convert the HTML in the hyperlink to uppercase and determine if the filter string is that HTML
    //if it is found it will be at index of 0 or greater
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      //if found clear the display style to show the list item.
      li[i].style.display = "";
    } else {
      //else set the display style to none to hide the list item
      li[i].style.display = "none";
    }
  }
}