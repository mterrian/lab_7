function grocery(name, price, quantity)
{
    this.name = name;
    this.price = price;
    this.quantity = quantity
    this.subtotal = price * quantity;
}

 

var milk = new grocery("milk", 2.49, 1);
var eggs = new grocery("eggs", 1.99, 1);
var broccoli = new grocery("broccoli", 3.15, 2);
//var newItem = new grocery("your data goes here", 1.11)
//groceryList.push(newItem)

function removeItem(x) {
  return groceryList.splice(x, 1)
}




var groceryList = [milk, eggs, broccoli];

function getTotal(x, y, z) {
     return x + y + z + (x + y + z)*.06
  
}

var total = getTotal(milk.subtotal, eggs.subtotal, broccoli.subtotal)

groceryList.forEach(function(item){
    console.log(item.name, "qty: " + item.quantity, "$" + item.subtotal.toFixed(2))
});

console.log('your total is $' + total.toFixed(2))


              