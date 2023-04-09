import React, { useEffect } from 'react';

function Calendly() {
  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
    head.appendChild(script);

    return () => {
      head.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/mikedropfades/haircut-40?month"
      style={{ minWidth: '320px', height: '900px' }}
    />
  );
}

export default Calendly;