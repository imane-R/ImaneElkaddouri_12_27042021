import KeyData from "../KeyData/KeyData";
import CloriesIcon from './caloriesIcon.png'


function Calories(props) {
    return (
        <div className='Calories'>
            <KeyData logo={CloriesIcon} alt='CloriesIcon' value={props.value} title='Calories' unit='kCal' />
        </div>
    );
}
export default Calories;