/**
 * Esta función me permite obtener el valor de la carta
 * @param {String} carta ejemplo 5H
 * @returns {Number} retorna el valor de la carta
 */
export const valorCarta = (carta) => {
    if (!carta || carta.length === 0) throw new Error('carta es obligatorio, como un string');
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;
}