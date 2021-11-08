console.log('Hello');

// Spinner
let spinner = document.querySelector('#spinner');

setTimeout(() => {
	spinner.parentElement.removeChild(spinner);
	document.querySelector('#search').classList.remove('hide');
}, 3000)


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
}, 3000);


// Begin loading cards and images

const body = document.body;
const sectionContent = document.createElement('section');
const sectionModal = document.createElement('section');
const divRow = document.createElement('div');

sectionContent.setAttribute('id', 'content-section');
sectionContent.setAttribute('class', 'container-fluid d-flex justify-content-around justify-content-center mt-5');

sectionModal.setAttribute('id', 'modal-section');

body.append(sectionContent);
body.append(sectionModal);
sectionContent.append(divRow);


// Load for flags section and modals
setTimeout(() => {

	for(let i = 0; i < data.length; ++i){

		// Flag section initilization
		let divCol = document.createElement('div');
		let divCardBody = document.createElement('div');
		let h4Title = document.createElement('h4');
		let pTimeZone = document.createElement('p');
		let pCountryCode = document.createElement('p');
		let pCallingCode = document.createElement('p');
		let button = document.createElement('button');
		let img = document.createElement('img');

		// Modal section initilaization
		let divModalFade = document.createElement('div');
		let divModalDialog = document.createElement('div');
		let divModalContent = document.createElement('div');
		let divModalHeader = document.createElement('div');
		let h5ModalTitle = document.createElement('h5');
		let buttonCrossClose = document.createElement('button');
		let spanUnderButton = document.createElement('span');
		let divModalBody = document.createElement('div');
		let divModalFooter = document.createElement('div');
		let buttonGotIt = document.createElement('button');
		let imgFlag = document.createElement('img');


		// Load countries
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
		button.setAttribute('data-target', `#modal-${i}`);
		button.innerText = 'Details';

		
		divRow.append(divCol);
		divCol.append(img);
		divCol.append(divCardBody);
		divCardBody.append(h4Title);
		divCardBody.append(pTimeZone);
		divCardBody.append(pCountryCode);
		divCardBody.append(pCallingCode);
		divCardBody.append(button);


		// Load related modals
		divModalFade.setAttribute('class', 'modal fade');
		divModalFade.setAttribute('id', `modal-${i}`);
		divModalFade.setAttribute('tabindex', '-1');
		divModalFade.setAttribute('aria-labelledby', 'exampleModalLabel');
		divModalFade.setAttribute('aria-hidden', 'true');

		divModalDialog.setAttribute('class', 'modal-dialog');
		divModalContent.setAttribute('class', 'modal-content');
		divModalHeader.setAttribute('class', 'modal-header');
		h5ModalTitle.setAttribute('class', 'modal-title');
		h5ModalTitle.setAttribute('id', 'exampleModalLabel');
		h5ModalTitle.innerText = data[i].name + ' ';

		imgFlag.setAttribute('style', 'height: 10px');
		imgFlag.setAttribute('src', data[i].flag);

		buttonCrossClose.setAttribute('type', 'button');
		buttonCrossClose.setAttribute('class', 'close');
		buttonCrossClose.setAttribute('data-dismiss', 'modal');
		buttonCrossClose.setAttribute('aria-label', 'Close');

		spanUnderButton.setAttribute('aria-hidden', 'true');
		spanUnderButton.innerHTML = `&times;`;

		divModalBody.setAttribute('class', 'modal-body');
		divModalBody.innerText = `Time Zones: ${data[i].timezones}
		ISO Code: ${data[i].alpha2Code}
		Calling Codes: ${data[i].callingCodes}

		Their borders are: ${data[i].borders}
		Demonym: ${data[i].demonym}
		Latitude and Longitude: ${data[i].latlng}
		Native name is ${data[i].nativeName}
		Area: ${data[i].area}`

		divModalFooter.setAttribute('class', 'modal-footer');

		buttonGotIt.setAttribute('type', 'button');
		buttonGotIt.setAttribute('class', 'btn btn-primary');
		buttonGotIt.setAttribute('data-dismiss', 'modal');
		buttonGotIt.innerHTML = `Got It!`;


		sectionModal.append(divModalFade);
		divModalFade.append(divModalDialog);
		divModalDialog.append(divModalContent);
		divModalContent.append(divModalHeader);

		divModalHeader.append(h5ModalTitle);
		h5ModalTitle.append(imgFlag);

		divModalHeader.append(buttonCrossClose);
		buttonCrossClose.append(spanUnderButton);

		divModalContent.append(divModalBody);

		divModalContent.append(divModalFooter);
		divModalFooter.append(buttonGotIt);
	}

	

}, 3000);



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


