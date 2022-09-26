/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */


let allImg = document.querySelectorAll('.promo__adv img')
let plod = document.querySelector('.promo__genre')
let promo__bg = document.querySelector('.promo__bg')

// 1

allImg.forEach(img => {
    function rem() {
        img.remove()

    }
    rem()
})

// 2
plod.innerHTML = 'драма'

// 3

promo__bg.style.backgroundImage = `url("./img/bg.jpg")`

// 4 
let promo__interactive = document.querySelector('.promo__interactive-list')



const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};





let a = movieDB.movies.sort()


movieDB.movies.forEach(function (titles, index) {

    titles = (index + 1) + '.' + ' ' + titles;

        let one = document.createElement('ol')
        let li = document.createElement('li')
        let del = document.createElement('div')
    
    
        li.classList.add('promo__interactive-item')
    
       
        li.innerHTML = titles
       
    
        del.classList.add('delete')
    
    
        promo__interactive.append(one)
    
        one.append(li)
        li.append(del)
    
        del.onclick = () => {
            li.remove()
        }
    // }
});



'use strict';






