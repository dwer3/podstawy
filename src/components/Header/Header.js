import React from 'react';
import styles from './Header.module.scss';
import HeaderNavigation from './HeaderNavigation';
import logoImage from '../../assets/images/logo.svg';
import Button from '../Button/Button';

const Header = ({openModalFn}) => (
    <div className={styles.wrapper}>
        <img src={logoImage} alt="FavNote"/>
        <HeaderNavigation />
        <Button onClick={openModalFn} secondary>New</Button>
    </div>
    
);

export default Header;