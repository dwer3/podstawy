import React from 'react';
import style from './ListWrapper.module.scss';
import ListItem from './ListItem';

const ListWrapper = ({items}) => (
    <>
    {items.length ? (
    <ul className={style.wrapper}>
    {items.map(item => (
        <ListItem key={item.title} {...item}/>
    ))}
    </ul>
    ) : (
        <h2 className={style.noItems}>Brak elementów</h2>
    )}
    </>
);

export default ListWrapper;