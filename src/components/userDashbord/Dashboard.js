import './Dashboard.css'
import { useGenericInfos } from '../../services/UserUserData';
import { useActivity } from '../../services/UserUserData';
import { useAverageSessions } from '../../services/UserUserData';
import { usePerformance } from '../../services/UserUserData';
import Welcome from './Welcome/Welcome';
import Calories from './Calories/Calories';
import Proteines from './Proteines/Proteines';
import Glucides from './Glucides/Glucides';
import Lipides from './Lipides/Lipides';
import Spacer from '../commons/Spacer/Spacer';
import Activity from './Activity/Activity';
import AverageSessions from './AverageSessions/AverageSessions';
import Performance from './Performance/Performance';
import Score from './Activity/Score/Score';
import NotFound from '../notfound/NotFound';

/**Render the dashboard page
 * @return {JSX}
*/

function Dashboard() {
    const { user } = useGenericInfos();
    const { activity } = useActivity();
    const { averageSessions } = useAverageSessions();
    const { performance } = usePerformance();
    const hasError = user.hasError || activity.hasError || averageSessions.hasError || performance.hasError;
    const isLoading = user.isLoading || activity.isLoading || averageSessions.isLoading || performance.isLoading;

    if (hasError) {
        return <NotFound />
    } else if (isLoading) {
        return null;
    } else {
        return (
            <div className='Dashboard'>
                <Welcome name={user.getName()} />
                <div className='userActivities'>
                    <div className='charts'>
                        <div className='activities'>
                                <Activity data={activity.getSessionChartData()} />
                        </div>
                        <Spacer height={24} />
                        <div className='averagePerformanceScore'>
                            <div className='averageSessions'>
                                    <AverageSessions data={averageSessions.getAverageSessionChartData()} />
                            </div>
                            <div className='performance'>
                                    <Performance data={performance.getPerformanceChartData()} />
                            </div>
                            <div className='score'>
                                <Score data={user.getScoreChartData()} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <Calories value={user.getCalorie()} />
                        <Spacer height={39} />
                        <Proteines value={user.getProtein()} />
                        <Spacer height={39} />
                        <Glucides value={user.getCarbohydrate()} />
                        <Spacer height={39} />
                        <Lipides value={user.getLipid()} />
                    </div>

                </div>
            </div>
        );
    }
}
export default Dashboard;