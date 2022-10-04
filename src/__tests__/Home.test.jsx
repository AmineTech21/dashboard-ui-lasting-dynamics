import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../pages/index';

describe('Home', () => {
    it('renders Home Page', () => {
        render(<Home />);
    });

    it('renders a link', () => {
        render(<Home />);
        const dashboardLink = screen.getByRole('link');
        expect(dashboardLink).toBeInTheDocument();
    });

    it('link should send you to dashboard page', () => {
        render(<Home />);
        const dashboardLink = screen.getByRole('link');
        expect(dashboardLink).toHaveAttribute('href', '/dashboard');
    });
});
