/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */

import PropTypes from 'prop-types';

const Page = ({ children }) => (
  <main className="page">
    {children}
  </main>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
