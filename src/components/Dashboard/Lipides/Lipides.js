import KeyData from "../KeyData/KeyData";
import LipidesIcon from './lipidesIcon.png'


function Lipides(props) {
    return (
        <div className='Lipides'>
            <KeyData logo={LipidesIcon} alt='LipidesIcon' value={props.value} title='Lipides' unit='g' />
        </div>
    );
}
export default Lipides;