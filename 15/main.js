'use strict';


/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//1




// let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// //2

// let personalMovieDB = {

//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false

// };

// //3

// for (let i = 0; i < numberOfFilms; i++) {

//     let movie = prompt('Один из просмотренных фильмов?', '');
//     let mark = +prompt('На сколько оцените его?', '')
//     if (movie.length < 50 && movie != '' && movie != null && mark > 0 && mark < 10 && mark != null) {
//         personalMovieDB.movies[movie] = mark;
//     } else {
//         i--;
//     }

// }
// //////////4
// if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
//     alert('Вы классический зритель');
// } else if (personalMovieDB.count <= 10) {
//     alert("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 30) {
//     alert("Вы киноман");
// } else {
//     alert('error');
// }
// console.log(personalMovieDB);



const s1 = 'new strring';
const s2 = 'new  strring';

const s3 = s1.slice(4, 11);

console.log(s1 + "    " + s3);


// function first() {
//     setTimeout(function() {
//         console.log("111111");
//     }, 500);
// }

// function second() {
//     console.log("22222");
// }

// first();
// second();


// function a(x, callbackF) {

//     console.log(x + ' ');
//     callbackF();

// }


// a('Java', function() {
//     console.log('22222222');
// });


let obj = {
    firstName: 'Makhmud',
    lastName: 'Urmanov',
    grade: 4,
    age: 26,
    isMarried: true,
    education: {
        school: {
            number: 10,
            address: 'Yangikurgan',
            tel: '998935092421',
            class: 9,
            classChar: 'D',
            pupils: {
                girlsCount: 13,
                boysCount: 26
            }
        },
        college: {
            collegeName: 'YYSK',
            collegeNickName: 'sariq',
            studentsCount: 1215
        },
        isEducatedInHighSchool: true,
        hasDiploma: true,
        makeTest: function {
            console.log('Test done');
        }
    }
}




console.log(Object.keys(obj).length);