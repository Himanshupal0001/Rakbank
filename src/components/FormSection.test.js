import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../store/store'
import FormSection from './FormSection';

test('renders Form section Title and options elements', () => {
    // Render the component with sample props
    render(<Provider store={store}>
        <FormSection Title="Test Title" Options={[{ src: 'test.jpg', alt: 'Test Image', label: 'Option 1' }]} />
    </Provider>);

    // Assert the presence of required elements
    const formComponent = screen.getByTestId('form-component');
    const titleDiv = screen.getByText('Test Title');
    const optionDiv = screen.getByAltText('Test Image');

    expect(formComponent).toBeInTheDocument();
    expect(titleDiv).toBeInTheDocument();
    expect(optionDiv).toBeInTheDocument();
});








