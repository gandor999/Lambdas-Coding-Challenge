console.log('Hello');

// Get data from database

let data = '';

let getData = async () => {
	fetch("http://localhost:4000/countries/")
	.then(res => res.json())
	.then(res => data = res)

}

getData();




setTimeout(() => {
	console.log(data);
}, 1000);


// Begin loading cards and images

const body = document.body;
const section = document.createElement('section');
const divRow = document.createElement('div');

section.setAttribute('id', 'content-section');
section.setAttribute('class', 'container-fluid d-flex justify-content-around justify-content-center mt-5');


body.append(section);
section.append(divRow);


// Load for flags section
setTimeout(() => {

	for(let i = 0; i < data.length; ++i){

		let divCol = document.createElement('div');
		let divCardBody = document.createElement('div');
		let h4Title = document.createElement('h4');
		let pTimeZone = document.createElement('p');
		let pCountryCode = document.createElement('p');
		let pCallingCode = document.createElement('p');
		let button = document.createElement('button');
		let img = document.createElement('img');


		divRow.setAttribute('class', 'row');
		divCol.setAttribute('class', 'card mt-5 col-md-4 col-sm-6');
		divCardBody.setAttribute('class', 'card-body')

		img.setAttribute('src', data[i].flag);
		img.setAttribute('class', 'card-img-top rounded');

		h4Title.setAttribute('class', 'card-title d-flex justify-content-center');
		h4Title.innerText = data[i].name;

		pTimeZone.setAttribute('class', 'card-text');
		pTimeZone.innerText = `Time Zones: ${data[i].timezones}`;
		pCountryCode.innerText = `ISO Code: ${data[i].alpha2Code}`;
		pCallingCode.innerText = `Calling Codes: ${data[i].callingCodes}`;

		button.setAttribute('type', 'button');
		button.setAttribute('class', 'btn btn-primary offset-10');
		button.setAttribute('data-toggle', 'modal');
		button.setAttribute('data-target', '#exampleModal');
		button.innerText = 'Details';

		
		divRow.append(divCol);
		divCol.append(img);
		divCol.append(divCardBody);
		divCardBody.append(h4Title);
		divCardBody.append(pTimeZone);
		divCardBody.append(pCountryCode);
		divCardBody.append(pCallingCode);
		divCardBody.append(button);
	}

	

}, 1000);



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


