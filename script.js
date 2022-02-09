
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

// Код возьмите из предыдущего домашнего задания
let numberOfFilms ;


function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
    }
}
start()
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


// const a = prompt('Один из последних просмотренных фильмов'),
//       b = prompt('На сколько оцените его?'),
//       c = prompt('Один из последних просмотренных фильмов'),
//       d = prompt('На сколько оцените его?');

//       personalMovieDB.movies[a] = b;
//       personalMovieDB.movies[c] = d;




function rememberMyFilms() {
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
}
rememberMyFilms();
// let i=0;
// while (i < 2) {
//     const a = prompt('Один из последних просмотренных фильмов'),
//           b = prompt('На сколько оцените его?');
          
//     i++    
//     if (a != '' && a != null && b !='' && b!= null && a.length<50) {
//         personalMovieDB.movies[a] = b;
//         console.log('ok')
//     }   else {
//         i--;
//         console.log('error')
//     }
// }
// let i = 0;
// do {
//     const a = prompt('Один из последних просмотренных фильмов'),
//           b = prompt('На сколько оцените его?');
          
//  if (a != '' && b!= '' && a!= null && b != null && a.length <50){
//      personalMovieDB.movies[a] = b;
//      console.log('ok');
//      i++
//  } else{
//      console.log('error');
//  }
// }
// while (i<2);
// console.log(personalMovieDB);
// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
// возвращаем пользователя к вопросам опять
// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

function detectPersonalLevel (){
    if (personalMovieDB.count < 10){
    alert('Просмотрено довольно мало фильмов');
} else if (10 < personalMovieDB.count && personalMovieDB.count < 30){
    alert('Вы классический зритель');
} else if (personalMovieDB.count > 30){
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}    
}
detectPersonalLevel();
// 4) Потренироваться и переписать цикл еще двумя способами*/
// function showMyDB (hidden) {
//     if (!hidden){
//         console.log(personalMovieDB);
//     }
// }
// showMyDB(showMyDB(personalMovieDB.privat));
function writeYourGenres (){
    for(i=1; i <=3; i++) {
       const gener = prompt(`Ваш любимый жанр под номером ${i}`);
       personalMovieDB.genres[i-1] = gener;
    }
}
writeYourGenres();