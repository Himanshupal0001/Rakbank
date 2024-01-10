import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';
import { Provider } from 'react-redux'
import { store } from '../store/store'
import Crousal from './Crousal'

it('Render Crousal Component', () => {
    render(<Provider store={store}><Crousal /></Provider>)

    const crousalParentDiv = screen.getByTestId('crousal-component');
    expect(crousalParentDiv).toBeInTheDocument();

})

it('render dot component', () => {
    render(<Provider store={store}><Crousal /></Provider>)

    const crousalParentDiv = screen.getByTestId('dot-component');
    expect(crousalParentDiv).toBeInTheDocument();
})

it('render form component', () => {
    render(<Provider store={store}><Crousal /></Provider>)

    const crousalParentDiv = screen.getByTestId('form-component');
    expect(crousalParentDiv).toBeInTheDocument();
})
