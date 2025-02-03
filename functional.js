let states = ["Kansas", "Washington", "South Dakota", "New York"]

function urlify(string) {
  return  string.toLowerCase().split(" ").join("-")
}

//function imperativeUrls(elements) {
//    let urls = []
//    elements.forEach(function(element) {
//        urls.push(urlify(element))
//    });
//    return urls
//}
//console.log(imperativeUrls(states));

//function functionalUrls(elements) {
//    return elements.map(element => urlify(element))
//}
//console.log(functionalUrls(states))

function functionalMap(states) {
    return states.map(state => urlify(state))
}

function fullAddress(states) {
    return states.map(state => "https://www.example.com/" + urlify(state))
}

console.log(functionalMap(states));
console.log(fullAddress(states));