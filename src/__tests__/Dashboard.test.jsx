import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dashboard from "../components/dashboard/Dashboard"

describe('Dashboard', () => {
    it('renders Dashboard Page', () => {
        render(<Dashboard />);
    });
});