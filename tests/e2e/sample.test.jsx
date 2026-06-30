import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../../src/pages/Home';

describe('Home Page E2E/Integration Test', () => {
  test('renders the main heading of Home page', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const heading = screen.getByRole('heading', { name: /CONCIERGE AUTOMOTIVE/i });
    expect(heading).toBeInTheDocument();
  });
});

