function getButtonClass() { //
	var navigation = document.getElementById('nav');
	var elementsWithButtonClassinNav = navigation.getElementsByClassName('button');
	return elementsWithButtonClassinNav = navigation.getElementsByClassName('button');
}

var x = getButtonClass(); //przechowuje tablicę zawierającą wszystkie buttony o klasie button
console.log(x);
var y = x.length; //przechowuje długość tablicy
console.log(y);

function showElementsContent(x,y){
	for(var i=0; i<y; i++){
		alert(x[i].innerText);
	}
}

var z = showElementsContent(x,y); 