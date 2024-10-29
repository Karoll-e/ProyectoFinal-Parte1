const fs = require('fs');

function desencriptarMensaje(mensaje) {
    const letras = {
        '^': 'm',  
        '?': 'a',
        '[': 'e',
        '\\': 'i',
        '~': 'o',
        '¬': 'ó',
        '+': 'u',
        '(': ' ',  
        '`': 'c',
        '*': 'p', 
        '/': 'l',
        '-': 'h',
        ')': ' ',  
        '#': 'v',
        '$': 'r',
        '%': 'b',
        ']': 'n', 
        '}': 'q',  
        '{': 's', 
        '=': 't',
        '¿': 'y',
        '!': 'j',
        '¡': 'd',
        ';': 'f',
        '_': 'z', 
    };

    let mensajeDesencriptado = '';
    
    for (let char of mensaje) {
        if (letras[char]) {
            mensajeDesencriptado += letras[char];
        }
    }

    return mensajeDesencriptado.trim();
}

fs.readFile('texto.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }
    
    const mensajeDesencriptado = desencriptarMensaje(data);
    console.log('Mensaje desencriptado:', mensajeDesencriptado);
});