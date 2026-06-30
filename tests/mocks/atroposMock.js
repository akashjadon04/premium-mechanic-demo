const React = require('react');

function Atropos({ children, className, ...props }) {
  return React.createElement('div', { 'data-testid': 'atropos-wrapper', className, ...props }, children);
}

Atropos.default = Atropos;
Atropos.__esModule = true;

module.exports = Atropos;
