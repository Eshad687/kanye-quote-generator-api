//load quotes from kanye.rest server

//using arrow function
const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuotes(data))
}

loadQuotes();

const displayQuotes = quotes => document.getElementById('quote').innerText = quotes.quote

//quote is the object property
