import { usContext } from "../../src/base-pruebas/06-deses-obj"


describe('Pruebas en 06-funciones', () => {
    
    test('usContext debe retornar un objeto', () => {
        
        const spiderman = {
            clave: 'SpiderMan',
            nombre: 'Peter',
            edad: 22,
            rango: 'Aprendiz'
        }

        const test = usContext(spiderman)

        expect(test).toStrictEqual({
            nombreClave: spiderman.clave,
            anios: spiderman.edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        })

    })

})