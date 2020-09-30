import React from 'react';
import styles from'./Form.module.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Radio from '../Input/Radio';
import AppContext from '../../context';

const types = {
    twitter: 'twitter',
    article: 'article',
    note: 'note'
}

const description = {
    twitter: 'Twitter accounts',
    article: 'Article',
    note: 'Note',
}

class Form extends React.Component {

    state = {
        activeOption: types.twitter,
        title: '',
        link: '',
        image: '',
        description: '',
    }

    handleRadioButtonChange = (type) => {
        this.setState({
            activeOption: type,
        })
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {
        return (
            <AppContext.Consumer>
                {(context) => (
                    <div className={styles.wrapper}>
                    <h2>Add new {description[this.state.activeOption]}</h2>
                    <form autoComplete="off" className={styles.form} onSubmit={(e) => context.addItem(e, this.state)}>
                        <div>
                            <Radio 
                                name={types.twitter}
                                checked={this.state.activeOption === types.twitter}
                                onChange={() => this.handleRadioButtonChange(types.twitter)} 
                            >Twitter</Radio>
                            <Radio 
                                name={types.article} 
                                checked={this.state.activeOption === types.article}
                                onChange={() => this.handleRadioButtonChange(types.article)} 
                            >Article</Radio>
                            <Radio
                                name={types.note} 
                                checked={this.state.activeOption === types.note}
                                onChange={() => this.handleRadioButtonChange(types.note)} 
                            >Note</Radio>
                        </div>
                        <Input
                            name="title"
                            label={this.state.activeOption === types.twitter ? "Twitter name" : "Title"}
                            maxLength={100}
                            onChange={this.handleInputChange}
                            value={this.state.title}
                        />
                        {
                        this.state.activeOption !== types.note &&
                        <Input
                            name="link"
                            label={this.state.activeOption === types.twitter ? "Twitter link" : "Link"}
                            onChange={this.handleInputChange}
                            value={this.state.link}
                        />
                        }
                        {
                            this.state.activeOption === types.twitter &&
                            <Input
                                name="image"
                                label="Image"
                                onChange={this.handleInputChange}
                                value={this.state.image}
                            />
                        }
                        <Input
                            tag="textarea"
                            name="description"
                            label="Description"
                            onChange={this.handleInputChange}
                            value={this.state.description}
                        />
                        <Button type="submit">Add</Button>
                    </form>
                </div>
        )}
        </AppContext.Consumer>
        )
    }
}

export default Form;