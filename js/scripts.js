//Business Logic for MovieTicket
function MovieTicket() {
    this.movies = {}
}

MovieTicket.prototype.addMovie = function (movie) {
    this.movies[movie.movieName] = movie;
}

//Business Logic for Movie
function Movie (movieName, movieRating) {
    this.movieName = movieName;
    this.movieRating = Rating;
};

Movie.prototype.movieInfo = function () {
    return this.movie + "is Rated" + this.rating
};
// Movie.prototype.assignId = function