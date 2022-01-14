import KeyData from "../KeyData/KeyData";
import LipidesIcon from './lipidesIcon.png';
import PropTypes from 'prop-types'

/**
 * create the average of Lipides with user keyData 
 * @param value
 * @return {JSX}
 */ 

function Lipides({value}) {
    return (
        <div className='Lipides'>
            <KeyData logo={LipidesIcon} alt='LipidesIcon' value={value} title='Lipides' unit='g' />
        </div>
    );
}
Lipides.propTypes = {
    value: PropTypes.number,
}
export default Lipides;