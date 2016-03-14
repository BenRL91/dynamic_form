// Javascript Entry Point
import $ from 'jquery'
import data  from './form_data'
import {textTemplate, selectBoxTemplate, textAreaTemplate} from './templates'

var $app = $(".app")
var templateToUse = {
	'text': textTemplate,
	'email': textTemplate,
	'select': selectBoxTemplate,
	'textarea': textAreaTemplate,
	'tel': textTemplate
};

data.forEach(elem =>{
	var templateInUse = templateToUse[elem.type];

	console.log($app.append(templateInUse(elem)));
});
