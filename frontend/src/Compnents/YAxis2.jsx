/* eslint-disable react/prop-types */

import { YAxis } from 'recharts';

const YAxis2 = ({ dataKey = 'defaultYKey', ...props }) => {
    return <YAxis dataKey={dataKey} {...props} />;
};

export default YAxis2;
