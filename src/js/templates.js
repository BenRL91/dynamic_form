// Take in text field element 
//and format it to the configuration specified in the properties

export function textTemplate(elem){
	return `
		<label for=${elem.id}>${elem.label}</label>
		<input type=${elem.type} id=${elem.id}>
	`;
}

export function selectBoxTemplate(elem){
	var option = elem.options.map(function(choice){
		return `<option id=${choice.value}>${choice.label}</option>`
});

	return `
		<select id=${elem.id}>
			${option}
		</select>
		`;
}

export function textAreaTemplate(elem){
	return `
		<label for=${elem.id}>${elem.label}</label>
		<textarea id=${elem.id}></textarea>
		`;
}