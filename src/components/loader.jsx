import React from 'react';
import './loader.css'; // CSS faylni alohida yozamiz

const Loader = () => {
  const spans = Array.from({ length: 20 }, (_, i) => (
    <span key={i} style={{ "--i": i + 1 }}></span>
  ));

  return (
    <section>
      <div className="container">
        <div className="circle">{spans}</div>
        <div className="circle">{spans}</div>
      </div>
    </section>
  );
};

export default Loader;
