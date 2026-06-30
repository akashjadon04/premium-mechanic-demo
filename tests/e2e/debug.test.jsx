import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Layout from '../../src/components/Layout';
import Contact from '../../src/pages/Contact';

// Mock Atropos
jest.mock('atropos/react', () => {
  return function MockAtropos({ children, className, ...props }) {
    return <div data-testid="atropos-wrapper" className={className} {...props}>{children}</div>;
  };
});

// Mock Lottie
jest.mock('lottie-react', () => {
  return function MockLottie({ animationData, className, ...props }) {
    return <div data-testid="lottie-animation" className={className} {...props} />;
  };
});

describe('Debug mount', () => {
  test('debug contact mount', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/contact']}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );
    const lotties = container.querySelectorAll('[data-testid="lottie-animation"], [data-lottie-url]');
    console.log('DEBUG CONTACT LOTTIES:', lotties.length);
    lotties.forEach((el, idx) => {
      console.log(`Lottie ${idx}:`, el.outerHTML);
    });
  });
});
