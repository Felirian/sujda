import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle, {WarningContainer, WarningH, WarningWr} from './styles/global';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import SvgSelector from './components/Shared/SvgSelector';

const Root = () => {
  const [deviceState, setDeviceState] = useState({isDesktop: false, isLandscape: false});

  useEffect(() => {
    const updateDeviceState = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      const isIPad = /iPad|Macintosh/.test(navigator.userAgent) && 'ontouchend' in document;

      setDeviceState({
        isDesktop:
          !/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) &&
          !isIPad, // Исключаем iPad из десктопов
        isLandscape: width > height,
      });
    };

    updateDeviceState();

    window.addEventListener('resize', updateDeviceState);
    window.addEventListener('orientationchange', updateDeviceState);
    return () => {
      window.removeEventListener('resize', updateDeviceState);
      window.removeEventListener('orientationchange', updateDeviceState);
    };
  }, []);

  const {isDesktop, isLandscape} = deviceState;

  return isDesktop || isLandscape ? (
    <WarningWr>
      <WarningContainer>
        <SvgSelector svg={isDesktop ? 'warningDesktop' : 'warningMobile'}/>

        {isDesktop ? (
          <WarningH>откройте <br/> приложение <br/> на телефоне</WarningH>
        ) : (
          <WarningH>переверните <br/> устройство <br/> вертикально</WarningH>
        )}
      </WarningContainer>
    </WarningWr>
  ) : (
    <>
      <GlobalStyle/>
      {/*<button onClick={() => openFullscreen()}>fff</button>*/}
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root/>);
