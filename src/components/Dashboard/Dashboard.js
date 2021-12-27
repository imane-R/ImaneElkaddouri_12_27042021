import './Dashboard.css'
import { useGenericInfos } from '../../services/UserUserData';
import Welcome from './Welcome/Welcome';
import Calories from './Calories/Calories';
import Proteines from './Proteines/Proteines';
import Glucides from './Glucides/Glucides';
import Lipides from './Lipides/Lipides';
import Spacer from '../commons/Spacer/Spacer';

function Dashboard() {
    const { data } = useGenericInfos();

    return (
        <div className='Dashboard'>
            {data && data.userInfos &&
                <Welcome firstName={data.userInfos.firstName} />
            }

            {data && data.keyData &&
            <div>
                <Calories value= {data.keyData.calorieCount}/>
                <Spacer height={39}/>
                <Proteines value= {data.keyData.proteinCount}/>
                <Spacer height={39}/>
                <Glucides value= {data.keyData.carbohydrateCount}/>
                <Spacer height={39}/>
                <Lipides value= {data.keyData.lipidCount}/>
            </div>
            }
             
        </div>
    );
}
export default Dashboard;