//array of food and price
var groceryList = [

	item1 = {
		"name": 'eggs',
		"price": 2.50
	},
	item2 = {
		"name": 'milk',
		"price": 3.15
	},

	item3 = {
		"name": 'expensive bread',
		"price": 6.20
	},

	item4 = {
		"name": 'broccoli',
		"price": 1.25
	},

] ;
//declaring li elements as variables
var li1 = document.getElementById('item-one');
var li2 = document.getElementById('item-two');
var li3 = document.getElementById('item-three');
var li4 = document.getElementById('item-four')
//on load, get shit from array and write it to the list
window.addEventListener('load', function(){
	li1.innerText = groceryList[0].name + " - $" + groceryList[0].price.toFixed(2);
	li2.innerText = groceryList[1].name + " - $" + groceryList[1].price.toFixed(2);
	li3.innerText = groceryList[2].name + " - $" + groceryList[2].price.toFixed(2);
	li4.innerText = groceryList[3].name + " - $" + groceryList[3].price.toFixed(2);
	totalMe();
})
//current total



var addToList = document.getElementById('add-to-list')
//adds price and name of new item to array on blur of 2nd field, then adds new LI and appends to list
addToList.addEventListener('click', function(){
	var itemName = document.getElementById('new-item').value;
	var itemPrice = Number(document.getElementById('new-price').value);
	var newItem = {name: itemName, price: itemPrice};
	groceryList.push(newItem);
	//console.log(groceryList, total)
	var newLi = document.createElement('li')
	newLi.innerText = groceryList[groceryList.length-1].name + " - $" + groceryList[groceryList.length-1].price.toFixed(2)
	document.getElementById('shopping-list').appendChild(newLi);
	totalMe();

});

//couldn't get this to work the way i wanted, onc lick the array pop behaves as expected,
//but in order to remove last child I have to double click, leading to innaccurate math.
//if you're reading this, could you take a look and tell me why? thanks!
/*var removeFromList = document.getElementById('remove-from-list')

removeFromList.addEventListener('click', function(){
	var listEl = document.getElementById('shopping-list');
	listEl.removeChild(listEl.lastChild);
	groceryList.pop();
	totalMe(); 
});*/


//loops through array to get total and then passes string into document
function totalMe() {
	var subtotal = 0;
	groceryList.forEach(function(item){
    subtotal+=item.price;
});
var tax = subtotal *.06;
document.getElementById("subtotal").innerText = "subtotal is $" + subtotal.toFixed(2);
document.getElementById("tax").innerText = "taxes comes to $" + tax.toFixed(2);
document.getElementById("total").innerText = "total is $" + (subtotal + tax).toFixed(2);
}
              