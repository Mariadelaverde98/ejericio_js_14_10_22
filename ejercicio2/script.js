/*Usando flexbox coloca los 3 primeros emojis de manera 
que queden pegados al margen derecho y de arriba a abajo (3, 2 y 1). 
Debes traer esos tres emojis de la API.*/

window.onload = () => {
    fetch('https://api.github.com/emojis')
        .then(res => res.json())
        .then(emojis => {
            pintaEmojis(emojis, Object.keys(emojis).slice(0, 3));
        });
}

function pintaEmojis(emojis, nombres) {
    document.body.style.display = 'flex';
    document.body.style.flexDirection = 'column-reverse';
    document.body.style.alignItems = 'flex-end'
    for(let i = 0; i < nombres.length; i++) {
        var imagen = document.createElement('img');
        imagen.setAttribute('src', emojis[nombres[i]]);
        imagen.style.width = '64px';
        imagen.style.height = '64px';
        document.body.appendChild(imagen);
    }
}