import React from 'react';

const Button = ({ children, variant = 'primary', ...otherProps }) => {
  const buttonStyles = {
    primary: {
      backgroundColor: '#333333',
      color: '#EDEFEE',
      width: 'fit-content',
      height: 'fit-content',
      border: 'none',
      borderRadius: '4pt',
      padding: '15px',
      fontSize: '1rem',
      whiteSpace: 'nowrap',
      cursor: 'pointer',
    },
    secondary: {
      backgroundColor: '#f0f0f0',
      color: '#333',
    }
  };

  const style = {
    ...buttonStyles[variant],
    ...otherProps.style,
    ':hover': {
      opacity: '0.8',
    },
  };

  return (
    <button style={style} aria-label={children}>
      {children}
    </button>
  );
};

export default Button;