console.log(window);

//setTimeout

function raiseAlarm() {
	alert("I show it ones after two seconds");
}

var delayedAlert = setTimeout(raiseAlarm,10000);

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