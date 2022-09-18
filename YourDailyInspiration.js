// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
import 'backend/inspiration'

$w.onReady(function () {
	
});

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/



/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function Section1RegularButton1_click(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	is();
}

export function is ()
{
    const axios = require('axios');

    axios
    .get('https://inspirobot.me/api?generate=true')
    .then(res => {
        console.log(res.data);
		$w('#image1').src = res.data;
    })
    .catch(error => {
        console.error(error);
    });
    
}
