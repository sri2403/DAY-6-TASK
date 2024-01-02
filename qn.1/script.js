//a,b,c
class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    getTitle(){
        return this.title;
    }
    getRating() {
        return this.rating;
    }
    getPG(){
        let pgMovies=[];
        for(let i=0;i<arguments.length;i++){
            if(arguments[i].getRating()==="PG"){
                pgMovies.push(arguments[i]);
            }
        }
        return pgMovies;
    }
}
const movies = [
    new Movie("Inception", "Warner Bros.","PG-13"),
    new Movie("Toy Story", "Pixar", "G"),
    new Movie("Finding Nemo", "Pixar", "PG"),
    new Movie("The Lion King", "Disney", "PG")
];

let res=movies[0].getPG(...movies);
console.log(res);

//d
const d=new Movie("Casino Royale","Eon Productions","PG13");
console.log(d);