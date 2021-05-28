

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB =  {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

for(let i=0;i<2;i++){
    let a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');
    if(a!=null && b!=null && a!='' && b!='' && a.length < 50 && b.length < 50){
        personalMovieDB.movies[a] = b;
    }
    else{
          i--;
    }
}
console.log(personalMovieDB);

if(personalMovieDB.count< 10 ){
    console.log('Просмотренно мало фильмов');
}
if(personalMovieDB.count <= 10 && personalMovieDB.count > 30 ){
    consosle.log('Вы классический зритель');
}
if(personalMovieDB.count >= 30 ){
    console.log('Вы киноман');
}