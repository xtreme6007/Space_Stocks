import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from '../components/Title';
// Generate Sales Data
function createData(date, amount) {
  return { date, amount };
}
export default function Chart(props) {
  const theme = useTheme();
  const data = [
    createData('2020/12/03', 10.10),
    createData('2020/12/02', 6.86),
    createData('2020/12/01', 6.86),
    createData('2020/11/30', 6.87),
    createData('2020/11/29', 7.19),
    createData('2020/11/26', 7.50),
  ];
  return (
    <React.Fragment>
      <Title>{props.title}</Title>
      <ResponsiveContainer>
        <LineChart
          data={props.data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="date" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Stock Price ($)
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
