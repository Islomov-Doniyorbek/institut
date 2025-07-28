import React from 'react'
import Container from './Container'

const ActiveTopPage = ({pageTitle}) => {
  return (
     <div className='active_top'>
       <Container>
          <p>Bosh sahifa - {pageTitle}</p>
          <h1>{pageTitle}</h1>
       </Container>
    </div>
  )
}

export default ActiveTopPage
