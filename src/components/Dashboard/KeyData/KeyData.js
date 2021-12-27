import './KeyData.css'
import PropTypes from 'prop-types';

function KeyData(props) {
    return <div className="KeyData">
        <div className='Logo'>
            <img className='logo' src={props.logo} alt={props.alt} />
        </div>
        <div className='valueTitle'>
            <div className='value' >{props.value}{props.unit}</div>
            <div className='title'>{props.title}</div>
        </div>
    </div>
}

KeyData.propTypes = {
    logo: PropTypes.string,
    alt: PropTypes.string,
    unit: PropTypes.string,
    title: PropTypes.string,
    value: PropTypes.number
}

export default KeyData