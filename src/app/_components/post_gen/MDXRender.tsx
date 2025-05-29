'use client';

import { MDXProvider } from '@mdx-js/react';
import { ReactNode } from 'react';

interface MDXRenderProps {
  children: ReactNode;
}

const MDXRender = ({ children }: MDXRenderProps) => {
  return (
    <MDXProvider>
      {children}
    </MDXProvider>
  );
};

export default MDXRender;