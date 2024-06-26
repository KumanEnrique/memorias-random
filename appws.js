const letrasQwertyAlto = ['q','w','e','r','t','y','u','i','o','p']
const letrasQwertyMedio = ['a','s','d','f','g','h','j','k','l']
const letrasQwertyBajo = ['z','x','c','v','b','n','m']
const letras = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m']
const pizarra = document.getElementById('pizarra')

const arreglo = ['f','j']
let frase = ''
const repeticiones = 50
const letrasPorPalabras = 5
const letrasPorPalabrasRandom = Math.floor(Math.random() * letrasPorPalabras) + 1

for(let i = 0;i < 50;i++) {
    let palabra = ''
    let cantidadDeLetras = Math.floor(Math.random() * arreglo.length) + 1
    let auxiliar = ''
    for(let i = 0;i<cantidadDeLetras;i++){
        const f = Math.floor(Math.random() * cantidadDeLetras )
        auxiliar += arreglo[f]
    }
    palabra += auxiliar
    frase += palabra + ' '
}
console.log(frase)
const parrafo = document.createElement('p')
parrafo.innerText = frase
pizarra.appendChild(parrafo)