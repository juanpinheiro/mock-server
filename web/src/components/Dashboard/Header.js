import React from 'react';
import { connect } from 'react-redux';
import { postEndPoint } from 'actions';
import { AppBar, FlatButton } from 'material-ui';

const Header = ({ dispatch }) => (
    <AppBar
        title="Mock Server"
        showMenuIconButton={false}
        iconElementRight={<FlatButton label="Save" onClick={ () => dispatch(postEndPoint()) }/>}
    />
);

export default connect()(Header);
