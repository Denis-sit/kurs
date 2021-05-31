



const personalMovieDB =  {
    count:0,
    movies:{},
    actors:{},
    genres:[],
    privat:false,
    start:function (){
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while( personalMovieDB.count == '' ||  personalMovieDB.count == null || isNaN( personalMovieDB.count)){
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    
    },
    rememberMyFilm: function(){
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
    },
    detectPersonalLevel: function(){
        if(personalMovieDB.count< 10 ){
            console.log('Просмотренно мало фильмов');
        }
        if(personalMovieDB.count <= 10 && personalMovieDB.count > 30 ){
            consosle.log('Вы классический зритель');
        }
        if(personalMovieDB.count >= 30 ){
            console.log('Вы киноман');
        }
    },
    showMyDB: function(hidden){
        if(!hidden){
            console.log(personalMovieDB);
        }
    },
    togglevisibleMyDB:function(){
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        }
        else{
            personalMovieDB.privat = true;
        }
    },
    writeYoyGeneres: function(){
        for(let i=1;i<2;i++){
            let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();
            if(genres == null || genres == ''){
                i--;
            }
            else{
            personalMovieDB.genres = genres.split(', ');
            personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach((item,i) => {
            console.log(`Любимый жанр ${i + 1} это ${item}`);
        });
    }
};








