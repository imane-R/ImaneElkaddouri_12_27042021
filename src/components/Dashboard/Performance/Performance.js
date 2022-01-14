import React from 'react';
import './Performance.css'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import PropTypes from 'prop-types';

/**
 * create a RadarChart with performance data
 * @param props
 */ 
function Performance({data}) {
  return (
    <div className='Performance'>
      <RadarChart outerRadius={70} width={258} height={263} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" stroke='#FFFFFF' tickLine={false} fontSize={14}   />
        <PolarRadiusAxis  axisLine={false} tick={false} />
        <Radar  dataKey="value"  fill="#FF0101" fillOpacity={0.6} />
      </RadarChart>
    </div>

  );
}
Performance.propTypes = {
  data: PropTypes.array,
}
export default Performance
