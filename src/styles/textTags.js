import styled, { css } from 'styled-components';
import { COLORS } from './variables';

export const H1Style = css`
  color: ${COLORS.yellow};
  text-align: center;
  font-family: 'Roboto Slab';
  font-size: 8.97vw;
  font-style: normal;
  font-weight: 400;
  line-height: 116.045%;
`;

export const H2Style = css`
  color: ${COLORS.yellow};
  text-align: center;
  font-family: 'Roboto Slab';
  font-size: 7.18vw;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
`;

export const H3Style = css`
  color: ${COLORS.lightSand};
  font-family: 'Roboto Slab';
  font-size: 5.13vw;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
`;

export const P1Style = css`
  color: ${COLORS.white};
  text-align: center;
  font-family: Arsenal;
  font-size: 5.13vw;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const P2Style = css`
  color: ${COLORS.white};
  font-family: Arsenal;
  font-size: 4.62vw;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const P3Style = css`
  color: ${COLORS.white};
  text-align: center;
  font-family: Arsenal;
  font-size: 5.13vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const P5Style = css`
  color: ${COLORS.white};
  font-family: 'Roboto Slab';
  font-size: 4.1vw;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
`;

export const ButtonTextStyle = css`
  color: ${COLORS.grey};
  font-family: 'Roboto Slab';
  font-size: 5.13vw;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
`;

export const H1 = styled.h1`
  ${H1Style};
`;

export const H2 = styled.h2`
  ${H2Style};
`;

export const H3 = styled.h2`
  ${H3Style};
`;

export const P1 = styled.p`
  ${P1Style};
`;

export const P2 = styled.p`
  ${P2Style};
`;

export const P3 = styled.p`
  ${P3Style};
`;

export const P5 = styled.p`
  ${P5Style};
`;

export const Button = styled.button`
  ${ButtonTextStyle};
  text-align: center;
  padding: 1.92vw 0;
  transition: 0.2s;
`;
