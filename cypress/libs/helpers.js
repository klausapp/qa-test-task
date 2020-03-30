export const hook = name => `[data-testid="${name}"]`; 
export const getUrl = () => cy.url();

export const genName = () => 
  Math.random().toString(36).substring(7);

export const longString = length => new Array(length + 1).join('1');    

  
