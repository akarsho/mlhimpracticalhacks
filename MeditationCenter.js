// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
import { zoom } from '@velo/wix-animation-helpers';
import wixData from 'wix-data';

const img  = ["9b8d5e55-5d25-456a-a000-585aff869629",
"c3b849df-5c74-4576-b459-537b54f79ba0",
"277acf00-c577-44a7-9bbe-b0a8499416a1",
"1ec9acb5-4bce-4a4e-9a7b-60e71dba532e",
"cbd6764e-1ef1-4a64-bb33-2e7c4cef83b2"];

const music = ['https://static.wixstatic.com/mp3/914b8c_6c34185b11fc4d21b3ca7956dc9bc98b.mp3',
'https://static.wixstatic.com/mp3/914b8c_b6df31203ab94dd2bb70f1958ce2064c.mp3',
'https://static.wixstatic.com/mp3/914b8c_ee5db81642744f1eb933fa95938910a7.mp3',
'https://static.wixstatic.com/mp3/914b8c_17d46b31c93c4a9f8af54f6ecf1f9b7c.mp3',
'https://static.wixstatic.com/mp3/914b8c_681db299f5a749da8b1028d086211821.mp3',
'https://static.wixstatic.com/mp3/914b8c_f3358079e7cd4395ba2aabb089275a78.mp3',
'https://static.wixstatic.com/mp3/914b8c_122290c8fa6040f1b2dab26e721ac625.mp3',
'https://static.wixstatic.com/mp3/914b8c_46d3479428534367bc10e1e424f7280a.mp3',
'https://static.wixstatic.com/mp3/914b8c_eea7e8b279ae4b58a809e9475ed62ce5.mp3',
'https://static.wixstatic.com/mp3/914b8c_51def8d5e2664430a0ead87a66e69299.mp3']

$w.onReady(function () {

	// Write your Javascript code here using the Velo framework API

	// Print hello world:
	// console.log("Hello world!");

	// Call functions on page elements, e.g.:
	// $w("#button1").label = "Click me!";

	// Click "Run", or Preview your site, to execute your code

});

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function Section1RegularButton1_click(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	$w('#Section1RegularPlusMediaImage1RuleNoFaceImage').hide('fade', { duration: 1000, delay: 0 }).then(() => {
		$w('#Section1RegularPlusMediaImage1RuleNoFaceImage').background.src = 'wix:video://v1/11062b_9480d9d800bd4bda938057d5ac1ebc42/_#posterUri=11062b_9480d9d800bd4bda938057d5ac1ebc42f000.jpg&posterWidth=1920&posterHeight=1080'
		$w('#Section1RegularPlusMediaImage1RuleNoFaceImage').show('fade', { duration: 1000, delay: 0 });
		$w('#section1container1').hide('fade', { duration: 250, delay: 0 });
		$w('#box1').show('fade', { duration: 1000, delay: 0 });
		$w('#audioPlayer1').play()
		setInterval(async function () {
			zoom($w('#vectorImage3'), { duration: 250, from: 1, to: 2 });
			zoom($w('#vectorImage3'), { duration: 500, from: 1, to: 0.5 });
			zoom($w('#vectorImage3'), { duration: 250, from: 1, to: 2 });
			zoom($w('#vectorImage3'), { duration: 500, from: 1, to: 0.5 });
			zoom($w('#vectorImage3'), { duration: 250, from: 1, to: 2 });
			zoom($w('#vectorImage3'), { duration: 500, from: 1, to: 0.5 });
			let num = Math.floor(Math.random() * 5);
			let num2 = Math.floor(Math.random() * 10);
			wixData.get("images",img[num]).then((item) => {
				
				$w('#image1').src = item.music;
				$w('#audioPlayer2').src = music[num2];
				$w('#image1').show('fade', { duration: 2000, delay: 0 }).then(()=>{
					$w('#audioPlayer2').play();
				});
				$w('#image1').hide('fade', { duration: 2000, delay: 0 }).then(() => {
					$w('#audioPlayer1').play();
				});
				
			})
			
		}, 5000)
		
	})
	
}