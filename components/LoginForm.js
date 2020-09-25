import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useDispatch } from 'react-redux';

import theme from '../style/theme';
import useInput from '../hooks/useInput';
import { loginDyn } from '../reducers/user';

const Form = styled.form`
    width:70%;
    height:400px;
    max-width:400px;
    background-color: #fff;

    display:flex;
    flex-direction: column;
    align-items: center;
`;


const Image = styled.img`
    width:180px;
    margin:15px 0 25px;
`;

const InputContainer = styled.div`
    width: 60%;
    height: 35px;
    border: 1px solid ${theme.borderColor};
    border-radius:3px;
    background-color: ${theme.backColorLight};
    margin:3px;
`;

const Input = styled.input`
    width:90%;
    height:100%;
    background-color: ${theme.backColorLight};
    margin-left:3px;
    font-size: 0.7rem;

    &:focus .input-container {
        border: 1px solid red;
    }
`

const ButtonContainer = styled.div`
    width:60%;
    height:28px;
    margin: 30px 0 20px;

    display:flex;
    justify-content: space-between;
`;

const Button = styled.button`
    width: 47%;
    height: 100%;
    border-radius:3px;
    color:#fff;
`;

const Partition = styled.div`
    width:60%;
    margin-bottom: 30px;

    display:flex;
    justify-content:space-between;
    align-items:center;
`;

const HorizontalLine = styled.div`
    width:37%;
    height:1px;
    background-color:${theme.borderColor};
`;

const FakeLogin = styled.button`
    font-size:0.8rem;
    color:${theme.fontSkyBlue};
`;

const LoginForm = () => {
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [btnActivation, setBtnActivation] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if(id != '' && password.length > 5) {
            setBtnActivation(true);
        } else {
            setBtnActivation(false);
        }
    }, [id, password]);

    const fakeLogin =  () => {
        dispatch(loginDyn('Guest', 'Guest'));
    };

    return (
        <Form onSubmit={e => { e.preventDefault(); }}>
            <Image src="/img/insta-logo.png" alt="insta" />
            <InputContainer className="input-container">
                <Input type="text" value={id} placeholder="아이디" onChange={onChangeId} />
            </InputContainer>
            <InputContainer className="input-container">
                <Input type="password" value={password} placeholder="비밀번호" onChange={onChangePassword} />
            </InputContainer>
            <ButtonContainer>
                <Button className="btn-hover" style={{backgroundColor: btnActivation?theme.btnColor:theme.unactivatedBtn}}>
                    Login
                </Button>
                <Button className="btn-hover" style={{backgroundColor: theme.btnColor}}>
                    <Link href="/signup"><a>Sign Up</a></Link>
                </Button>
            </ButtonContainer>
            <Partition>
                <HorizontalLine />
                <span style={{fontSize: '0.9rem', color: theme.fontGray}}>또는</span>
                <HorizontalLine />
            </Partition>
            <FakeLogin className="btn-hover" onClick={fakeLogin}>가계정으로 로그인하고 둘러보기</FakeLogin>
        </Form>
    );
};

export default LoginForm;