import React from 'react';
import { useParams } from 'react-router-dom';
import ActiveTopPage from '../../components/activeTopPage';
import Container from '../../components/Container';
import ContactComp from '../../components/contactComp';
import data from '../../kafedra.json';

const Kafedra = () => {
  const { kafedra } = useParams();
  const kaf = data.find(f => f.kafedra === String(kafedra));

  return (
    <div className='fakultet'>
      <div className="innerWrapper">
        <div className="banner">
          <ActiveTopPage pageTitle={`${kafedra} kafedrasi`} />
        </div>
        <Container>
          <div className="grdBox">
            <div className="col">
              <div className="title">
                <h2>{kafedra} kafedrasi</h2>
              </div>
              <div className="wrapper">
                {kaf.kafedraInfo.kafedraData.map((item, idx) => {
                  if (typeof item === 'string') {
                    return <p key={idx}>{item}</p>;
                  } else if (Array.isArray(item)) {
                    return (
                      <ul key={idx}>
                        {item.map((it, i) => (
                          <li className='li' key={i}> - {it}</li>
                        ))}
                      </ul>
                    );
                  } else if (typeof item === 'object' && item !== null) {
                    return (
                      <div key={idx}>
                        {Object.entries(item).map((val, i) => (
                          <p key={i}><strong>{item.title}:</strong></p>
                        ))}
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
                <ul>
                    {
                        kaf.kafedraInfo.teachers.map((tch, idx)=>{
                           return (
                             <li className='teacher' key={idx}>
                                <p>
                                    <strong>{tch.teacher}</strong> - {tch.bio}
                                </p>
                            </li>
                           )
                        })
                    }
                </ul>
              </div>
            </div>
            <div className="col">
              <ContactComp />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Kafedra;
