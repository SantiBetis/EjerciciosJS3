// Dado el array: const array = ["Joaquin", 1, ["Hola","Adios"], true]
const array = ["Joaquin", 1, ["Hola", "Adios"], true];


// 1) Recorrer el array e insertar dichos valores en el localstorage. El key de cada valor corresponderá a variable
//+ i siendo i el indice en el que se encuentra el array.
array.forEach((item, i) => {
  localStorage.setItem(`variable${i}`, JSON.stringify(item));
});

// 2) Recorrer de 0 a la longitud del array y hacer la peticion de variable + i del localstorage
for (let i = 0; i < array.length; i++) {

  const value = JSON.parse(localStorage.getItem(`variable${i}`));

// 3) Crear un div por cada variable e insertar el valor de dicha variable en el div
  const div = document.createElement('div');
  div.classList.add('custom-div');

  if (Array.isArray(value)) {
  div.textContent = value.join(', ');
  } else {
  div.textContent = value;
  }

// 4) insertar estos divs en el body del html
  document.body.appendChild(div);
}
