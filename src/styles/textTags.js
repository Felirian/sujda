import styled, { css } from 'styled-components';

export const H1Style = css`
  text-align: center;
  font-family: 'Singel';
  font-size: 8.97vw;
  font-style: normal;
  font-weight: 600;
  line-height: 106%;
  color: inherit;
`;

export const H2Style = css`
  font-family: 'Singel';
  font-size: 6.15vw;
  font-style: normal;
  font-weight: 600;
  line-height: 102%;
  text-transform: uppercase;
  color: inherit;
`;

export const H3Style = css`
  font-family: 'Forum';
  font-size: 4.62vw;
  font-style: normal;
  font-weight: 400;
  line-height: 102%;
  text-transform: uppercase;
  color: inherit;
`;

export const P1Style = css`
  text-align: center;
  font-family: 'Segoe UI';
  font-size: 5.13vw;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: inherit;
`;

export const P2Style = css`
  font-family: 'Segoe UI';
  font-size: 4.1vw;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  color: inherit;
`;

export const ButtonTextStyle = css`
  font-family: 'Singel';
  font-size: 6.92vw;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  color: inherit;
`;

export const H1 = styled.h1`
  ${H1Style};
`;

export const H2 = styled.h2`
  ${H2Style};
`;

export const H3 = styled.h3`
  ${H3Style};
`;

export const P1 = styled.p`
  ${P1Style};
`;

export const P2 = styled.p`
  ${P2Style};
`;

export const Button = styled.button`
  ${ButtonTextStyle};
  text-align: center;
  padding: 1.92vw 0;
  transition: 0.2s;
`;
