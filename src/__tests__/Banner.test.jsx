import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Banner from '../components/dashboard/Banner';

describe('Dashboard', () => {
    it('renders Banner Page', () => {
        render(<Banner />);
    });

    it('renders Banner text', () => {
        render(<Banner />);
        const bannerText = screen.getByText('Welcome Mario!');
        expect(bannerText).toBeInTheDocument();
    });

    it('renders a link', () => {
        render(<Banner />);
        const bannerLink = screen.getByText('app.vetrinalive.it/fenoh-store');
        expect(bannerLink).toBeInTheDocument();
    });
});