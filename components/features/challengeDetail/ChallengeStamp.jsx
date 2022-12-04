import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../../app/module/modalSlice';
import styled from 'styled-components';
import Card from '../../common/Card';
import Stamp from '../../common/Stamp';

const ChallengeStamp = (props) => {
  const dispatch = useDispatch();

  const { challenges, message, errorMessage } = useSelector(
    (state) => state.challenge,
  );

  const loopStamps = (num) => {
    let stamps = [];
    for (let i = 0; i < props.content; i++) {
      stamps.push(
        <Stamp unchecked day="" onClick={() => dispatch(openModal(props))} />,
      );
    }
  };

  loopStamps('5');

  const [stampState, setStampState] = useState();

  return (
    <Card>
      <StampTitle>✔️ 챌린지 진척도</StampTitle>
      <StampArea>
        <Stamp unchecked day="01" onClick={() => dispatch(openModal(props))} />
        <Stamp success day="02" />
        <Stamp pass day="03" />
        <Stamp fail day="04" />
        <Stamp unchecked day="05" />
        <Stamp unchecked day="06" />
        <Stamp unchecked day="07" />
        <Stamp unchecked day="08" />
        <Stamp unchecked day="09" />
        <Stamp unchecked day="10" />
        <Stamp unchecked day="12" />
        <Stamp unchecked day="13" />
        <Stamp unchecked day="14" />
      </StampArea>
    </Card>
  );
};

export default ChallengeStamp;

const StampTitle = styled.p`
  width: 100%;
  margin: 1rem;
  text-align: left;
  font-family: ${({ theme }) => theme.fonts.family.primary};
`;

const StampArea = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem auto;
`;
