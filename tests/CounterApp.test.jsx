/**
 * @jest-environment jsdom
 */

import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"


describe('Pruebas en el CounterApp', () => {
    
    const initValue = 0

    test('debe de hacer match con el snapshot', () => {

        const { container } = render( <CounterApp value={ initValue }/>)
        expect( container ).toMatchSnapshot()

    })

    test('Debe mostrar el valor inicial de 100', () => {

        render( <CounterApp value={ 100 }/>)
        expect( screen.getByText(100) ).toBeTruthy()

    })

    test('Debe incrementar con el boton +1', () => {

        render( <CounterApp value={ initValue }/> )
        fireEvent.click( screen.getByRole('button', { name: 'btn-sumar' }) )
        expect( screen.getByText('1') ).toBeTruthy()

    })

    test('Debe incrementar con el boton -1', () => {

        render( <CounterApp value={ 2 }/> )
        fireEvent.click( screen.getByRole('button', { name: 'btn-restar' }) )
        expect( screen.getByText('1') ).toBeTruthy()

    })

    test('debe de funcionar el boton de reset', () => {

        render( <CounterApp value={ initValue }/>)
        fireEvent.click( screen.getByRole('button', { name: 'btn-sumar' }) )
        fireEvent.click( screen.getByRole('button', { name: 'btn-sumar' }) )
        fireEvent.click( screen.getByRole('button', { name: 'btn-reset' }) )
        expect( screen.getByText('0') ).toBeTruthy()

    })

})