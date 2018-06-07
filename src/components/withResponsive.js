import React from 'react'

import { ResponsiveConsumer } from '../ResponsiveContext'

function withResponsive(Component) {
  return function WrappedComponent(props) {
    return (
      <ResponsiveConsumer>
        {context => (
          <Component
            {...props}
            isMobile={context.state.isMobile}
          />
        )}
      </ResponsiveConsumer>
    )
  }
}

export default withResponsive
