export class UI {
    constructor() {}
    limpiarUI(card_body, pizarra) {
        card_body.innerHTML = ' '
        pizarra.innerHTML = ' '
    }    
    /**
     * @function crearEtiqueta description
     *
     * @name etiqueta etiqueta a crear @param {string} etiqueta
     * @name propiedades objeto de propiedades @param {object} propiedades
     * @returns {nueva_etiqueta} 
     */
    crearEtiqueta(etiqueta, propiedades) {
        const nueva_etiqueta = document.createElement(etiqueta)
        for(const propiedad in propiedades) {
            nueva_etiqueta[propiedad] = propiedades[propiedad]
        }
        return nueva_etiqueta
    }
    temporizador(cuerpo, hijo, tiempo) {
        setTimeout(() => {
            cuerpo(hijo)
        }, tiempo);
    }
}
