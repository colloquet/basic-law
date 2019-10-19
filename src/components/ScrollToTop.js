// @flow
import { useLayoutEffect } from 'react';
import { withRouter } from 'react-router-dom';

import type { Node } from 'react';
import type { Location } from 'react-router-dom';

function ScrollToTop({ children, location }: { children: Node, location: Location }) {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return children;
}

export default withRouter(ScrollToTop);
