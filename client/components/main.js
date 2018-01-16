import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {logout} from '../store'
import { Button, Divider } from 'semantic-ui-react'

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
const Main = (props) => {
  const {children, handleClick, isLoggedIn} = props

  return (
    <div>
    <div id = "bigTitle">
      <h1>PIÑATA PARTY</h1>
    </div>
      <div id = "navbar">
      <nav>
        {
          isLoggedIn
            ? <div id="navkids">
              {/* The navbar will show these links after you log in */}
              <Link to="/home"> <Button color = "pink">Home</Button> </Link>
              <a href="#" onClick={handleClick}> <Button color = "pink">Logout</Button> </a>
              <Link to="/products"> <Button color = "pink">Products</Button> </Link>
              <Link to="/cart"> <Button color = "pink">Cart</Button> </Link>
            </div>
            : <div>
              {/* The navbar will show these links before you log in */}
              <Link to="/login"><Button color = "pink">Login</Button></Link>
              <Link to="/signup"><Button color = "pink">Sign Up</Button></Link>
              <Link to="/products"><Button color = "pink">Products</Button></Link>
              <Link to="/addProduct"><Button color = "pink">Add Product</Button></Link>
              <Link to="/cart"><Button color = "pink">Cart</Button></Link>
            </div>
        }
      </nav>
      </div>
      <Divider />
      {children}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick () {
      dispatch(logout())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Main))

/**
 * PROP TYPES
 */
Main.propTypes = {
  children: PropTypes.object,
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
