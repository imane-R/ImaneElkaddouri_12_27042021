import { Pie, PieChart, Cell } from 'recharts';
import './Score.css'
import PropTypes from 'prop-types';

/** create a PieChart with user score data
 * @param  data
 */
function Score({data}) {    
    return (
        <div className='Score'>
            <div className='scoreTitle'>Score</div>
            <div className='percentage'>
                <div className='percentageDescription'><span className='perScore'>{data[0].value}%</span> de votre objectif</div>
            </div>
            <PieChart className='test' width={165} height={175}>
                <Pie data={data} dataKey="value" innerRadius={75} outerRadius={85} startAngle={90} >
                    {data.map((entry, index) => (
                        index === 0
                            ? <Cell key={`cell-${index}`} cornerRadius={10} fill="#ff0000" />
                            : <Cell key={`cell-${index}`} fill="#FBFBFB" />
                    ))}
                </Pie>
            </PieChart>
        </div>
    )
}
Score.propTypes = {
    data: PropTypes.array,
  }
export default Score

