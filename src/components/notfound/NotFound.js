import './NotFound.css'

/**Render not founded pages 
 * @return {JSX}
*/
function NotFound () {
    return <div className='NotFound'>
        <div className='error404'>404</div>
        <div className='error-message'>Oups! La page que vous demandez n'existe pas.</div>
    </div>
}

export default NotFound;