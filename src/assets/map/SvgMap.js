import React from 'react';
import svg from './svgMap.svg'
const SvgMap = () => {
  return (
    <div>
      <img src={svg} style={{ width: '100%', height: 'auto' }}/>
    </div>
  );
};

export default SvgMap;