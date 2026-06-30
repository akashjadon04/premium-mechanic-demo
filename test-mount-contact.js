import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Contact from './src/pages/Contact';

// Mock Atropos
jest.mock('atropos/react', () => ({ children }) => <div>{children}</div>);

// Mock Lottie
jest.mock('lottie-react', () => () => <div data-testid="lottie-animation" />);

const { container } = render(
  <MemoryRouter>
    <Contact />
  </MemoryRouter>
);

const lotties = container.querySelectorAll('[data-testid="lottie-animation"], [data-lottie-url]');
console.log('FOUND LOTTIES:', lotties.length);
lotties.forEach((el, idx) => {
  console.log(`Lottie ${idx}:`, el.outerHTML);
});
