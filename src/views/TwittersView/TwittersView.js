import React from 'react';
import AppContext from '../../context';
import ListWrapper from '../../components/ListWrapper/ListWrapper';

const TwittersView = () => (
    <AppContext.Consumer>
        {(context) => (
            <ListWrapper items={context.twitter} />
        )}
    </AppContext.Consumer>
);

export default TwittersView;