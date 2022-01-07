import React from 'react';
import './Performance.css'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

function Performance(props) {
  return (
    <div className='Performance'>
      <RadarChart outerRadius={70} width={258} height={263} data={props.data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" stroke='#FFFFFF' tickLine={false} fontSize={14}   />
        <PolarRadiusAxis  axisLine={false} tick={false} />
        <Radar  dataKey="value"  fill="#FF0101" fillOpacity={0.6} />
      </RadarChart>
    </div>

  );
}
export default Performance
