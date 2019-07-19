import { useLayoutEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

function ScrollToTop({ children, location }) {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return children;
}

ScrollToTop.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(ScrollToTop);
