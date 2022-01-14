import KeyData from "../KeyData/KeyData";
import CloriesIcon from './caloriesIcon.png';
import PropTypes from 'prop-types';


/**
 * create the average of calories with user keyData 
 * @param value
 */ 

function Calories({value}) {
    return (
        <div className='Calories'>
            <KeyData logo={CloriesIcon} alt='CloriesIcon' value={value} title='Calories' unit='kCal' />
        </div>
    );
}
Calories.propTypes = {
    value: PropTypes.number,
}
export default Calories;