import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"


describe('Pruebas en 07-deses-arr', () => {
    
    test('retornaArreglo debe retornar array', () => {
        
        const [letters, numbers] = retornaArreglo()

        expect( letters ).toBe('ABC')
        expect( numbers ).toBe(123)

    })

})