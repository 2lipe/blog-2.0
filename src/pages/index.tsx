import React from 'react';
import { PageProps } from 'gatsby';

const IndexRoute = (props: PageProps) => {
  return (
    <>
      <h1>Hello World</h1>
      <p>{props.path}</p>
    </>
  );
};

export default IndexRoute;
