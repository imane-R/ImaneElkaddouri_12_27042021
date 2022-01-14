import KeyData from "../KeyData/KeyData";
import GlucidesIcon from './glucidesIcon.png';
import PropTypes from 'prop-types';

/**
 * create the average of Glucides with user keyData 
 * @param value
 * @return {JSX}
 */     

function Glucides({value}) {
    return (
        <div className='Glucides'>
            <KeyData logo={GlucidesIcon} alt='GlucidesIcon' value={value} title='Glucides' unit='g' />
        </div>
    );
}
Glucides.propTypes = {
    value: PropTypes.number,
}
export default Glucides;