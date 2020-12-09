import React from 'react'
import { Row, Spinner } from 'react-bootstrap'

const Preloader = () => {
  return (
    <Row className='justify-content-center'>
      <Spinner animation='grow' role='status' size='sm'></Spinner>
      <Spinner animation='grow' role='status' size='sm'></Spinner>
      <Spinner animation='grow' role='status' size='sm'></Spinner>
    </Row>
  )
}

export default Preloader
