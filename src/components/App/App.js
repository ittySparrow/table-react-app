import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import TableContainer from '../Table/TableContainer'
import NavigationContainer from '../NavigationMenu/NavigationContainer'
import { showError } from '../../_redux/appReducer'
import ErrorMessage from '../common/ErrorMessage'

function App({ error, showError }) {
  return (
    <Container fluid className={error ? 'error' : ''}>
      {error && <ErrorMessage error={error} showError={showError} />}
      <header className='header'></header>
      <NavigationContainer />
      <TableContainer />
    </Container>
  )
}

const mapStateToProps = ({ app }) => ({
  error: app.error,
})

export default connect(mapStateToProps, { showError })(App)
