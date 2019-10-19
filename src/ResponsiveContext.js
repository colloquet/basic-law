// @flow
import React, { useState, useEffect } from 'react';

import type { Node } from 'react';

const ResponsiveContext = React.createContext<boolean>(false);

export function ResponsiveProvider({ children }: { children: Node }) {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, []);

  return <ResponsiveContext.Provider value={isMobile}>{children}</ResponsiveContext.Provider>;
}

export const ResponsiveConsumer = ResponsiveContext.Consumer;
