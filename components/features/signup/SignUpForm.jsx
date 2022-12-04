import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { ColumnWrapper } from '../../common/Wrapper';
import { InputLabel, StyledInput } from '../../common/Input';
import Button from '../../common/Button';
import ProfilePic from '../../common/ProfilePic';
import axios from '../../../../node_modules/axios/index';

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [data, setData] = useState('');

  const submitForm = (data) => {
    setData(JSON.stringify(data));
    console.log(data);

    axios
      .post('http://localhost:8080/auth/signup', data, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  const postFormData = (data) => {};

  return (
    <StyledForm onSubmit={handleSubmit(submitForm)}>
      <ColumnWrapper margin="0 auto 2.4rem">
        <InputLabel label="이메일" />
        <StyledInput {...register('id')} type="email" />
      </ColumnWrapper>
      <ColumnWrapper margin="0 auto 2.4rem">
        <InputLabel label="비밀번호" />
        <StyledInput {...register('pw')} type="password" />
      </ColumnWrapper>
      <ColumnWrapper margin="0 auto 2.4rem">
        <InputLabel label="비밀번호 확인" />
        <StyledInput {...register('pwCheck')} type="password" />
      </ColumnWrapper>
      <ColumnWrapper margin="0 auto 2.4rem">
        <InputLabel label="닉네임" />
        <StyledInput {...register('nickname')} type="text" />
      </ColumnWrapper>
      <ColumnWrapper margin="0 auto 2.4rem">
        <InputLabel label="프로필 사진 선택" />
        <RadioWrapper>
          <Radio
            {...register('image')}
            type="radio"
            value={parseInt('1')}
            id="pic1"
          />
          <ProfileLabel htmlFor="pic1">
            <ProfilePic picType="pic1" />
          </ProfileLabel>
          <Radio
            {...register('profilePic')}
            type="radio"
            value="pic2"
            id="pic2"
          />
          <ProfileLabel htmlFor="pic2">
            <ProfilePic picType="pic2" />
          </ProfileLabel>
          <Radio
            {...register('profilePic')}
            type="radio"
            value="pic3"
            id="pic3"
          />
          <ProfileLabel htmlFor="pic3">
            <ProfilePic picType="pic3" />
          </ProfileLabel>
          <Radio
            {...register('profilePic')}
            type="radio"
            value="pic4"
            id="pic4"
          />
          <ProfileLabel htmlFor="pic4">
            <ProfilePic picType="pic4" />
          </ProfileLabel>
          <Radio
            {...register('profilePic')}
            type="radio"
            value="pic5"
            id="pic5"
          />
          <ProfileLabel htmlFor="pic5">
            <ProfilePic picType="pic5" />
          </ProfileLabel>
          <Radio
            {...register('profilePic')}
            type="radio"
            value="pic6"
            id="pic6"
          />
          <ProfileLabel htmlFor="pic6">
            <ProfilePic picType="pic6" />
          </ProfileLabel>
        </RadioWrapper>
      </ColumnWrapper>
      <ColumnWrapper justifyContent="center" alignItems="center">
        <Button primary>회원가입</Button>
      </ColumnWrapper>
    </StyledForm>
  );
};

export default SignUpForm;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const RadioWrapper = styled.div`
  display: flex;
  justify-content: start;
  gap: 0.5rem;
  flex-wrap: wrap;
  width: 95%;
  margin: 0.6rem auto;
`;

const Radio = styled.input`
  appearance: none;

  &:checked + label {
    border: 3px solid ${({ theme }) => theme.colors.gr400};
    border-radius: 50%;
    cursor: pointer;
  }
`;

const ProfileLabel = styled.label`
  width: 50px;
  height: 50px;
  border: 3px solid transparent;
  border-radius: 50%;

  &:hover {
    border: 3px solid ${({ theme }) => theme.colors.gr300};
    border-radius: 50%;
    cursor: pointer;
  }
`;
