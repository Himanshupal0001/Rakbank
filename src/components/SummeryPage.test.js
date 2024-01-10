import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import SummeryPage from './SummeryPage';
import { Provider } from 'react-redux';
import { store } from '../store/store'
test('renders required elements', () => {
    render(
        <Provider store={store}>
            <SummeryPage />
        </Provider>
    );

    const overviewText = screen.getByText('An overview of');
    const submitButton = screen.getByText('Submit');

    expect(overviewText).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
});
