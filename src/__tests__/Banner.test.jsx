import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Banner from '../components/dashboard/Banner';

describe('Dashboard', () => {
    it('renders Banner Page', () => {
        render(<Banner />);
    });
});