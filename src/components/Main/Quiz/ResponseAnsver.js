import React from 'react';
import styled from 'styled-components';

const ResponseAnswer = ({ answer }) => {
  return (
    <Div>
      {answer ? 'Ответ верный' : 'Ответ неверный'}
    </Div>
  );
};

export default ResponseAnswer;

const Div = styled.div`

  background-color: ${({ answer }) => (answer ? '#6C2929' : '#333E2C')};
 
`;
