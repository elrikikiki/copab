let leerMas = document.getElementById('leerMas');
let texto = document.getElementById('texto');
let textoCreado = document.createElement('p');
let clickeado = leerMas.addEventListener("click", () =>  {
    textoCreado.innerHTML = 
    `
    </p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus at iusto praesentium rerum molestiae quo iure ab quasi ad? Aspernatur, adipisci. Ducimus aperiam autem dolor impedit vel optio! Modi, quaerat?</p>
    `
    texto.append(textoCreado)

}); 