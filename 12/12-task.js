'use strict';

//1

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

//2

let personalMovieDB = {

    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false

};
//3

let movie = prompt('Один из просмотренных фильмов?','');
let mark = prompt('На сколько оцените его?','');

let movie2 = prompt('Один из просмотренных фильмов?','');
let mark2 = prompt('На сколько оцените его?','');


personalMovieDB.movies[movie]=mark;
personalMovieDB.movies[movie2]=mark2;

console.log(personalMovieDB);