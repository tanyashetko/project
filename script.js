
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
let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?','');
console.log(numberOfFilms);
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt('Один из последних просмотренных фильмов'),
      b = prompt('На сколько оцените его?'),
      c = prompt('Один из последних просмотренных фильмов'),
      d = prompt('На сколько оцените его?');

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;
console.log(personalMovieDB);
