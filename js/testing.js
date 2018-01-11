console.log(window);

//setTimeout

function raiseAlarm() {
	alert("I show it ones after two seconds");
}

var delayedAlert = setTimeout(raiseAlarm,10000);
clearTimeout(delayedAlert);

//


/*clearTimeout(delayedAlert);*/

console.log(document);

console.log(location);

//window.location = 'http://www.kodilla.pl'; - przekierowanie na inną stronę

console.log(location);

var navigation = document.getElementById('nav');
console.log(navigation);

var withMenuItemsClass = document.getElementsByClassName('menuItem');

console.log(withMenuItemsClass);

//wyszukanie elementów html o clasie menuItem znajdujących się w elemencie o id = menu - zwraca tablicę elementów
var menu = document.getElementById('Menu');
var withMenuItemsClassInNav = menu.getElementsByClassName('menuItem');
console.log(withMenuItemsClassInNav);

var itemsByTagname = document.getElementsByTagName('li');
console.log(itemsByTagname);

var navigation = document.getElementById('nav');
console.log(navigation.nextElementSibling);

//tworzenie nowego elementu p i dołaczenie go do html dokumentu na samym końcu elementu rodzica
var navigation = document.getElementById('nav');
var newElement = document.createElement('p');
newElement.innerHTML = 'The text inside the p tag, which is under newElem';
navigation.appendChild(newElement);

//dodawanie nowej klasy do elementu

var menu = document.getElementById('Menu');
menu.className += "navbar-right";
console.log(menu.className);