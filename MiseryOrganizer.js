// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
import {returnHashedObject} from 'backend/handleBackend.jsw'
import {saveDB} from 'backend/handleBackend.jsw'
import wixLocation from 'wix-location';

$w.onReady(function () {

	// Write your Javascript code here using the Velo framework API

	// Print hello world:
	// console.log("Hello world!");

	// Call functions on page elements, e.g.:
	// $w("#button1").label = "Click me!";

	// Click "Run", or Preview your site, to execute your code

	$w("#box1").hide()
	$w("#box2").hide()

});

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function button1_click(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	$w('#button1').disable();
	$w("#box2").show('fade', { duration: 550, delay: 0 });
}

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function button3_click(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	$w("#box1").show('fade', { duration: 190, delay: 0 });
}

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function button2_click(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	$w("#box1").hide('fade', { duration: 190, delay: 0 });
}

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function button4_click(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	$w("#box1").hide('fade', { duration: 190, delay: 0 });
	let name = $w("#input1").value; let type = $w("#dropdown1").value; let date = $w("#datePicker1").value; let importance = $w('#dropdown2').value;
	console.log(name, type, date, importance);
	if(name.length > 0 && type.length > 0 && importance.length > 0)
	{
		returnHashedObject(name, type, date, importance).then( item => {
			saveDB(item);
		});
		wixLocation.to("/redirect");
	}
}