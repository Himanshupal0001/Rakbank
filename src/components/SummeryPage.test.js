import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import SummeryPage from './SummeryPage';
import useSubmitResponse from '../hooks/useSubmitResponse';
import { Provider } from 'react-redux';
import { store } from '../redux/store'
// Mock the useSubmitResponse hook
jest.mock('../hooks/useSubmitResponse');

describe('SummeryPage Component', () => {
    test('renders component, triggers submit, and reloads on confirmation', async () => {
        // Arrange
        const mockSubmitResponse = jest.fn();
        useSubmitResponse.mockReturnValue({ isLoading: false, handleSubmit: mockSubmitResponse });

        // Mock window.confirm
        const mockConfirm = jest.fn(() => true);
        Object.defineProperty(window, 'confirm', { value: mockConfirm });

        // Act
        render(<Provider store={store}><SummeryPage /></Provider>);
        fireEvent.click(screen.getByText('Submit'));

        // Assert
        expect(mockSubmitResponse).toHaveBeenCalled();

        // Wait for the confirmation alert to be called
        await waitFor(() => expect(mockConfirm).toHaveBeenCalled());

        // Assert that window.location.reload is called after confirmation
        expect(window.location.reload).toHaveBeenCalled();

        // Restore the original window.confirm
        window.confirm = mockConfirm;
    });
});