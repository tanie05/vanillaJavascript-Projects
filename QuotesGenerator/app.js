const quote = document.getElementById("quote")
const author = document.getElementById("author")


function generate() {

    
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        
        const index = Math.floor(Math.random() * data.length);
        quote.textContent = data[index].text;
        author.textContent = data[index].author;
    });
    
    
    
}



