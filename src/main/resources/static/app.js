function showMessage(input, type) {
	// get the small element and set the message
	//const msg = input.parentNode.getElementById("msg");
	//msg.innerText = message;
	// update the class for the input
	if (!type){
        input.className= "form-control is-invalid";
    }else{
		input.className= "form-control is-valid";
	}
	return type;
}

function showError(input) {
	return showMessage(input, false);
}

function showSuccess(input) {
	return showMessage(input, true);
}

function hasValue(input) {
	if (input.value.trim() === "") {
		return showError(input);
	}
    //return true;
	return showSuccess(input);
}

function validate_fileupload(input)
{
    if (!hasValue(input)) {
		return false;
	}
    const fileName = input.value;
    var allowed_extension = "pdf"
    var file_extension = fileName.split('.').pop().toLowerCase(); // split function will split the filename by dot(.), and pop function will pop the last element from the array which will give you the extension as well. If there will be no extension then it will return the filename.

    if(allowed_extension!=file_extension)
    {
        //return false;
        return showError(input); // valid file extension
    }

    return true;
}

function validateEmail(input) {
	// check if the value is not empty
	if (!hasValue(input)) {
		return false;
	}
	// validate email format
	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const email = input.value.trim();
	if (!emailRegex.test(email)) {
        //return false;
		return showError(input);
	}
	return true;
}

function validateZip(input){
    if (!hasValue(input)) {
		return false;
	}
	// validate email format
	const zipRegex = /^\d{5}$/;

	const code = input.value.trim();
	if (!zipRegex.test(code)) {
        //return false;
		return showError(input);
	}
	return true;
}


const form = document.getElementById("signup");
const nombre = document.getElementById("name");
const surname = document.getElementById("surname");
const address = document.getElementById("address");
const email = document.getElementById("email");
const city = document.getElementById("city");
const country = document.getElementById("country");
const zip = document.getElementById("zip");
const cv = document.getElementById("cv");

async function validateForm(){
	let nameValid = hasValue(nombre);
    let surValid = hasValue(surname);
    let addValid = hasValue(address);
	let emailValid = validateEmail(email);
    let cityValid = hasValue(city);
    let countryValid = hasValue(country);
    let zipValid = validateZip(zip);
    let cvValid = validate_fileupload(cv);

    //let docValid = validate_fileupload(form.elements["cv"],FILE_REQUIRED);
	// if valid, submit the form.
	if (nameValid && surValid && addValid && emailValid && cityValid && countryValid && zipValid && cvValid) {
	
		const formData = new FormData();

		/*formData.append("nombre",nombre.value);
		formData.append("surname",surname.value);
		formData.append("address",address.value);
		formData.append("email",email.value);
		formData.append("country",country.value);
		formData.append("city",city.value);
		formData.append("zip",zip.value);
		formData.append("cv")*/


		let request = await fetch("api/aplicant",{
			method: "POST",
			credentials: "same-origin",
			headers: {
				"Content-type": "application/json"
			},
			body: JSON.stringify({
				name: nombre.value,
				surname: surname.value,
				address: address.value,
				email: email.value,
				country: country.value,
				city: city.value,
				zip: zip.value,
				cv: cv.value//cv.files[0]
			}),
			dataType: "json",
		}).catch(console.error);

		if (request.ok){
			window.location.href = "./fin.html";
			alert("Datos enviados");
			console.log(await request.json());
		}

		
	}
}


form.addEventListener("submit", function (event) {

	// stop form submission
	event.preventDefault();

	validateForm();

});