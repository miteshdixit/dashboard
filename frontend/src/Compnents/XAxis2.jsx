/* eslint-disable react/prop-types */

import { XAxis } from 'recharts';

const XAxis2 = ({ dataKey = 'defaultXKey', ...props }) => {
    return <XAxis dataKey={dataKey} {...props} />;
};

export default XAxis2;
