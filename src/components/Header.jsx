import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import '../styles/components/Header.styl'
import Logo from '@/assets/img/logo-gndx.png'
import Title from './Title.tsx'

const Header = props => (
  <div className='Header'>
    <h1 className='Header-title'>
      <Link to='/'>
        <img src={Logo} alt='' width={32} />
        <Title title='Platzi Store' />
      </Link>
    </h1>
    <div className='Header-checkout'>
      <Link to='/checkout'>
        <i className='fas fa-shopping-basket' />
      </Link>
      {props.cart.length > 0 &&
        <div className='Header-alert'>{props.cart.length}</div>}
    </div>
  </div>
)

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps, null)(Header)
