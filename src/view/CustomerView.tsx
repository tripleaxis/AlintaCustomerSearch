import * as React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CustomerSearch from './CustomerSearch';
import CustomerList from './CustomerList';

const Title = styled.h1`
  color: #333;
`;

const CustomerView = ({ customers }) => (
  <>
    <Title>Customers</Title>
    <CustomerSearch />
    <CustomerList customers={customers} />
  </>
);

CustomerView.propTypes = {
  customers: PropTypes.array.isRequired
};

const mapProps = ({ customers }) => ({ customers });
export default connect(mapProps)(CustomerView);
