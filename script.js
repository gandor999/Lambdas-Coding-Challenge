console.log('Hello');

// Get data from database

let product = '';

const getProducts = () => {
	fetch("http://localhost:4000/products/")
	.then(res => res.json())
	.then(data => product = data)
}

getProducts();



/*const button1 = document.querySelector('#button1');

button1.addEventListener('click', e => {
	console.log(product[0]._id);

	const div = document.createElement('div');
	const body = document.body;
	const p = document.createElement('p')

	div.setAttribute('id', 'div-1')
	p.setAttribute('id', 'p-1')
	p.setAttribute('class', 'bg-primary')
	p.innerText = product[0]._id;

	body.append(div)
	div.append(p)

});*/






// Put code for filter here along with displaying everything


