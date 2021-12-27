import KeyData from "../KeyData/KeyData";
import GlucidesIcon from './glucidesIcon.png'


function Glucides(props) {
    return (
        <div className='Glucides'>
            <KeyData logo={GlucidesIcon} alt='GlucidesIcon' value={props.value} title='Glucides' unit='g' />
        </div>
    );
}
export default Glucides;