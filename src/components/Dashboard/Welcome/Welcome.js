import './Welcome.css'

function Welcome(props) {
    return <div className="Welcome">
        <h1 className="welcomeName"> Bonjour <span className="nameColor">{props.name}</span></h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
}
export default Welcome