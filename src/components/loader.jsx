import React, { useEffect, useState } from 'react';
import './loader.css';
import loader from '../Images/main_doc-removebg-preview.png';

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 4 soniyadan keyin loaderni yo'qotamiz
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000);

    return () => clearTimeout(timer); // cleanup
  }, []);

  if (!loading) return null; // loader o'chgandan keyin hech narsa qaytarmaydi

  return (
    <section>
      <div className="container">
        <div className="circle">
          <img src={loader} alt="loader" />
        </div>
      </div>
    </section>
  );
};

export default Loader;
