import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import SummeryContent from './SummeryContent';
import { Provider } from 'react-redux';
import { store } from '../store/store'

test('renders content and applies conditional styling', () => {
    const item = { Title: 'Test Title', input: { src: 'test.jpg', alt: 'Test Image' } };
    render(
        <Provider store={store}>
            <SummeryContent item={item} isLast={false} />
        </Provider>
    );
    const contentComponent = screen.getByTestId('content-component');
    const mainTitle = screen.getByTestId('main-title');
    const smallTitle = screen.getByText('Test Title', { selector: '.text-xs' });
    const image = screen.getByAltText('Test Image');

    expect(contentComponent).toBeInTheDocument();
    expect(mainTitle).toBeInTheDocument();
    expect(smallTitle).toBeInTheDocument(); // Rendered due to isLast being false
    expect(image).toBeInTheDocument();
});
