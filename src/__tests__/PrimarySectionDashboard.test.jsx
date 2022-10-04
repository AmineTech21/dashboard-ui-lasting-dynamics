import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PrimarySection from '../components/dashboard/PrimarySection';

describe('Dashboard', () => {
    it('renders Navbar Page', () => {
        render(<PrimarySection />);
    });
});