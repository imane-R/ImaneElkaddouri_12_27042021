import KeyData from "../KeyData/KeyData";
import ProteinesIcon from './proteinIcon.png'


function Proteines(props) {
    return (
        <div className='Calories'>
            <KeyData logo={ProteinesIcon} alt='ProteinesIcon' value={props.value} title='Proteines' unit='g' />
        </div>
    );
}
export default Proteines;