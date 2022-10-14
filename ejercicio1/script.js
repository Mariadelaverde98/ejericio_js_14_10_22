/*Usando la API de emojis de GitHub muestra todos los emojis (su imagen) 
que contengan una 'y' en su nombre (las claves del JSON de respuesta 
contienen los nombres de los emojis)
URL API: https://api.github.com/emojis*/

window.onload = () => {
    fetch('https://api.github.com/emojis')
        .then(res => res.json())
        .then(emojis => {
            var nombresConY = Object.keys(emojis).filter(nombre => nombre.includes('y') || nombre.includes('Y'));
            pintaEmojis(emojis, nombresConY);
        });
}

function pintaEmojis(emojis, nombres) {
    document.body.style.display = 'flex';
    document.body.style.flexWrap = 'wrap';
    for(let i = 0; i < nombres.length; i++) {
        var div = document.createElement('div');
        var imagen = document.createElement('img');
        var nombre = document.createTextNode(nombres[i]);
        var p = document.createElement('p');
        imagen.setAttribute('src', emojis[nombres[i]]);
        imagen.style.width = '64px';
        imagen.style.height = '64px';
        div.appendChild(imagen);
        div.appendChild(p);
        p.appendChild(nombre);
        div.style.padding = '1%';
        div.style.display = 'flex';
        div.style.flexDirection = 'column';
        div.style.alignItems = 'center';
        document.body.appendChild(div);
    }
}