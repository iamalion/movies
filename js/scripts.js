//Business Logic for MovieTicket
function MovieTicket() {
    this.movies = {}
    this.movieId = 0;
}

MovieTicket.prototype.addMovie = function (movie) {
    this.movies[movie.movieName] = movie;
}

MovieTicket.prototype.assignId = function () {
    this.movieId += 1;
    return this.movieId;
}

MovieTicket.prototype.findMovie = function(id) {
    if (this.movies[id] !== undefined) {
        return this.movies[id];
    }
    return false;
}

//Business Logic for Movie
function Movie (movieName, movieRating, movieTime) {
    this.movieName = movieName;
    this.movieRating = movieRating;
    this.movieTime = movieTime;

}
    
//UI Logic
function handleFormSubmission(event) {
event.preventDefault();
let radioButton = document.querySelector('input[name="movie"]:checked')
// const movie1= document.querySelector("input#wickId").value;
// const movie2= document.querySelector("input#spiderId").value;
if (radioButton){
    console.log("Radio button selected: ", radioButton.value);
} else {
    console.log("No radio button selected.")
}}

window.addEventListener("load", function() {
    document.querySelector("form#movieForm").addEventListener("submit",handleFormSubmission);
    console.log(document.querySelector("form#movieForm"))

});
    

// let movie1 = new Movie("John Wick", "R", "evening");
// let movie2 = new Movie("Spider-Man", "PG-13", "matinee");


// Movie.prototype.movieInfo = function () {
//     return this.movie + "is Rated" + this.rating
// };

