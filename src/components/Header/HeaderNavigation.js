import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './HeaderNavigation.module.scss';

const HeaderNavigation = () => (
    <nav>
        <ul>
            <li className={styles.Item}><NavLink exact className={styles.ItemLink} activeClassName={styles.ItemLinkActive} to="/">Twitters</NavLink></li>
            <li className={styles.Item}><NavLink className={styles.ItemLink} activeClassName={styles.ItemLinkActive} to="/articles">Articles</NavLink></li>
            <li className={styles.Item}><NavLink className={styles.ItemLink} activeClassName={styles.ItemLinkActive} to="/notes">Notes</NavLink></li>
        </ul>
    </nav>
);

export default HeaderNavigation;