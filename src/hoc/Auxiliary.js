/* Component Name: Auxiliary/Aux
 * Function: Serves as a wrapper to bypass React's limitation
 *           of not allowing adjacent elements in a render
 *           function.
 *
 * Props Received: None - This component technically does not
 *                        even use React.
 *
 */

const aux = props => props.children;

export default aux;
