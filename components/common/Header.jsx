import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from '../../../node_modules/react-router-dom/dist/index';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';

import { FriendIcon } from './Icon';
import { getUserDetails } from '../../app/module/userSlice';

// 친구 요청 있을 시, 아이콘 바꾸기

const Header = () => {
  const { userInfo, userToken } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userToken) {
      dispatch(getUserDetails());
    }
  }, [userToken, dispatch]);

  const [hasFriendRequest, setHasFriendRequest] = useState(false);

  return (
    <>
      <HeaderContainer>
        <Link to="/">
          <h1>
            <Logo alt="엔챌" />
          </h1>
        </Link>
        <HeaderIcons>
          {/* <Link to="/create-challenge">
            <Add style={{ marginRight: 1 + 'rem' }} />
          </Link> */}
          <Link to="/friends-list">
            <FriendIcon size={24} />
          </Link>
        </HeaderIcons>
      </HeaderContainer>
      <Spacer />
    </>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;

  min-width: 360px;
  max-width: 480px;
  height: 8rem;
  padding: 2.4rem 1.6rem;
  margin-bottom: 1.6rem;
  z-index: 100;

  background-color: #fffbf2;

  @media screen and (max-width: 480px) {
    width: 100%;
  }

  @media screen and (min-width: 480px) {
    width: 100%;
  }
`;

const HeaderIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-right: 1rem;
`;

const Spacer = styled.div`
  height: 8rem;
`;
