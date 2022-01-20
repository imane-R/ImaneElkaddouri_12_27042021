import KeyData from "../KeyData/KeyData";
import ProteinesIcon from './proteinIcon.png'
import PropTypes from 'prop-types';
/**
 * create the average of Proteines with user keyData 
 * @param value
 */

function Proteines({value}) {
    return (
        <div className='Calories'>
            <KeyData logo={ProteinesIcon} alt='ProteinesIcon' value={value} title='Proteines' unit='g' />
        </div>
    );
}
Proteines.propTypes = {
    value: PropTypes.number,
}
export default Proteines;