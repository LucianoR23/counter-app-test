import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";


describe('Pruebas en 08-imp-exp', () => {

    test('getHeroeById debe retornar un heroe por ID', () => {
        
        const id = 1;
        const hero = getHeroeById( id )

        expect( hero ).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })

    })

    test('getHeroeById debe retornar undefined si no existe', () => {
        
        const id = 100;
        const hero = getHeroeById( id )

        expect( hero ).toBe(undefined)

    })

    test('getHeroesByOwner debe retornar un arreglo con heroes por owner', () => {
        
        const owner = 'DC'
        const owner2 = 'Marvel'
        const marvel = [
            {
                id: 2,
                name: 'Spiderman',
                owner: 'Marvel'
            },
            {
                id: 5,
                name: 'Wolverine',
                owner: 'Marvel'
            }]

        const test = getHeroesByOwner(owner)

        expect(test.length).toBe(3)
        expect(test).toEqual([{
            id: 1,
            name: 'Batman',
            owner: 'DC'
        },
        {
            id: 3,
            name: 'Superman',
            owner: 'DC'
        },
        {
            id: 4,
            name: 'Flash',
            owner: 'DC'
        }])

        expect(getHeroesByOwner(owner2).length).toBe(2)
        expect(getHeroesByOwner(owner2)).toEqual(marvel)


    })

})