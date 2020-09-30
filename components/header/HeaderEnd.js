import React, { memo, useCallback, useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHeart, faUserCircle } from '@fortawesome/free-solid-svg-icons';

import theme from '../../style/theme';
import LoginForm from '../LoginForm';
import PopupLayout from '../PopupLayout';
import { logout } from '../../reducers/user';

const EndContainer = styled.div`
    width:250px;
    height:70%;
    display:flex;
    justify-content:flex-end;
    align-items:center;
`;

const LoginBtn = styled.button`
    width:80px;
    height:30px;
    border: 1px solid ${theme.borderColorDark};
    margin-left: 5px;
    color: ${theme.borderColorDark};
`;

const Icon = styled.button`
    font-size:1.3rem;
    margin:0 7px;
    position:relative;
`;

const DropMenu = styled.ul`
    width:220px;

    position:absolute;
    top: 30px;
    right:-15px;

    background-color:#fff;
    border-radius:5px;
    box-shadow:0 0 5px 1px rgba(0, 0, 0, 0.0975);

    display:flex;
    flex-direction:column;
    justify-content:space-between;

    &.notification {
        min-height:60px;
        font-size:0.8rem;
        justify-content:center;
    }

    &.user-menu {
        height:130px;
    }
`;

const Menu = styled.li`
    width:100%;
    padding:0 10px;

    color: ${theme.fontDarkGray};
    font-size:0.85rem;
    
    display:flex;
    align-items:center;

    &.user-menu-li {
        height: 32%;
    }

    &:hover {
        background-color:${theme.basicBackColor};
    }
`;

// const MenuPointer = styled.div`
//     width:14px;
//     height:14px;

//     position:absolute;
//     top: -7px;
//     right:20px;

//     transform: rotate(45deg);
//     background-color:#fff;
//     box-shadow:0 0 5px 1px rgba(0, 0, 0, 0.0975);
// `;

const HeaderEnd = () => {
    const { isLoggedIn } = useSelector(state => state.user);
    const [loginFormOn, setLoginFormOn] = useState(false);
    const [userMenu, setUserMenu] = useState(false);
    const [notification, setNotification] = useState(false);
    const userIconRef = useRef(null);
    const notiIconRef = useRef(null);
    const dispatch = useDispatch();

    const openPopup = useCallback(() => {
        setLoginFormOn(true);
    }, []);

    const closePopup = useCallback(() => {
        setLoginFormOn(false);
    }, []);

    const toggleUserMenu = useCallback(() => {
        if(userMenu) {
            setUserMenu(false);
        } else {
            setUserMenu(true);
        }
    }, [userMenu]);

    const toggleNotification = useCallback(() => {
        if(notification) {
            setNotification(false);
        } else {
            setNotification(true);
        }
    }, [notification]);

    const logoutFunc = useCallback(() => {
        dispatch(logout);
    }, []);

    const genHandler = useCallback((ref, stateHandler) => {
        return (e) => {
            if(ref.current && !ref.current.contains(e.target)){
                stateHandler(false);
            }
        }
    }, []);

    useEffect(() => {
        if(!isLoggedIn) {
            setLoginFormOn(false);
        }
    }, [isLoggedIn]);

    useEffect(() => {
        const handler = genHandler(userIconRef, setUserMenu);
        document.addEventListener('click', handler);

        return () => {
            document.removeEventListener('click', handler);
        };
    }, [userIconRef]);

    useEffect(() => {
        const handler = genHandler(notiIconRef, setNotification);
        document.addEventListener('click', handler);

        return () => {
            document.removeEventListener('click', handler);
        };
    }, [notiIconRef]);

    ////////
    return (
        <EndContainer>
            {isLoggedIn ?
            <>
                <Icon className="btn-hover">
                    <Link href="/">
                        <a><FontAwesomeIcon icon={faHome} /></a>
                    </Link>
                </Icon>
                <Icon className="btn-hover" onClick={toggleNotification} ref={notiIconRef}>
                    <FontAwesomeIcon icon={faHeart} />
                    {notification &&
                        <DropMenu className="notification" onClick={(e) => { e.stopPropagation(); }}>
                            서비스 준비중
                        </DropMenu>}
                </Icon>
                <Icon className="btn-hover" onClick={toggleUserMenu} ref={userIconRef}>
                    <FontAwesomeIcon icon={faUserCircle} />
                    {userMenu && 
                        <DropMenu className="user-menu" onClick={(e) => { e.stopPropagation(); }}>
                            {/* <MenuPointer /> */}
                            <Menu className="user-menu-li">프로필</Menu>
                            <Menu className="user-menu-li">업로드</Menu>
                            <Menu className="user-menu-li" onClick={logoutFunc}>로그아웃</Menu>
                        </DropMenu>}
                </Icon>
            </>
            : <>
                <LoginBtn className="btn-hover" onClick={openPopup}>로그인</LoginBtn>
                <PopupLayout disp={loginFormOn} closeCallback={closePopup}>
                    <LoginForm />
                </PopupLayout>
              </>}
        </EndContainer>
    );
};

export default memo(HeaderEnd);