var form = document.getElementById('add-form');

document.addEventListener('DOMContentLoaded', function () {
    var anio = form.anio;

    for (var i = 2018; i >= 2015; i--) {
        var optionAnio = document.createElement('option');
        optionAnio.value = i;
        optionAnio.innerText = i;
        anio.appendChild(optionAnio);
    }
});

function validation() {
    if (form.marca == null || form.marca.value.length == 0 || /^\s+$/.test(form.marca.value)) {
        alert("Ingresa una texto valido en el campo marca");
        return false;
    }
    if (/^\s+$/.test(form.variedad.value)) {
        alert("Ingresa un texto valido en el campo variedad");
        return false;
    } else {
        if (form.variedad == null || form.variedad.value.length == 0) {
            form.variedad.value = "ninguna"
        }
    }
    if (form.pais == null || form.pais.value.length == 0 || /^\s+$/.test(form.pais.value)) {
        alert("Ingresa un texto valido en el campo país");
        return false;
    }
    if (form.anio.selectedIndex == null) {
        alert("Debes seleccionar un año");
        return false;
    }
    if (form.ruta == null || form.ruta.value.length == 0 || /^\s+$/.test(form.ruta.value)) {
        alert("Ingresa un ruta valida de imagen");
        return false;
    }
    if (!/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(form.sitioWeb.value)) {
        alert("Ingresa una URL valida");
        return false;
    }

    return true;
}


function addChapa() {

    var urlData = 'http://localhost:5000/make';
    var data = {
        brand: form.marca.value,
        country: form.pais.value,
        type: form.variedad.value,
        year: form.anio.value,
        image: form.ruta.value,
        website: form.sitioWeb.value
    }

    if(validation()){
        fetch(urlData, {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));

        return true;
    }
    
}

