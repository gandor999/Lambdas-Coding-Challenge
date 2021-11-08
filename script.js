console.log('Hello');

// Get data from database

let data = '';

let getData = async () => {
	fetch("http://localhost:4000/countries/")
	.then(res => res.json())
	.then(res => data = res)

}

getData();


console.log(data);





/*const button1 = document.querySelector('#button1');

button1.addEventListener('click', e => {
	console.log(data[0]._id);

	const div = document.createElement('div');
	const body = document.body;
	const p = document.createElement('p')

	div.setAttribute('id', 'div-1')
	p.setAttribute('id', 'p-1')
	p.setAttribute('class', 'bg-primary')
	p.innerText = data[0]._id;

	body.append(div)
	div.append(p)

});*/






// Put code for filter here along with displaying everything


