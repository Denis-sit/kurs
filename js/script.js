

let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }

}
start();

const personalMovieDB =  {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

function rememberMyFilm(){
    for(let i = 0;i<2;i++ ){
        let a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
        if(a!=null && b!=null && a!='' && b!='' && a.length < 50 && b.length < 50){
            personalMovieDB.movies[a] = b;
        }
        else{
              i--;
        }
    }
}
rememberMyFilm();


function detectPersonalLevel(){
    if(personalMovieDB.count< 10 ){
        console.log('Просмотренно мало фильмов');
    }
    if(personalMovieDB.count <= 10 && personalMovieDB.count > 30 ){
        consosle.log('Вы классический зритель');
    }
    if(personalMovieDB.count >= 30 ){
        console.log('Вы киноман');
    }
}
detectPersonalLevel();

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
};
showMyDB(personalMovieDB.privat)

function writeYoyGeneres(){
    for(let i=1;i<=3;i++){
        let c = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1]=c;
    }
}

writeYoyGeneres();