import {UI} from './claseUI.js'
import {RANDOM} from './RANDOM.js'
const card_body = document.getElementById('card-body')
const pizarraHTML = document.getElementById('pizarra')
const tipos_memoria = document.getElementById('tipos-memoria')

const tipoMemoria = new RANDOM()
tipos_memoria.addEventListener('change',() =>{
    console.log(tipos_memoria.value)
    if(tipos_memoria.value == 'numeros') {
        const ui = new UI()
        ui.limpiarUI(card_body,pizarraHTML)

        const formulario = ui.crearEtiqueta('form',{id:'formu',className:'row'})
        const div = ui.crearEtiqueta('div',{className:'col-auto'})
        const div2 = ui.crearEtiqueta('div',{className:'col-auto'})
        const div3 = ui.crearEtiqueta('div',{className:'col-auto'})
        const label = ui.crearEtiqueta('label',{htmlFor:'numero',innerText:'Numeros'})
        const label2 = ui.crearEtiqueta('label',{htmlFor:'tiempo',innerText:'Tiempo'})
        const inputNumero = ui.crearEtiqueta('input',{type:'number',className:'form-control',id:'numero',value:'2',min:'2'})
        const inputTiempo = ui.crearEtiqueta('input',{type:'number',className:'form-control',id:'tiempo',value:'2',min:'2',max:'15'})
        const button = ui.crearEtiqueta('button',{className:'btn btn-primary',innerText:'Enviar',type:'submit'})

        formulario.appendChild(div)
        div.appendChild(label)
        div.appendChild(inputNumero)
        formulario.appendChild(div2)
        div2.appendChild(label2)
        div2.appendChild(inputTiempo)
        formulario.appendChild(div3)
        div3.appendChild(button)
        card_body.appendChild(formulario)

        formulario.addEventListener('submit',(e) => {
            e.preventDefault()
            let listaNumeroAleatorio = ''
            for(let i = 0;i < Number(inputNumero.value);i++){
                const rrandom = tipoMemoria.numeros()
                listaNumeroAleatorio += rrandom
            }
            const parrafo = ui.crearEtiqueta('p', {innerText: listaNumeroAleatorio})
            const randomList = Number(parrafo.innerText)
            card_body.appendChild(parrafo)
            const hijo = card_body.children[1]
            const tiempo = Number(inputTiempo.value) * 1000
        
            const eliminarHijo = () => {
                card_body.removeChild(hijo);
            };
        
            // Activar el temporizador
            ui.temporizador(eliminarHijo, null, tiempo);
        
            const inputHTML = ui.crearEtiqueta('input', {className: 'form-control', type: 'number'})
            const btnSUBMIT = ui.crearEtiqueta('button', {className: 'btn btn-primary', innerText: 'Enviar'})
            pizarraHTML.appendChild(inputHTML)
            pizarraHTML.appendChild(btnSUBMIT)
        
            btnSUBMIT.addEventListener('click',()=>{
                if(randomList == Number(inputHTML.value)) {
                    console.log('correcto')
                    pizarraHTML.innerHTML = ' '
                    alert('correcto tienes buena memoria')
                }
            })
        })
    }
    if(tipos_memoria.value == 'banderas') {
        //
        const ui = new UI()
        ui.limpiarUI(card_body,pizarraHTML)

        const formulario = ui.crearEtiqueta('form',{id:'formu',className:'row'})
        const div = ui.crearEtiqueta('div',{className:'col-auto'})
        const div2 = ui.crearEtiqueta('div',{className:'col-auto'})
        const div3 = ui.crearEtiqueta('div',{className:'col-auto'})
        const label = ui.crearEtiqueta('label',{htmlFor:'letra',innerText:'Letras'})
        const label2 = ui.crearEtiqueta('label',{htmlFor:'tiempo',innerText:'Tiempo'})
        const inputLetra = ui.crearEtiqueta('input',{type:'number',className:'form-control',id:'letra',value:'2',min:'2'})
        const inputTiempo = ui.crearEtiqueta('input',{type:'number',className:'form-control',id:'tiempo',value:'2',min:'2',max:'15'})
        const button = ui.crearEtiqueta('button',{className:'btn btn-primary',innerText:'Enviar',type:'submit'})

        formulario.appendChild(div)
        formulario.appendChild(div2)
        div2.appendChild(label2)
        div2.appendChild(inputTiempo)
        formulario.appendChild(div3)
        div3.appendChild(button)
        card_body.appendChild(formulario)
        let pHTML = ''

        formulario.addEventListener('submit',(e) =>{
            e.preventDefault()
            const aleatorio = new RANDOM()
            const banderaRandom = aleatorio.banderaRandom()
            
            const parrafo = ui.crearEtiqueta('p', {innerText: banderaRandom})
            pHTML = banderaRandom
            card_body.appendChild(parrafo)
            const hijo = card_body.children[1]
            const tiempo = Number(inputTiempo.value) * 1000
        
            const eliminarHijo = () => {
                card_body.removeChild(hijo);
            };
        
            // Activar el temporizador
            ui.temporizador(eliminarHijo, null, tiempo);
            const inputHTML = ui.crearEtiqueta('input', {className: 'form-control'})
            const btnSUBMIT = ui.crearEtiqueta('button', {className: 'btn btn-primary', innerText: 'Enviar'})
            pizarraHTML.appendChild(inputHTML)
            pizarraHTML.appendChild(btnSUBMIT)

            const contenedorBandera = [banderaRandom]
            for(let i = 0;i < 8;i++) {
                const bandera = aleatorio.banderaRandom()
                contenedorBandera.push(bandera)
            }
            console.log(contenedorBandera)
            const banderaMescla = aleatorio.shuffleArray(contenedorBandera)
            console.log(banderaMescla)
            const banderaHTML = `
            <table class="table table-striped">
                <tbody>
                    <tr>
                        <td>
                        <img src="banderas-mescla/${banderaMescla[0]}.svg" width="150" alt="${banderaMescla[0]}">
                        </td>
                        <td>
                        <img src="banderas-mescla/${banderaMescla[1]}.svg" width="150" alt="${banderaMescla[1]}">
                        </td>
                        <td>
                        <img src="banderas-mescla/${banderaMescla[2]}.svg" width="150" alt="${banderaMescla[2]}">
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <img src="banderas-mescla/${banderaMescla[3]}.svg" width="150" alt="${banderaMescla[3]}">
                        </td>
                        <td>
                        <img src="banderas-mescla/${banderaMescla[4]}.svg" width="150" alt="${banderaMescla[4]}">
                        </td>
                        <td>
                        <img src="banderas-mescla/${banderaMescla[5]}.svg" width="150" alt="${banderaMescla[5]}">
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <img src="banderas-mescla/${banderaMescla[6]}.svg" width="150" alt="${banderaMescla[6]}">
                        </td>
                        <td>
                        <img src="banderas-mescla/${banderaMescla[7]}.svg" width="150" alt="${banderaMescla[7]}">
                        </td>
                        <td>
                        <img src="banderas-mescla/${banderaMescla[8]}.svg" width="150" alt="${banderaMescla[8]}">
                        </td>
                    </tr>
                </tbody>
            </table>`
            
        pizarraHTML.innerHTML = banderaHTML
        })
        pizarraHTML.addEventListener('click',(e) =>{
            if(e.target.alt == pHTML){
                alert(`acertaste tienes buena memoria: ${pHTML}`)
            }else{
                alert(`fallaste xxxxx es: ${e.target.alt}`)
            }
        })
        
    }
    if(tipos_memoria.value == 'letras') {
        const ui = new UI()
        ui.limpiarUI(card_body,pizarraHTML)
        
        const formulario = ui.crearEtiqueta('form',{id:'formu',className:'row'})
        const div = ui.crearEtiqueta('div',{className:'col-auto'})
        const div2 = ui.crearEtiqueta('div',{className:'col-auto'})
        const div3 = ui.crearEtiqueta('div',{className:'col-auto'})
        const label = ui.crearEtiqueta('label',{htmlFor:'letra',innerText:'Letras'})
        const label2 = ui.crearEtiqueta('label',{htmlFor:'tiempo',innerText:'Tiempo'})
        const inputLetra = ui.crearEtiqueta('input',{type:'number',className:'form-control',id:'letra',value:'2',min:'2'})
        const inputTiempo = ui.crearEtiqueta('input',{type:'number',className:'form-control',id:'tiempo',value:'2',min:'2',max:'15'})
        const button = ui.crearEtiqueta('button',{className:'btn btn-primary',innerText:'Enviar',type:'submit'})

        formulario.appendChild(div)
        div.appendChild(label)
        div.appendChild(inputLetra)
        formulario.appendChild(div2)
        div2.appendChild(label2)
        div2.appendChild(inputTiempo)
        formulario.appendChild(div3)
        div3.appendChild(button)
        card_body.appendChild(formulario)
        

        formulario.addEventListener('submit',(e) => {
            e.preventDefault()
            const aleatorio = new RANDOM()
            const listaLetraAleatorio = aleatorio.letras(inputLetra.value)

            const parrafo = ui.crearEtiqueta('p', {innerText: listaLetraAleatorio})
            const randomList = parrafo.innerText
            card_body.appendChild(parrafo)
            const hijo = card_body.children[1]
            const tiempo = Number(inputTiempo.value) * 1000
        
            const eliminarHijo = () => {
                card_body.removeChild(hijo);
            };
        
            // Activar el temporizador
            ui.temporizador(eliminarHijo, null, tiempo);
            const inputHTML = ui.crearEtiqueta('input', {className: 'form-control'})
            const btnSUBMIT = ui.crearEtiqueta('button', {className: 'btn btn-primary', innerText: 'Enviar'})
            pizarraHTML.appendChild(inputHTML)
            pizarraHTML.appendChild(btnSUBMIT)
            
            const fragmento = document.createDocumentFragment()
            const tempo = aleatorio.shuffleArray(listaLetraAleatorio.split(''))
            for (let i = 0; i < listaLetraAleatorio.length; i++) {
                const titulo = ui.crearEtiqueta('h1',{innerText:tempo[i],className:'bg-primary text-light p-3'})
                const div = ui.crearEtiqueta('div',{className:'col m-4'})
                div.appendChild(titulo)
                fragmento.appendChild(div)
            }
            pizarraHTML.appendChild(fragmento)

            pizarraHTML.addEventListener('click',(e) =>{
                if(e.target.tagName == 'H1'){
                    const letraRespuesta = e.target.innerText
                    inputHTML.value += letraRespuesta
                }
            })
            
            btnSUBMIT.addEventListener('click',()=>{
                if(randomList == inputHTML.value) {
                    console.log('correcto')
                    pizarraHTML.innerHTML = ' '
                    alert('correcto tienes buena memoria')
                }
            })
        })
    }
})
