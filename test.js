
/*
Задача 1 Найти макс элемент в массиве
function maxElem(arr) {
  return Math.max.apply(null, arr); //Применяем готовый метод
}
console.log(maxElem([50,2,88,34])); //Проверяем
*/


/*
Задача 2 (Сортировка пузырьком)
Пришлось загуглить определение, так как не совсем понимал что вообще из себя представляет такая сортировка =)
function bubbleSortData(elem) {
    let variable; //Обьявляем переменную
    for (let i = elem.length - 1; i > 0; i--) { //Запускаем первый цикл в обратную сторону (с конца в начало)
        let counter = 0; //Счетчик равен нулю
        for (let j = 0; j < i; j++) { //Запускаем второй цикл (с начала до конца)
            if (elem[j] > elem[j+1]) { //Если первый элемент больше следующего
                variable = elem[j]; //Записываем в переменную значение первого элемента
                elem[j] = elem[j+1]; //Первый элемент равен второму
                elem[j+1] = variable; //Второму элементу присваиваем значение первого
                counter++; //Увеличиваем счетчик на единицу
            }
        }
        if(counter==0){ //Если счетчик равен нулю
          break; //Прерываем цикл
        }
    }
  return elem; //Возвращаем массив
 };

console.log(bubbleSortData([7,0,-4,3,1,-2,5]));
*/


/*
Задача 3 (Работа с ДОМ)
Перед тем как начать нам нужно добавить классы '.parent' к абзацу-родителю, где находятся кнопки и класс 'prev' ко второй кнопке с текстом 'Secondary Action', а также класс 'quest' к бутстраповской карточке куда будем скроллить
Для того чтобы найти бутстраповскую карточку с текстом 'Quest Academy' нам также необходимо задать какой-то класс, так как выполнить поиск по innerHTML не представляется возможным.

Добавляем эффект ховера в сss

.hover:hover{
background-color:rgb(60, 237, 68);
color:#FFFFFF;
}

function addBtn() {
let newBtn = document.createElement('button');   //Создаем новую кнопку
let prevElem = document.querySelector('.prev'); //Получаем кнопку куда будем аппендить новую
let parentElem = document.querySelector('.parent'); //Получаем родительский элемент (абзац)
newBtn.innerHTML = 'Do Something'; //Добавляем текст новой кнопке
newBtn.classList.add('btn','link','my-2'); //Добавляем кнопке те же классы что и у других
parentElem.insertBefore(newBtn,prevElem); //Аппендим новую кнопку между двумя предыдущими

//Добавляем ивенты к кнопке
newBtn.addEventListener('mouseover',hover);
newBtn.addEventListener('click',scroll);
}

function hover() {
this.classList.toggle('hover');
}

function scroll() {
let questAcademy = document.querySelector('.quest');
questAcademy.scrollIntoView({block: "center", inline: "center"});
questAcademy.parentElement.parentElement.style.cssText = 'border:1px solid red';
}

addBtn();
*/


/*
Задача 4 (Бинарный поиск по массиву)
Задача оказалась не простой для моего уровня и пришлось немножко погуглить чтобы понять как это должно работать (надеюсь, это не слишком криминально=)

function binarySearch(value, arr) {

   let first    = 0;                // начальный индекс в массиве
   let last     = arr.length - 1;  // конечный индекс
   let position = -1;
   let found    = false;
   let middle;


   while (found === false && first <= last) { //Запускаем цикл while, который действует пока переменная равна false и первый индекс не достиг конца массива

       middle = Math.floor((first + last) / 2); //При помощи метода Math.floor округляем сумму начального индекса и конечного разделенную на два до ближайшего целого (вниз)

       if (arr[middle] == value) { //Если элемент массива (сумма индексов) равен искомому элементу
           found = true; //ставим переменную в true
           position = middle; //Присваиваем сумму индексов переменной position
       } else if (arr[middle] > value){ //Если же массив с индексом равному сумме позиций больше чем искомый элемент
           last = middle - 1;
       } else {  // значение в верхней части списка
           first = middle + 1;
       }

   }

   return position; //Возвращаем позицию элемента
}

//Выводим результат
console.log(binarySearch(5, [1,6,18,9,35,-200]));


*/


/*
Задача 5 (2х-мерный вектор)
Не разобрался, сложновато =(
*/

/*
Задача 6 Является ли строка палиндромом
function checkIfPal(str) {
for(let i = 0; i < str.length; i++) { //Запускаем цикл по строке
  if (str[i] === str[str.length - 1 - i]) { Если буква строки равна последней
      return 'yes'; //Строка - палиндром
  } else {
      return 'no'; //Строка - не палиндром
  }
}
}

//Проверяем
console.log(checkIfPal('нежен'));
console.log(checkIfPal('смежен'));
*/
