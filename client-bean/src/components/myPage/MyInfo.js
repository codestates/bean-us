import React, { useState } from 'react';
import styled from 'styled-components';
import { BiUser } from 'react-icons/bi';
import { emailValidation } from '../../utils/validation';
import { editMyEmail } from '../../network/myPage/myPage';
import EditPassword from './EditPassword';
import WithdrawUser from './WithdrawUser';
import LoadingPage from '../../pages/LoadingPage';

const InfoWrapper = styled.section`
  margin-top: 50px;
  display: flex;
  width: 1000px;
`;

// const CoffeeImg = styled.img`
//   width: 19rem;
//   height: 19rem;
//   margin-right: 100px;
//   border-radius: 50%;
// `;

const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 23rem;
  height: 18rem;
  margin-right: 100px;
  font-size: 250px;
`;

const InfoBox = styled.div`
  height: 30rem;
`;

const InfoTitle = styled.p`
  width: 5.5rem;
  font-size: 25px;
  font-weight: 600;
  font-family: 'Cafe24SsurroundAir';
  border-right: 1px solid rgba(0, 0, 0, 0.4);
  margin-bottom: 20px;
`;

const InfoContent = styled.p`
  font-size: 25px;
  font-weight: 600;
  font-family: 'NotoSans';
  margin-left: 20px;
  margin-bottom: 20px;
`;

const InfoLine = styled.div`
  display: flex;
  align-items: flex-end;
`;

const EditButton = styled.button`
  margin-left: 30px;
  width: ${({ editEmail }) => (editEmail ? '70px' : '50px')};
  height: ${({ editEmail }) => (editEmail ? '35px' : '30px')};
  background-color: rgba(0, 0, 0, 0);
  border: none;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
  font-size: 17px;
  font-weight: 500;
  font-family: 'BMHANNAAir';
  &:hover {
    cursor: pointer;
    font-weight: 700;
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.5);
  }
  &:active {
    box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.5);
  }
`;

const EditInput = styled.input`
  font-size: 25px;
  font-weight: 700;
  font-family: 'NotoSans';
  margin-left: 20px;
  margin-bottom: 20px;
  border: none;
  border-radius: 10px;
  height: 35px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.6);
  padding: 2px 0 2px 10px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.6);
  &:focus {
    outline: none;
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.6);
  }
`;

const ErrorMessage = styled.p`
  margin-top: 0;
  margin-left: 110px;
  color: #95673d;
`;

const ButtonWrapper = styled.div`
  margin-top: 40px;
  width: 390px;
`;

const Button = styled.button`
  width: 170px;
  height: 50px;
  font-size: 20px;
  font-family: 'BMHANNAAir';
  margin-left: ${({ margin }) => (margin ? '30px' : 'none')};
  background: rgba(255, 255, 255, 0.6);
  border: none;
  border-radius: 10px;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
  transition: 0.2s;
  font-weight: 500;
  &:hover {
    cursor: pointer;
    color: #fff;
    font-weight: 700;
    background: rgba(160, 72, 6);
  }
  &:active {
    box-shadow: inset 2px 2px 3px rgba(0, 0, 0, 0.3);
  }
`;

export default function MyInfo({ userId, email, social, editEmailReq, loginHandler, isLoading }) {
  const [editEmail, setEditEmail] = useState(false);
  const [newEmail, setNewEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState('');

  const [editPassword, setEditPassword] = useState(false);
  const [withdraw, setWithdraw] = useState(false);

  const editEmailClickHandler = () => {
    setEditEmail(true);
  };

  const editEmailHandler = (e) => {
    if (e.target.name === 'complete' && isValidEmail === '사용할 수 있는 이메일 형식입니다') {
      editMyEmail(userId, newEmail).then((res) => editEmailReq(newEmail));
    }
    setIsValidEmail('');
    setEditEmail(false);
  };

  const validTest = (e) => {
    setNewEmail(e.target.value);
    if (!emailValidation(e.target.value)) {
      setIsValidEmail('사용할 수 없는 이메일 형식입니다');
    } else {
      setIsValidEmail('사용할 수 있는 이메일 형식입니다');
    }
  };

  const editPasswordClickHandler = () => {
    setEditPassword(!editPassword);
  };

  const withdrawCilckHandler = () => {
    setWithdraw(!withdraw);
  };

  return (
    <>
      {isLoading ? (
        <LoadingPage>정보를 가져오는 중이에요...</LoadingPage>
      ) : (
        <InfoWrapper>
          <IconWrapper>
            <BiUser />
          </IconWrapper>
          <InfoBox>
            <InfoLine>
              <InfoTitle title='title'>아이디</InfoTitle>
              <InfoContent>{userId}</InfoContent>
            </InfoLine>
            <InfoLine>
              <InfoTitle title='title'>이메일</InfoTitle>
              {editEmail ? (
                <EditInput defaultValue={email} onChange={validTest}></EditInput>
              ) : (
                <InfoContent>{email}</InfoContent>
              )}
              {social === 'beanus' ? (
                editEmail ? (
                  <>
                    <EditButton name='complete' editEmail={editEmail} onClick={editEmailHandler}>
                      수정완료
                    </EditButton>
                    <EditButton name='cancle' editEmail={editEmail} onClick={editEmailHandler}>
                      수정취소
                    </EditButton>
                  </>
                ) : (
                  <EditButton onClick={editEmailClickHandler}>수정</EditButton>
                )
              ) : null}
            </InfoLine>
            <ErrorMessage>{isValidEmail}</ErrorMessage>
            <ButtonWrapper>
              {social === 'beanus' ? (
                <>
                  <Button onClick={editPasswordClickHandler}>비밀번호 수정</Button>
                  <Button onClick={withdrawCilckHandler} margin='margin'>
                    회원 탈퇴
                  </Button>
                </>
              ) : (
                <Button onClick={withdrawCilckHandler} oauth='oauth'>
                  회원 탈퇴
                </Button>
              )}
            </ButtonWrapper>
            {editPassword ? (
              <EditPassword
                userId={userId}
                editPasswordClickHandler={editPasswordClickHandler}
              ></EditPassword>
            ) : null}
            {withdraw ? (
              <WithdrawUser
                userId={userId}
                withdrawCilckHandler={withdrawCilckHandler}
                loginHandler={loginHandler}
                social={social}
              ></WithdrawUser>
            ) : null}
          </InfoBox>
        </InfoWrapper>
      )}
    </>
  );
}
