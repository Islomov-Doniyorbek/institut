import React, { useEffect, useRef, useState } from 'react';
import { FaUniversity } from 'react-icons/fa';

const counters = [
  { target: 150, label: 'Professor-o‘qituvchilar' },
  { target: 30, label: 'Xorijiy o‘qituvchilar' },
  { target: 25, label: 'Talabalar' },
  { target: 20, label: 'Xorijiy talabalar' },
  { target: 35, label: 'Ilmiy tadqiqotchilar' },
];

function CountUp({ target, startAnimation }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;
    const duration = 1500;
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;

    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.ceil(start));
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [startAnimation, target]);

  return <h2>{count}</h2>;
}

function UnInfo() {
  const [startAnim, setStartAnim] = useState(false);
  const sectionRef = useRef();

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const offset = window.scrollY + rect.top;
      const scrollTop = window.scrollY;
      const yPos = (scrollTop - offset) * 0.3; // pastdan tepaga 0.3x tezlikda

      sectionRef.current.style.backgroundPosition = `center ${yPos}px`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Start animation for counters
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnim(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className='usinfo'>
      <div className='useinfo_box' ref={sectionRef}>
        <div className='info_text'>
          <span><FaUniversity /></span>
          <h1><b>Institut</b> <br /> raqamlarda</h1>
        </div>
        <div className='useinfo_row'>
          {counters.map((item, idx) => (
            <div className='useinfo_card' key={idx}>
              <CountUp target={item.target} startAnimation={startAnim} />
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UnInfo;
