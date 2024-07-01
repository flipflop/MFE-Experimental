import React from 'react';

const PageContext = React.createContext();
export const PageContextProvider = PageContext.Provider;
export const PageContextConsumer = PageContext.Consumer;

export default PageContext;