import React from 'react';
import './Performance.css'
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

function Performance(props) {
  return (
    <div className='Performance'>
    <RadarChart outerRadius={90} width={730} height={250} data={props.data}>
      <PolarGrid />
      <PolarAngleAxis dataKey={props.kind} />
      <PolarRadiusAxis angle={30} domain={[0, 150]} />
      <Radar name={props.kind} dataKey={props.value} stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      <Legend />
    </RadarChart>
    </div>

  );
}
export default Performance
