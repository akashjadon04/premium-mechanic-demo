const React = require('react');

function Lottie({ animationData, className, ...props }) {
  return React.createElement('div', { 
    'data-testid': 'lottie-animation', 
    className, 
    'data-animation-data': animationData ? 'mocked-data' : undefined, 
    ...props 
  });
}

Lottie.default = Lottie;
Lottie.__esModule = true;

module.exports = Lottie;

