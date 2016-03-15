// Take in text field element 
//and format it to the configuration specified in the properties

export function textTemplate(elem){
	return `
		<div class="form_elem">
			<label for=${elem.id}><img src=http://lorempixel.com/25/25>${elem.label}</label>
			<input type=${elem.type} id=${elem.id}>
		</div>
	`;
}

export function selectBoxTemplate(elem){
	var option = elem.options.map(function(choice){
		return `<option id=${choice.value}>${choice.label}</option>`
});

	return `
		<div class="form_elem">
			<label for=${elem.id} title="press Enter and use Arrow Keys"><img src=http://lorempixel.com/25/25>Select language...</label>
			<select id=${elem.id}>
				${option}
			</select>
		</div>
		`;
}

export function textAreaTemplate(elem){
	return `
		<div class="form_elem">
			<label for=${elem.id}><img src=http://lorempixel.com/25/25>${elem.label}</label>
			<textarea id=${elem.id}></textarea>
		</div>
		`;
}