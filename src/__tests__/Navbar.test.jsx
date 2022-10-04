import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../components/dashboard/Navbar';

describe('Dashboard', () => {
    it('renders Navbar Page', () => {
        render(<Navbar />);
    });

    it('renders dashboard text', () => {
        render(<Navbar />);
        const dashboardText = screen.getByText('Dashboard');
        expect(dashboardText).toBeInTheDocument();
    });

    it('renders Whats new text', () => {
        render(<Navbar />);
        const dashboardText = screen.getByText("What's new");
        expect(dashboardText).toBeInTheDocument();
    });
});
