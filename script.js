// Code for loading screen
let spinner = document.querySelector('#spinner');

// Let's set to 3 seconds for allowance on loading for "data"
setTimeout(() => {
	spinner.parentElement.removeChild(spinner);
	document.querySelector('#search').classList.remove('hide');
}, 3000)




// Get data from database
// "data" here will serve as the object containing everything fetched from URI
let data = '';

let getData = async () => {
	fetch("https://restcountries.com/v3.1/all")
	.then(res => res.json())
	.then(res => data = res)

}

getData();




// Log for how many objects were retreived please don't mind
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




// Load for cards section and corresponding modals
setTimeout(() => {

	for(let i = 0; i < data.length; ++i){

		// Cards section initilization
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
		divRow.setAttribute('class', 'row justify-content-center');
		divCol.setAttribute('class', 'card mt-5 col-6 col-md-4');
		divCardBody.setAttribute('class', 'card-body')

		img.setAttribute('src', data[i].flags.png);
		img.setAttribute('class', 'card-img-top rounded');

		h4Title.setAttribute('class', 'card-title d-flex justify-content-center');
		h4Title.innerText = data[i].name.common;

		pTimeZone.setAttribute('class', 'card-text');
		pTimeZone.innerText = `Time Zones: ${data[i].timezones}`;
		pCountryCode.innerText = `ISO Alpha 2 Code: ${data[i].altSpellings[0]}`;
		pCallingCode.innerText = `Calling Code: ${data[i].idd.root}${data[i].idd.suffixes[0]}`;

		button.setAttribute('type', 'button');
		button.setAttribute('class', 'btn btn-primary');
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
		h5ModalTitle.innerText = data[i].name.common + ' ';

		imgFlag.setAttribute('style', 'height: 10px');
		imgFlag.setAttribute('src', data[i].flags.png);

		buttonCrossClose.setAttribute('type', 'button');
		buttonCrossClose.setAttribute('class', 'close');
		buttonCrossClose.setAttribute('data-dismiss', 'modal');
		buttonCrossClose.setAttribute('aria-label', 'Close');

		spanUnderButton.setAttribute('aria-hidden', 'true');
		spanUnderButton.innerHTML = `&times;`;

		divModalBody.setAttribute('class', 'modal-body');
		divModalBody.innerText = `Time Zones: ${data[i].timezones}
		ISO Alpha2 Code: ${data[i].altSpellings[0]}
		Calling Code: ${data[i].idd.root}${data[i].idd.suffixes[0]}

		Their borders are: ${data[i].borders}

		Map: 
		${data[i].maps.googleMaps}

		Latitude and Longitude: ${data[i].latlng}

		Offical name is "${data[i].name.official}"

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




// Code for filter here

function filter(){

	let input, filter, titles, card;

	let titlesUp = [];

	    input = document.getElementById("search");

	    filter = input.value.toUpperCase();

	    card = document.getElementsByClassName("card");

	    titles = document.getElementsByClassName("card-title");

	    for(let i = 0; i < titles.length; ++i){
	    	titlesUp.push(titles[i].innerHTML.toUpperCase());
	    }

	    for(let i = 0; i < titles.length; ++i){

	    	if(titlesUp[i].indexOf(filter) >= 0){
	    		console.log(titlesUp[i].indexOf(filter));
	    		card[i].style.display = "";
	    	}
	    	else{
	    		card[i].style.display = "none";
	    	}
	    }
}
