import React from 'react';
import styles from './ListItem.module.scss'
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const ListItem = ({title, description, image, link}) => {

    const ImageTag = image ? 'img' : 'div';
return (
    <li className={styles.wrapper}>
        {image && <ImageTag src={image} className={image ? styles.image : styles.imageNone} alt={title}/>}
        <div>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            {link && <Button href={link}>Twitter</Button>}
        </div>
    </li>
)}

//Wymagana typy
ListItem.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string,
}

//Domyślne wartości
ListItem.defaultProps = {
    image: null,
    link: null,
}

export default ListItem;