import React from 'react';
import styles from './Modal.module.scss';
import From from '../Form/Form';
import Button from '../Button/Button';

const Modal = ({closeModalFn}) => (
    <div className={styles.wrapper}>
        <Button onClick={closeModalFn}>X</Button>
        <From />
    </div>
);

export default Modal;