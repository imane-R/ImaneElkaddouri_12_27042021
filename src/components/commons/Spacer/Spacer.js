import PropTypes from 'prop-types';

/**
 * create a spacer to use it instead of margin or padding to make space between components
 * @param props
 * @return {JSX} 
 */ 
    function Spacer({height}) {
        return <div className="Spacer" style={{ height: `${height}px` }}></div>
    }

    Spacer.propTypes = {
        height : PropTypes.number
    };
    export default Spacer