import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect } from 'react-redux';
import {getCustomers} from '../../store/actions/customer'
import './customers.css';

import useSound from 'use-sound';

import catMeow3 from '../../sounds/cat-meow-3.wav';

class Customers extends Component {

  static propTypes = {
    getCustomers: PropTypes.func.isRequired,
    customers: PropTypes.array.isRequired
  }

  static defaultProps = {
    customers: []
  }

  componentWillMount() {
    this.props.getCustomers();
  }

  render() {

    const [play] = useSound(catMeow3)

    return (
      <div>
        <h2>Customers</h2>
        <ul>
        {this.props.customers.map(customer =>
          <li key={customer.id}>
            {customer.firstName} {customer.lastName}
            <img 
              src={customer.url}
              onClick={play}
            />
          </li>
        )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  customers: state.customers
})

const dispatchToProps = (dispatch) => ({
   getCustomers: () => dispatch(getCustomers())
})

export default connect(mapStateToProps, dispatchToProps)(Customers);
