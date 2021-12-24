import './SideBar.css';
import musculationIcon from './musculationIcon.png'
import CyclingIcon from './cyclingIcon.png'
import swimmingIcon from './SwimmingIcon.png'
import YogaIcon from './YogaIcon.png'

function SideBar() {
    return <aside>
        <div className='icons'>
            <img className='icon' src={YogaIcon} alt='YogaIcon' />
            <img className='icon' src={swimmingIcon} alt='swimmingIcon' />
            <img className='icon' src={CyclingIcon} alt='CyclingIcon' />
            <img className='icon' src={musculationIcon} alt='musculationIcon' />
        </div>
        <div className='copiryght'>
            Copiryght, SportSee 2020
        </div>
    </aside>

}
export default SideBar;