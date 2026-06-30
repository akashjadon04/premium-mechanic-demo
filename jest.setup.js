import '@testing-library/jest-dom';

if (typeof window !== 'undefined' && !window.scrollTo) {
  window.scrollTo = jest.fn();
}

global.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ v: '5.5.0', fr: 30, ip: 0, op: 100, w: 100, h: 100, nm: 'dummy', layers: [] }),
  })
);


