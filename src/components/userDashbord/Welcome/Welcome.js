import './Welcome.css';
import PropTypes from 'prop-types';

/**
* Component for showing welcome message.
* @param name
* @return {JSX} 
*/ 
function Welcome({name}) {
    return <div className="Welcome">
        <h1 className="welcomeName"> Bonjour <span className="nameColor">{name}</span></h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
}
Welcome.propTypes = {
    name : PropTypes.string
};
export default Welcome