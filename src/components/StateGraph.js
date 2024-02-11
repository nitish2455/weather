import React from 'react';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryLabel } from 'victory';
import stateData from './Statedata.js';

const StateGraph = ({ stateId }) => {
  const state = stateData.find(state => state.id === stateId);

  if (!state) {
    return <div>State not found</div>;
  }

  // Example data for the Victory chart
  const chartData = [
    { x: 'City 1', y: 25 },
    { x: 'City 2', y: 26 },
    { x: 'City 3', y: 24 },
    { x: 'City 4', y: 27 },
    { x: 'City 5', y: 23 },
  ];

  return (
    <div className="p-4">
      <h2>{state.name}</h2>
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={20}
      >
        <VictoryLabel text="Temperature" x={225} y={30} textAnchor="middle" />
        <VictoryLine
          data={chartData}
          style={{
            data: { stroke: 'rgba(255, 0, 0, 0.5)', fill: 'rgba(255, 0, 0, 0.2)' },
            parent: { border: '1px solid #ccc' }
          }}
        />
      </VictoryChart>
    </div>
  );
};

export default StateGraph;
