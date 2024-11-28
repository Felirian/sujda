import React, {useState} from 'react';

import SvgSelector from '../../Shared/SvgSelector';
import {COLORS} from '../../../styles/variables';
import {MAP_POINTS, MAP_POINTS_LARGE} from '../../../features/data';
import {styled} from 'styled-components';
import {KeepScale, useTransformEffect} from 'react-zoom-pan-pinch';
import svg from '../../../assets/map/Vector2.svg';
import {Clustering, POINTS_DATA} from "../../../features/map";

const ZoomableMap = ({handleDotClick, zoomToElement}) => {
  const [currentScale, setCurrentScale] = useState(5);

  // const { zoomIn } = useControls();

  useTransformEffect(({state}) => {
    setCurrentScale(5 / state.scale);
  });

  const clickToZoom = () => {
    zoomToElement('group1', 6);
  };

  const array = Array.from({length: (100 / currentScale) + 1});
  console.log(currentScale);
  // useTransformInit(({ _, instance }) => {
  //   if (instance.mounted) {
  //     setTimeout(() => {
  //       zoomIn(0.5);
  //     }, 150);
  //   }
  // });

  return (
    <ZoomableMapWr>
      <img src={svg} style={{width: 'auto', height: 'auto'}} alt={'суйда'}/>
      {/*{array.map((item, index) => (*/}
      {/*  <LineVer key={`${index}_line`} style={{left: `${currentScale * index}%`}}/>*/}
      {/*))}*/}
      {/*{array.map((item, index) => (*/}
      {/*  <LineHor key={`${index}_line-hor`} style={{top: `${currentScale * index}%`}}/>*/}
      {/*))}*/}
      {Clustering(Math.floor(currentScale) === 0 ? 0.1 : Math.floor(currentScale)).map((point, index) => (
        point.count ? (
          <>
            <Dot
              key={`${index}-point`}
              style={{top: `${point.coordinates[0]}%`, left: `${point.coordinates[1]}%`}}
              id='group1'
              //onClick={clickToZoom}
              $isvisible={true}
            >
                <CirclePoint>
                  <div >{point.count}</div>
                </CirclePoint>
            </Dot>
          </>
        ) : (
          <>
            <Dot
              key={`${index}-point`}
              style={{top: `${point.coordinates[0]}%`, left: `${point.coordinates[1]}%`}}
              id='group1'
              //onClick={clickToZoom}
              $isvisible={true}
            >
              <SvgSelector svg='mapPoint'/>
            </Dot>
          </>
        )
      ))}


      {/*<Dot*/}
      {/*  style={{ top: `46%`, left: `31%` }}*/}
      {/*  id='group1'*/}
      {/*  onClick={clickToZoom}*/}
      {/*  $isvisible={currentScale <= 3}*/}
      {/*>*/}
      {/*  <CirclePoint>*/}
      {/*    <div />*/}
      {/*  </CirclePoint>*/}
      {/*</Dot>*/}

      {/*{MAP_POINTS_LARGE.map((point, index) => (*/}
      {/*  <Dot*/}
      {/*    key={index}*/}
      {/*    onClick={() => handleDotClick(point)}*/}
      {/*    style={{ top: `${point.top}%`, left: `${point.left}%` }}*/}
      {/*    $isvisible={currentScale <= 3}*/}
      {/*  >*/}
      {/*    <SvgSelector svg='mapPoint' />*/}
      {/*  </Dot>*/}
      {/*))}*/}
      {/*{MAP_POINTS.map((point, index) => (*/}
      {/*  <Dot*/}
      {/*    key={index}*/}
      {/*    onClick={() => handleDotClick(point)}*/}
      {/*    style={{ top: `${point.top}%`, left: `${point.left}%` }}*/}
      {/*    $isvisible={currentScale > 3}*/}
      {/*  >*/}
      {/*    <SvgSelector svg='mapPoint' />*/}
      {/*  </Dot>*/}
      {/*))}*/}
    </ZoomableMapWr>
  );
};

const ZoomableMapWr = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const LineVer = styled.div`
  position: absolute;
  width: 1px;
  height: 100%;
  top: 0;
  background-color: red;
`;
const LineHor = styled.div`
  position: absolute;
  width: 100%;
  height: 1px;
  left: 0;
  background-color: red;
`;

const Dot = styled(KeepScale)`
  width: 7.44vw;
  height: 10.77vw;

  position: absolute;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
    transform: translateY(-40%);
  }

  transition: opacity 0.2s;
  opacity: ${({$isvisible}) => ($isvisible ? '1' : '0')};
  pointer-events: ${({$isvisible}) => ($isvisible ? 'auto' : 'none')};
`;

const CirclePoint = styled.div`
  width: 11vw;
  height: 11vw;
  border-radius: 50%;
  border: 0.6vw solid ${COLORS.white};
  background-color: ${COLORS.pointRed};
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 7vw;
    height: 7vw;
    border-radius: 50%;
    background-color: ${COLORS.white};
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
  }
`;
export default ZoomableMap;
