// fetch a digimon API
fetch('https://digimon-api.vercel.app/api/digimon')
    .then(response => response.json())
    .then(datos => {
        listaDigimon(datos);
    });



// Selecciona el bloque de contenido
let contenido = document.querySelector('#contenido');
// Toma los datos desde la API 
function listaDigimon(datos) {
    contenido.innerHTML = '';
    // Ordena los digimos alfabeticamente
    datos.sort((a, b) => a.name.localeCompare(b.name));
    // recorre el array de objetos de la API y crea un html con cada uno de los objetos en forma de cartas de bootstrap 5
    for (let dato of datos) {
        contenido.innerHTML += `
        <div class="card m-3 border-dark" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${dato.img}" class="img-fluid rounded-start" id="${dato.name}" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body text-dark">
                    <h5 class="card-title text-center mt-3">${dato.name}</h5>
                    <p class="card-text text-center pt-2">Level: ${dato.level}</p>
                    </div>
                </div>
            </div>
      </div>
        `
    }
}

// funcion para el modo oscuro de la pagina
let botonDarkM = document.getElementById('btn-dm')
botonDarkM.addEventListener('click', function(){
    let body = document.getElementById('body');
    let navbar = document.getElementById('navbar');
    let titulo = document.getElementById('titulo');
    body.classList.add('bg-dark');
    navbar.classList.remove('bg-dark');
    navbar.classList.add('bg-secondary');
    titulo.classList.add('text-light');
    }
)

// funcion para el boton de scroll hacia el inicio de la pagina
$(document).ready(function(){
	$('.goup').click(function(){
		$('body,html').animate({
			scrollTop:0
		},1000)
	});
});
