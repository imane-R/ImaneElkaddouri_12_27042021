import './KeyData.css'
import PropTypes from 'prop-types';

/**
 * create genirec component for averages  
 * @param  value
 * @param  alt
 * @param  logo
 * @param  unit
 * @param  title
 * @return {JSX}
 */  

function KeyData({logo, alt, value, unit, title}) {
    return <div className="KeyData">
        <div className='Logo'>
            <img className='logo' src={logo} alt={alt} />
        </div>
        <div className='valueTitle'>
            <div className='value' >{value}{unit}</div>
            <div className='title'>{title}</div>
        </div>
    </div>
}
KeyData.propTypes = {
    alt: PropTypes.string,
    logo: PropTypes.string,
    value: PropTypes.number,
    unit: PropTypes.string,
    title: PropTypes.string
}
export default KeyData

