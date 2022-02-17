var globalArray = [];
$(document).ready(function() {
	$('#btn').on('click', function() {
		var id = document.getElementById('Id').value;
        var flag = 0;
		for (var i = 0; i < globalArray.length; i++) {
			if (globalArray[i].id == id) {
				flag = 1;
			} 
        }
        if(flag == 1){
            alert('id already exist')
        }else{
            add();
        }
        

	});
});
function add() {
	var id = document.getElementById('Id').value;
	var name = document.getElementById('Name').value;
	var price = document.getElementById('Price').value;
	var quantity = document.getElementById('Quantity').value;
    var totalPrice = price*quantity;

	var obj = {
		id: id,
		name: name,
		price: price,
		quantity: quantity,
        totalPrice: totalPrice
	};
	globalArray.push(obj);
	console.log(globalArray);
	display();
}
function update(x) {
	console.log(x);
	for (var i = 0; i < globalArray.length; i++) {
		if (globalArray[i].id == x) {
			var u_value = document.getElementById('update' + [ i ]).value;
			if (u_value == '') {
				alert('please enter a value');
			} else {
				globalArray[i].quantity = u_value;
				globalArray[i].totalPrice =globalArray[i].price*globalArray[i].quantity;
				display();
			}
		}
	}
}
function increace(x){
	for (var i = 0; i < globalArray.length; i++) {
		if (globalArray[i].id == x) {
			globalArray[i].quantity++;
			globalArray[i].totalPrice =globalArray[i].price*globalArray[i].quantity;
			display();
			
		}
	}
}
function decreace(y){
	for (var i = 0; i < globalArray.length; i++) {
		if (globalArray[i].id == y) {
			globalArray[i].quantity--;
			globalArray[i].totalPrice =globalArray[i].price*globalArray[i].quantity;
			display();
			
		}
	}
}
function display() {
	var dis =
		'<table><tr><th>Id</th><th>Name</th><th>Price</th><th>Quantity</th><th>total price</th><th>add</th><th>sub</th><th>enter new quantity </th><th>update</th></tr>';
	for (var i = 0; i < globalArray.length; i++) {
		dis +=
			'<tr><td>' +
			globalArray[i].id +
			'</td><td>' +
			globalArray[i].name +
			'</td><td>' +
			globalArray[i].price +
			'</td><td>' +
			globalArray[i].quantity +
			'</td><td>' +
			globalArray[i].totalPrice +
			'</td><td><button class="Submit" id="btn" value="update" onclick="increace(' +
			parseInt(globalArray[i].id) +
			')">+</button></td><td><button class="Submit" id="btn" value="update" onclick="decreace(' +
			parseInt(globalArray[i].id) +
			')">-</button></td><td><input type="text" id="update' +
			[ i ] +
			'"></td><td><button class="Submit" id="btn" value="update" onclick="update(' +
			parseInt(globalArray[i].id) +
			')">update</button></td></tr>';
	}

	dis += '</table>';
	document.getElementById('content').innerHTML = dis;
}
