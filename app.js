const App = () => (
  React.createElement('div', { className: 'card' },
    React.createElement('img', { src: 'https://picsum.photos/300/200', alt: 'Profile', className: 'avatar' }),
    React.createElement('h1', null, 'Your Name'),
    React.createElement('p', null, 'Software Developer'),
    React.createElement('p', null,
      'Email: ',
      React.createElement('a', { href: 'mailto:you@example.com' }, 'you@example.com')
    ),
    React.createElement('p', null,
      'Phone: ',
      React.createElement('a', { href: 'tel:+1234567890' }, '+1 234 567 890')
    )
  )
);

ReactDOM.render(
  React.createElement(App, null),
  document.getElementById('root')
);
