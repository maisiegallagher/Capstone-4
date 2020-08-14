let nArr = []; //name array
let pArr = []; //price array

function addToCart(pName, pPrice) {
	nArr.push(pName);
	pArr.push(pPrice);
	
}

function printCart() {
	let i;
	let total = 0;
	for (i = 0; i < pArr.length; i++) {
		total += pArr[i];
	}
	
	
	function printReceipt() {
		let i;
		let order = 0;
		for (i=0; i < pArr.length; i++) {
			order = pName, pPrice;
		}
	}
	
	let finalCart = document.getElementById("finalCart");
	let order = document.getElementById("order");
	
	
	order.innerHTML = "order: " + order;
	finalCart.innerHTML = "total: " + total;
}