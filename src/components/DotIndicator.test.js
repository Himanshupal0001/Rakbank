import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';
import { Provider } from 'react-redux'
import { store } from '../store/store'
import DotIndicator from './DotIndicator'

it('Render Dot Component', () => {
    render(<Provider store={store}><DotIndicator /></Provider>)

    const crousalParentDiv = screen.getByTestId('dot-component');
    expect(crousalParentDiv).toBeInTheDocument();

})

it('Render Dot Component with props', () => {
    render(<Provider store={store}><DotIndicator steps={3} activeStep={0} /></Provider>)
    const crousalParentDiv = screen.getByTestId('dot-component');
    expect(crousalParentDiv).toBeInTheDocument();

})




