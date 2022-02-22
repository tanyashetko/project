
// console.log(1);
// let number = 5;
// number = 10;
// console.log(number);

// const obj = {
//     name: 'Dimok',
//     age: 30,
//     isMan: true
// };
// // console.log(obj.age);

// alert('Hello, Dimok');
// const result = confirm('Are you here?');
// const answer = prompt('Тебе есть 18?', '');
// console.log(answer);
// let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?','');
// console.log(numberOfFilms);
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
// const a = prompt('Один из последних просмотренных фильмов'),
//       b = prompt('На сколько оцените его?'),
//       c = prompt('Один из последних просмотренных фильмов'),
//       d = prompt('На сколько оцените его?');

//       personalMovieDB.movies[a] = b;
//       personalMovieDB.movies[c] = d;
// console.log(personalMovieDB);

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?','');

    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?','');
    }
},
    rememberMyFilms: function () {
    for (let i=0; i<2; i++) {
        const a = prompt('Один из последних просмотренных фильмов'),
              b = prompt('На сколько оцените его?');
                 
               if (a != null && a.length < 50 && a != '' && b !== null && b != '' ) {
                personalMovieDB.movies[a] = b;
                console.log('done');
    } else {
        console.log('error');
        i--;
}
    }
},
    detectPersonalLevel: function (){
                  if (personalMovieDB.count < 10){
                alert('Просмотрено довольно мало фильмов');
                } else if (10 < personalMovieDB.count && personalMovieDB.count < 30){
               alert('Вы классический зритель');
                } else if (personalMovieDB.count > 30){
               alert('Вы киноман');
                } else {
              alert('Произошла ошибка');
}    
},
    showMyDB: function (hidden) {
        if (!hidden){
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB:  function () {
        if (personalMovieDB.privat) {
             personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    writeYourGenres: () => {
          for(i=1; i <=3; i++) {
            let gener = prompt(`Ваш любимый жанр под номером ${i}`);
            if(gener == '' || gener == null){
                console.log('Error');
                i--;
            } else {
                personalMovieDB.genres[i-1] = gener;
            }
        }
         personalMovieDB.genres.forEach((item, i) => {
           console.log(`Любимый жанр ${i  + 1} - это ${item}`) ;
         });
    }
};




// 4) Потренироваться и переписать цикл еще двумя способами*/
// function showMyDB (hidden) {
//     if (!hidden){
//         console.log(personalMovieDB);
//     }
// }
// showMyDB(showMyDB(personalMovieDB.privat));
