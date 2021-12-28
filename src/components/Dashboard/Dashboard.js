import './Dashboard.css'
import { useGenericInfos } from '../../services/UserUserData';
import { useActivity } from '../../services/UserUserData';
import Welcome from './Welcome/Welcome';
import Calories from './Calories/Calories';
import Proteines from './Proteines/Proteines';
import Glucides from './Glucides/Glucides';
import Lipides from './Lipides/Lipides';
import Spacer from '../commons/Spacer/Spacer';
import Activity from './Activity/Activity';

function Dashboard() {
    const { user } = useGenericInfos();
    const { activity } = useActivity();

    return (
        <div className='Dashboard'>
            { user && user.userInfos &&
                <Welcome firstName={user.userInfos.firstName} />
            }
            <div className='userActivities'>
                { activity && activity.sessions && 
                    <Activity data={activity.sessions} /> 
                }
                {user && user.keyData &&
                    <div>
                        <Calories value={user.keyData.calorieCount} />
                        <Spacer height={39} />
                        <Proteines value={user.keyData.proteinCount} />
                        <Spacer height={39} />
                        <Glucides value={user.keyData.carbohydrateCount} />
                        <Spacer height={39} />
                        <Lipides value={user.keyData.lipidCount} />
                    </div>
                }
            </div>
        </div>
    );
}
export default Dashboard;