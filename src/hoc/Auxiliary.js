/*
 * This higher-order wrapper component is used to get around React's 
 * restriction on not having adjacent elements in a component's render
 * statement.
*/

const aux = props => props.children;

export default aux;