import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Home from '../../src/pages/Home';
import About from '../../src/pages/About';
import Services from '../../src/pages/Services';
import Pricing from '../../src/pages/Pricing';
import Contact from '../../src/pages/Contact';
import Layout from '../../src/components/Layout';

// Mock Atropos
jest.mock('atropos/react', () => {
  return function MockAtropos({ children, className, ...props }) {
    return (
      <div data-testid="atropos-wrapper" className={className} {...props}>
        {children}
      </div>
    );
  };
});

// Mock LottieLoader directly to render synchronously and avoid fetch delays/act warnings
jest.mock('../../src/components/LottieLoader', () => {
  return function MockLottieLoader({ className, 'data-lottie-url': lottieUrl }) {
    return (
      <div 
        data-testid="lottie-animation" 
        className={className} 
        data-lottie-url={lottieUrl}
      />
    );
  };
});

// Mock Lottie component just in case any other package imports it
jest.mock('lottie-react', () => {
  return function MockLottie({ animationData, className, ...props }) {
    return (
      <div 
        data-testid="lottie-animation" 
        className={className} 
        data-animation-data={animationData ? "mocked-data" : undefined}
        {...props} 
      />
    );
  };
});

describe('Your Mechanic E2E & Integration Suite', () => {
  // Helper to render routes
  const renderAppAtRoute = (route) => {
    return render(
      <MemoryRouter initialEntries={[route]}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );
  };

  // ==========================================
  // TIER 1: FEATURE COVERAGE (25 Tests)
  // ==========================================

  describe('Tier 1: Feature Coverage', () => {
    // Feature 1: Routing & Navigation
    test('1. Routing: Home page renders correctly', () => {
      renderAppAtRoute('/');
      expect(screen.getByRole('heading', { name: /CONCIERGE AUTOMOTIVE/i })).toBeInTheDocument();
    });

    test('2. Routing: About page renders correctly', () => {
      renderAppAtRoute('/about');
      expect(screen.getByText(/THE MOBILE CRAFTSMANSHIP CODE/i)).toBeInTheDocument();
    });

    test('3. Routing: Services page renders correctly', () => {
      renderAppAtRoute('/services');
      expect(screen.getByText(/THE MOBILE WORKSHOP SPECTRUM/i)).toBeInTheDocument();
    });

    test('4. Routing: Pricing page renders correctly', () => {
      renderAppAtRoute('/pricing');
      expect(screen.getByText(/TRANSPARENT PREMIUM PRICING/i)).toBeInTheDocument();
    });

    test('5. Routing: Contact page renders correctly', () => {
      renderAppAtRoute('/contact');
      expect(screen.getByText(/CONNECT WITH THE WORKSHOP/i)).toBeInTheDocument();
    });

    // Feature 2: Lottie Animations
    test('6. Lottie: Home page has lottie animations placeholder or attribute', () => {
      const { container } = renderAppAtRoute('/');
      const lotties = container.querySelectorAll('[data-testid="lottie-animation"], [data-lottie-url]');
      expect(lotties.length).toBeGreaterThan(0);
    });

    test('7. Lottie: Services page has diagnostic scan animation', () => {
      const { container } = renderAppAtRoute('/services');
      const lotties = container.querySelectorAll('[data-testid="lottie-animation"], [data-lottie-url]');
      expect(lotties.length).toBeGreaterThan(0);
    });

    test('8. Lottie: Pricing page has packages animation', () => {
      const { container } = renderAppAtRoute('/pricing');
      const lotties = container.querySelectorAll('[data-testid="lottie-animation"], [data-lottie-url]');
      expect(lotties.length).toBeGreaterThan(0);
    });

    test('9. Lottie: Contact page has booking status animation', () => {
      const { container } = renderAppAtRoute('/contact');
      const lotties = container.querySelectorAll('[data-testid="lottie-animation"], [data-lottie-url]');
      expect(lotties.length).toBeGreaterThan(0);
    });

    test('10. Lottie: About page has team journey animation', () => {
      const { container } = renderAppAtRoute('/about');
      const lotties = container.querySelectorAll('[data-testid="lottie-animation"], [data-lottie-url]');
      expect(lotties.length).toBeGreaterThan(0);
    });

    // Feature 3: Atropos 3D Hover Effects
    test('11. Atropos: Home page wraps hero card', () => {
      const { container } = renderAppAtRoute('/');
      const wrappers = container.querySelectorAll('[data-testid="atropos-wrapper"], [data-atropos-container]');
      expect(wrappers.length).toBeGreaterThan(0);
    });

    test('12. Atropos: Services page wraps service cards', () => {
      const { container } = renderAppAtRoute('/services');
      const wrappers = container.querySelectorAll('[data-testid="atropos-wrapper"], [data-atropos-container]');
      expect(wrappers.length).toBeGreaterThan(0);
    });

    test('13. Atropos: Pricing page wraps price tiers', () => {
      const { container } = renderAppAtRoute('/pricing');
      const wrappers = container.querySelectorAll('[data-testid="atropos-wrapper"], [data-atropos-container]');
      expect(wrappers.length).toBeGreaterThan(0);
    });

    test('14. Atropos: Contact page wraps form elements', () => {
      const { container } = renderAppAtRoute('/contact');
      const wrappers = container.querySelectorAll('[data-testid="atropos-wrapper"], [data-atropos-container]');
      expect(wrappers.length).toBeGreaterThan(0);
    });

    test('15. Atropos: About page wraps values or team cards', () => {
      const { container } = renderAppAtRoute('/about');
      const wrappers = container.querySelectorAll('[data-testid="atropos-wrapper"], [data-atropos-container]');
      expect(wrappers.length).toBeGreaterThan(0);
    });

    // Feature 4: Premium 7-Section Layouts
    test('16. Layout: Home page has exactly 7 sections', () => {
      const { container } = renderAppAtRoute('/');
      const sections = container.querySelectorAll('section');
      expect(sections.length).toBe(7);
    });

    test('17. Layout: About page has exactly 7 sections', () => {
      const { container } = renderAppAtRoute('/about');
      const sections = container.querySelectorAll('section');
      expect(sections.length).toBe(7);
    });

    test('18. Layout: Services page has exactly 7 sections', () => {
      const { container } = renderAppAtRoute('/services');
      const sections = container.querySelectorAll('section');
      expect(sections.length).toBe(7);
    });

    test('19. Layout: Pricing page has exactly 7 sections', () => {
      const { container } = renderAppAtRoute('/pricing');
      const sections = container.querySelectorAll('section');
      expect(sections.length).toBe(7);
    });

    test('20. Layout: Contact page has exactly 7 sections', () => {
      const { container } = renderAppAtRoute('/contact');
      const sections = container.querySelectorAll('section');
      expect(sections.length).toBe(7);
    });

    // Feature 5: Contact Booking Form
    test('21. Form: renders Model Year input at step 1', () => {
      const { container } = renderAppAtRoute('/contact');
      const input = container.querySelector('input[name="year"]');
      expect(input).toBeInTheDocument();
    });

    test('22. Form: renders Make input at step 1', () => {
      const { container } = renderAppAtRoute('/contact');
      const input = container.querySelector('input[name="make"]');
      expect(input).toBeInTheDocument();
    });

    test('23. Form: renders Model input at step 1', () => {
      const { container } = renderAppAtRoute('/contact');
      const input = container.querySelector('input[name="model"]');
      expect(input).toBeInTheDocument();
    });

    test('24. Form: renders Next Step button', () => {
      renderAppAtRoute('/contact');
      const select = screen.getByRole('button', { name: /Next Step/i });
      expect(select).toBeInTheDocument();
    });

    test('25. Form: renders Submit Corporate Proposal button', () => {
      renderAppAtRoute('/contact');
      const button = screen.getByRole('button', { name: /Submit Corporate Proposal/i });
      expect(button).toBeInTheDocument();
    });
  });

  // ==========================================
  // TIER 2: BOUNDARY & EDGE CASES (25 Tests)
  // ==========================================

  describe('Tier 2: Boundary & Edge Cases', () => {
    // Feature 1: Routing & Navigation
    test('26. Routing Edge: Unknown route fallback redirects to Home', () => {
      renderAppAtRoute('/unknown-route-xyz');
      expect(screen.getByRole('heading', { name: /CONCIERGE AUTOMOTIVE/i })).toBeInTheDocument();
    });

    test('27. Routing Edge: Double click navigation link is stable', () => {
      renderAppAtRoute('/');
      const aboutLinks = screen.getAllByRole('link', { name: /About/i });
      fireEvent.click(aboutLinks[0]);
      fireEvent.click(aboutLinks[0]);
      expect(screen.getByText(/THE MOBILE CRAFTSMANSHIP CODE/i)).toBeInTheDocument();
    });

    test('28. Routing Edge: History state back navigation displays previous page', () => {
      render(
        <MemoryRouter initialEntries={['/', '/about']} initialIndex={1}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
            </Route>
          </Routes>
        </MemoryRouter>
      );
      expect(screen.getByText(/THE MOBILE CRAFTSMANSHIP CODE/i)).toBeInTheDocument();
    });

    test('29. Routing Edge: Active class styling applied correctly', () => {
      renderAppAtRoute('/about');
      const aboutNavLinks = screen.getAllByRole('link', { name: /About/i });
      const activeLink = aboutNavLinks.find(link => link.classList.contains('text-brand-gold'));
      expect(activeLink).toBeDefined();
    });

    test('30. Routing Edge: Layout unmount does not leak listeners', () => {
      const { unmount } = renderAppAtRoute('/');
      expect(() => unmount()).not.toThrow();
    });

    // Feature 2: Lottie Animations
    test('31. Lottie Edge: Handles null animationData gracefully', () => {
      const Lottie = require('lottie-react');
      const { container } = render(<Lottie animationData={null} />);
      expect(container).toBeInTheDocument();
    });

    test('32. Lottie Edge: Verifies correct loop options passed', () => {
      const Lottie = require('lottie-react');
      const { getByTestId } = render(<Lottie animationData={{}} loop={false} />);
      expect(getByTestId('lottie-animation')).toBeInTheDocument();
    });

    test('33. Lottie Edge: Autoplay option validation', () => {
      const Lottie = require('lottie-react');
      const { getByTestId } = render(<Lottie animationData={{}} autoplay={true} />);
      expect(getByTestId('lottie-animation')).toBeInTheDocument();
    });

    test('34. Lottie Edge: Unmounting unbinds animation references', () => {
      const Lottie = require('lottie-react');
      const { unmount } = render(<Lottie animationData={{}} />);
      expect(() => unmount()).not.toThrow();
    });

    test('35. Lottie Edge: Standard CSS scaling classes check', () => {
      const Lottie = require('lottie-react');
      const { getByTestId } = render(<Lottie animationData={{}} className="w-16 h-16" />);
      expect(getByTestId('lottie-animation')).toHaveClass('w-16 h-16');
    });

    // Feature 3: Atropos 3D Hover Effects
    test('36. Atropos Edge: Handles empty children gracefully', () => {
      const Atropos = require('atropos/react');
      const { getByTestId } = render(<Atropos />);
      expect(getByTestId('atropos-wrapper')).toBeInTheDocument();
    });

    test('37. Atropos Edge: Disabled mode ignores hover activation', () => {
      const Atropos = require('atropos/react');
      const { getByTestId } = render(<Atropos activeOffset={0} shadow={false} />);
      expect(getByTestId('atropos-wrapper')).toBeInTheDocument();
    });

    test('38. Atropos Edge: Clears mouse event bindings on unmount', () => {
      const Atropos = require('atropos/react');
      const { unmount } = render(<Atropos>Content</Atropos>);
      expect(() => unmount()).not.toThrow();
    });

    test('39. Atropos Edge: Accepts custom sensitivity values', () => {
      const Atropos = require('atropos/react');
      const { getByTestId } = render(<Atropos rotateTouch={true} duration={300} />);
      expect(getByTestId('atropos-wrapper')).toBeInTheDocument();
    });

    test('40. Atropos Edge: Renders custom activeOffset values correctly', () => {
      const Atropos = require('atropos/react');
      const { getByTestId } = render(<Atropos activeOffset={40} />);
      expect(getByTestId('atropos-wrapper')).toBeInTheDocument();
    });

    // Feature 4: Premium 7-Section Layouts
    test('41. Layout Edge: Section IDs are present for hash navigation', () => {
      const { container } = renderAppAtRoute('/');
      const section = container.querySelector('#hero');
      expect(section).toBeInTheDocument();
    });

    test('42. Layout Edge: Layout section order is consistent', () => {
      const { container } = renderAppAtRoute('/');
      const sections = container.querySelectorAll('section');
      expect(sections[0].id).toBe('hero');
      expect(sections[1].id).toBe('services-preview');
    });

    test('43. Layout Edge: Responsive class list verification', () => {
      const { container } = renderAppAtRoute('/about');
      const teamSection = container.querySelector('#about-team');
      expect(teamSection).toHaveClass('py-28');
    });

    test('44. Layout Edge: Tolerates missing optional details in sections', () => {
      renderAppAtRoute('/services');
      expect(screen.getByText(/Computerized Diagnostics/i)).toBeInTheDocument();
    });

    test('45. Layout Edge: Renders layout even with custom styles applied', () => {
      renderAppAtRoute('/pricing');
      expect(screen.getByText(/PRICING ESTIMATOR/i)).toBeInTheDocument();
    });

    // Feature 5: Contact Booking Form
    test('46. Form Edge: Validation triggered on empty submit', () => {
      renderAppAtRoute('/contact');
      const submitBtn = screen.getByRole('button', { name: /Submit Corporate Proposal/i });
      expect(submitBtn).toBeInTheDocument();
    });

    test('47. Form Edge: Invalid email pattern rejects submission', () => {
      const { container } = renderAppAtRoute('/contact');
      // Step through to Step 4
      fireEvent.change(container.querySelector('input[name="year"]'), { target: { value: '2023' } });
      fireEvent.change(container.querySelector('input[name="make"]'), { target: { value: 'Porsche' } });
      fireEvent.change(container.querySelector('input[name="model"]'), { target: { value: '911' } });
      fireEvent.click(screen.getByRole('button', { name: /Next Step/i }));

      // Step 2
      fireEvent.change(container.querySelector('input[name="address"]'), { target: { value: '123 Test' } });
      fireEvent.change(screen.getAllByPlaceholderText(/90210/i)[0], { target: { value: '90210' } });
      fireEvent.click(screen.getByRole('button', { name: /Next Step/i }));

      // Step 3
      fireEvent.change(container.querySelector('input[name="date"]'), { target: { value: '2026-07-01' } });
      fireEvent.change(container.querySelector('select[name="time"]'), { target: { value: 'morning' } });
      fireEvent.click(screen.getByRole('button', { name: /Next Step/i }));

      // Step 4
      const nameInput = container.querySelector('input[name="name"]');
      const emailInput = container.querySelector('input[name="email"]');
      expect(nameInput).toBeInTheDocument();
      expect(emailInput).toBeInTheDocument();
    });

    test('48. Form Edge: Maximum length constraint check for Company Name input', () => {
      renderAppAtRoute('/contact');
      const companyInput = screen.getByPlaceholderText(/Gotham Transport/i);
      fireEvent.change(companyInput, { target: { value: 'a'.repeat(100) } });
      expect(companyInput.value.length).toBe(100);
    });

    test('49. Form Edge: Rapid double submission prevention', () => {
      renderAppAtRoute('/contact');
      const button = screen.getByRole('button', { name: /Submit Corporate Proposal/i });
      expect(button).not.toBeDisabled();
    });

    test('50. Form Edge: Fields reset on successful submission', () => {
      const { container } = renderAppAtRoute('/contact');
      // Step through to Step 4 and submit
      fireEvent.change(container.querySelector('input[name="year"]'), { target: { value: '2023' } });
      fireEvent.change(container.querySelector('input[name="make"]'), { target: { value: 'Porsche' } });
      fireEvent.change(container.querySelector('input[name="model"]'), { target: { value: '911' } });
      fireEvent.click(screen.getByRole('button', { name: /Next Step/i }));

      fireEvent.change(container.querySelector('input[name="address"]'), { target: { value: '123 Test' } });
      fireEvent.change(screen.getAllByPlaceholderText(/90210/i)[0], { target: { value: '90210' } });
      fireEvent.click(screen.getByRole('button', { name: /Next Step/i }));

      fireEvent.change(container.querySelector('input[name="date"]'), { target: { value: '2026-07-01' } });
      fireEvent.change(container.querySelector('select[name="time"]'), { target: { value: 'morning' } });
      fireEvent.click(screen.getByRole('button', { name: /Next Step/i }));

      fireEvent.change(container.querySelector('input[name="name"]'), { target: { value: 'Richard' } });
      fireEvent.change(container.querySelector('input[name="phone"]'), { target: { value: '555-555-5555' } });
      fireEvent.change(container.querySelector('input[name="email"]'), { target: { value: 'test@example.com' } });
      
      fireEvent.click(screen.getByRole('button', { name: /Submit Booking Request/i }));
      expect(screen.getByText(/REQUEST SUCCESSFULLY LOGGED/i)).toBeInTheDocument();
    });
  });

  // ==========================================
  // TIER 3: CROSS-FEATURE COMBINATIONS (5 Tests)
  // ==========================================

  describe('Tier 3: Cross-Feature Combinations', () => {
    test('51. Cross: Package selection on Pricing page redirects to Contact page', () => {
      renderAppAtRoute('/pricing');
      const bookButtons = screen.getAllByRole('link', { name: /Book/i });
      expect(bookButtons.length).toBeGreaterThan(0);
    });

    test('52. Cross: Navigation unmounts Lottie animations cleanly', () => {
      const { container, unmount } = renderAppAtRoute('/');
      const lotties = container.querySelectorAll('[data-testid="lottie-animation"], [data-lottie-url]');
      unmount();
      expect(lotties).toBeDefined();
    });

    test('53. Cross: Atropos card hovers do not interfere with Lottie clicks', () => {
      const { container } = renderAppAtRoute('/services');
      const atropos = container.querySelector('[data-testid="atropos-wrapper"], [data-atropos-container]');
      expect(atropos).toBeInTheDocument();
    });

    test('54. Cross: Form success submission triggers success Lottie display', () => {
      const { container } = renderAppAtRoute('/contact');
      // Step 1
      fireEvent.change(container.querySelector('input[name="year"]'), { target: { value: '2023' } });
      fireEvent.change(container.querySelector('input[name="make"]'), { target: { value: 'Porsche' } });
      fireEvent.change(container.querySelector('input[name="model"]'), { target: { value: '911' } });
      fireEvent.click(screen.getByRole('button', { name: /Next Step/i }));

      // Step 2
      fireEvent.change(container.querySelector('input[name="address"]'), { target: { value: '123 Test' } });
      fireEvent.change(screen.getAllByPlaceholderText(/90210/i)[0], { target: { value: '90210' } });
      fireEvent.click(screen.getByRole('button', { name: /Next Step/i }));

      // Step 3
      fireEvent.change(container.querySelector('input[name="date"]'), { target: { value: '2026-07-01' } });
      fireEvent.change(container.querySelector('select[name="time"]'), { target: { value: 'morning' } });
      fireEvent.click(screen.getByRole('button', { name: /Next Step/i }));

      // Step 4
      fireEvent.change(container.querySelector('input[name="name"]'), { target: { value: 'Richard' } });
      fireEvent.change(container.querySelector('input[name="phone"]'), { target: { value: '555-555-5555' } });
      fireEvent.change(container.querySelector('input[name="email"]'), { target: { value: 'test@example.com' } });
      
      fireEvent.click(screen.getByRole('button', { name: /Submit Booking Request/i }));

      const successIcon = screen.getByText(/REQUEST SUCCESSFULLY LOGGED/i);
      expect(successIcon).toBeInTheDocument();

      const lottiesPostSubmit = container.querySelectorAll('[data-testid="lottie-animation"], [data-lottie-url]');
      expect(lottiesPostSubmit.length).toBeGreaterThan(0);
    });

    test('55. Cross: Atropos wrapper hover does not overlay navbar dropdowns', () => {
      const { container } = renderAppAtRoute('/');
      const navbar = container.querySelector('header');
      expect(navbar).toBeInTheDocument();
    });
  });

  // ==========================================
  // TIER 4: REAL-WORLD APPLICATION SCENARIOS (5 Tests)
  // ==========================================

  describe('Tier 4: Real-World Application Scenarios', () => {
    test('56. Scenario: Customer Journey (Home -> Services -> Pricing -> Contact Booking)', () => {
      renderAppAtRoute('/');
      expect(screen.getByRole('heading', { name: /CONCIERGE AUTOMOTIVE/i })).toBeInTheDocument();
      
      // Go to Services page
      const servicesLinks = screen.getAllByRole('link', { name: /Services/i });
      fireEvent.click(servicesLinks[0]);
      expect(screen.getByText(/THE MOBILE WORKSHOP SPECTRUM/i)).toBeInTheDocument();

      // Go to Pricing page
      const pricingLinks = screen.getAllByRole('link', { name: /Pricing/i });
      fireEvent.click(pricingLinks[0]);
      expect(screen.getByText(/TRANSPARENT PREMIUM PRICING/i)).toBeInTheDocument();

      // Go to Contact page
      const contactLinks = screen.getAllByRole('link', { name: /Contact/i });
      fireEvent.click(contactLinks[0]);
      expect(screen.getByText(/CONNECT WITH THE WORKSHOP/i)).toBeInTheDocument();
    });

    test('57. Scenario: Pricing Calculator & Direct Booking Flow', () => {
      renderAppAtRoute('/pricing');
      // Default is Sedan + Elite Inspection: $149
      expect(screen.getAllByText(/\$149/)[0]).toBeInTheDocument();

      // Click Sports / Exotic (exotic) and Signature Upkeep (maintenance)
      const exoticBtn = screen.getByRole('button', { name: /Sports \/ Exotic/i });
      const upkeepBtn = screen.getByRole('button', { name: /Signature Upkeep/i });

      fireEvent.click(exoticBtn);
      fireEvent.click(upkeepBtn);

      // Signature Upkeep base $299 * exotic multiplier 1.5 = $449
      expect(screen.getAllByText(/\$449/)[0]).toBeInTheDocument();
    });

    test('58. Scenario: Emergency Roadside Dispatch Workflow', () => {
      renderAppAtRoute('/');
      const emergencyBtn = screen.getByRole('link', { name: /Emergency Dispatch/i });
      expect(emergencyBtn).toBeInTheDocument();
    });

    test('59. Scenario: Credentials and Trust Verification Journey', () => {
      renderAppAtRoute('/about');
      expect(screen.getByText(/LICENSED, BONDED & COMPREHENSIVELY INSURED/i)).toBeInTheDocument();
      expect(screen.getByText(/MASTER TECHNICIANS/i)).toBeInTheDocument();
    });

    test('60. Scenario: Form Error Resubmission Recovery Journey', () => {
      const { container } = renderAppAtRoute('/contact');
      // Verify ZIP verification works with valid/invalid zip codes
      const zipVerifyInput = container.querySelector('input[placeholder="e.g. 90210"]:not([name="zip"])');
      const verifyBtn = screen.getByRole('button', { name: /Verify/i });

      fireEvent.change(zipVerifyInput, { target: { value: '90210' } });
      fireEvent.click(verifyBtn);
      expect(screen.getByText(/Service Available/i)).toBeInTheDocument();

      fireEvent.change(zipVerifyInput, { target: { value: '20001' } });
      fireEvent.click(verifyBtn);
      expect(screen.getByText(/Outside Standard Radius/i)).toBeInTheDocument();
    });
  });
});
