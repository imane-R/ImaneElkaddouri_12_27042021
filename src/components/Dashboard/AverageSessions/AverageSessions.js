import './AverageSessions.css';
import { LineChart, XAxis, YAxis, Tooltip, Line, Rectangle, Legend} from 'recharts';

const CustomTooltip = ({ active, payload, }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-line-tooltip">
        <p className="labe-line">{`${payload[0].value}min`}</p>
      </div>
    );
  }

  return null;
};

const CustomizedActiveDot = (props) => {
  const { cx, cy, value } = props;

  if (value > 2500) {
    return (
      <svg x={cx - 10} y={cy - 10} width={20} height={20} fill="red" viewBox="0 0 1024 1024">
        <path d="M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z" />
      </svg>
    );
  }

  return (
    <svg x={cx - 10} y={cy - 10} width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M9 13.8607C11.2091 13.8607 13 12.0809 13 9.88545C13 7.68999 11.2091 5.91022 9 5.91022C6.79086 5.91022 5 7.68999 5 9.88545C5 12.0809 6.79086 13.8607 9 13.8607Z" fill="white" />
      <path d="M9 16.3607C12.5752 16.3607 15.5 13.4762 15.5 9.88545C15.5 6.29466 12.5752 3.41022 9 3.41022C5.42481 3.41022 2.5 6.29466 2.5 9.88545C2.5 13.4762 5.42481 16.3607 9 16.3607Z" stroke="white" strokeOpacity="0.198345" strokeWidth="5" />
    </svg>
  );
};
const CustomizedCursor = props => {
  const { points, width} = props;
  const { x, y } = points[0];
  return <Rectangle fill="#000000" opacity="0.198345" x={x} y={y} width={width} height={263} />;
};


function AverageSessions(props) {
  return (
    <div className='AverageSessions'>
      <LineChart width={260} height={263} data={props.data}
        margin={{  top:0,right: 0, left: 5, bottom: 5 }}>
        <XAxis dataKey="day" stroke="white" axisLine={false} tickLine={false}/>
        <YAxis hide={true} />
        <Tooltip content={<CustomTooltip />} cursor={<CustomizedCursor/>}/>
        <Legend align='left' verticalAlign='top' iconSize={0} wrapperStyle={{
        marginLeft: "29px", marginTop: "44px"  , paddingBottom: "59px", width: "157px" , fontSize: "15px" }}/>
        <Line name ='Durée moyenne des sessions' type="monotone" dataKey="sessionLength" stroke="#FFFFFF" dot={false} activeDot={<CustomizedActiveDot />} marginTop={80}/>
      </LineChart>
    </div>
  )
}
export default AverageSessions 