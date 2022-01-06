import {  BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import './Activity.css';

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{` ${payload[0].value}`}kg</p>
          <p className="label">{`${payload[1].value}`}kCal</p>
        </div>
      );
    }
  
    return null;
  };
  
function Activity(props) {
    return (
        <div className='Activity'>
            <div>Activité quotidienne</div>
            <BarChart width={835} height={320} data={props.data}> 
                <CartesianGrid strokeDasharray='3 3' vertical={false}/>
                <XAxis dataKey='index' />
                <YAxis orientation='right' tickSize = '0' tickCount='5'/>
                <Tooltip content={<CustomTooltip />}/>
                <Legend align='right' verticalAlign='top' iconType='circle' wrapperStyle={{ 'top': '-20px' }}/>
                <Bar dataKey='kilogram' name='Poids (kg)' fill='#282D30' barSize={7} label={false} radius={[4, 4, 0, 0]}/>
                <Bar dataKey='calories' name='Calories brûlées (kCal)' fill='#E60000'  barSize={7} label={false} radius={[4, 4, 0, 0]}/>
            </BarChart>

        </div>
    )
}
export default Activity


