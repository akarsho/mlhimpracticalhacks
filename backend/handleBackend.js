/*********
 .jsw file
 *********

 Backend .jsw files contain functions that run on the server side but can be called from page code and frontend files.
 Use backend functions to keep code private and hidden from a user's browser. More info:

 https://support.wix.com/en/article/velo-web-modules-calling-backend-code-from-the-frontend

**********/

/*** Call the sample multiply function below by copying the following into your page code:

 import { multiply } from 'backend/multiplication';

 $w.onReady(function () {
     multiply(4, 5).then(product => {
         console.log(product);
     })
     .catch(error => {
         console.log(error);
     });
 });

***/
import wixData from 'wix-data';


export function returnHashedObject (n, t, d, i) {
    if(i == "Easy") {
        i = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Eo_circle_green_blank.svg/512px-Eo_circle_green_blank.svg.png?20200417132254'
    } else if( i == "Medium") {
        i = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Eo_circle_yellow_blank.svg/1920px-Eo_circle_yellow_blank.svg.png'
    } else if( i == "Hard") {
        i = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Eo_circle_red_blank.svg/1920px-Eo_circle_red_blank.svg.png'
    }
    return {
        objName: n,
        objType: t,
        objDate: d,
        objImportance: i
    };
}

export function saveDB (it)
{
    let toSave = {
			"title": it.objName,
			"type": it.objType,
			"date": it.objDate,
			"rank": it.objImportance, 
		}
    wixData.save("mytasks", toSave)
}