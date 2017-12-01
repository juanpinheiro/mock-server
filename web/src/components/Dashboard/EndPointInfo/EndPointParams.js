import React from 'react';
import { TextField, SelectField, MenuItem } from 'material-ui';

const styles = {
    container: {
        display: 'flex',
    },
    method: {
        flexBasis: '10%',
        width: '100%',
    },
    route: {
        flexBasis: '85%',
    },
    timeout: {
        flexBasis: '5%',
    },
    inputTimeout: {
        textAlign: 'center',
    },
};

const EndPointParams = ({ method, route, timeout, onChangeMethod, onChangeRoute, onChangeTimeout }) => (
    <div style={ styles.container }>
        <div style={ styles.method }>
            <SelectField
                fullWidth={ true }
                autoWidth={ true }
                underlineShow={ false }
                maxHeight={ 1000 }
                value={ method }
                onChange={ (event, index, value) => onChangeMethod(value) }
            >
                <MenuItem value='GET' primaryText='GET' />
                <MenuItem value='POST' primaryText='POST' />
                <MenuItem value='PUT' primaryText='PUT' />
                <MenuItem value='PATCH' primaryText='PATCH' />
                <MenuItem value='DELETE' primaryText='DELETE' />
                <MenuItem value='COPY' primaryText='COPY' />
                <MenuItem value='HEAD' primaryText='HEAD' />
                <MenuItem value='OPTIONS' primaryText='OPTIONS' />
                <MenuItem value='LINK' primaryText='LINK' />
                <MenuItem value='UNLIK' primaryText='UNLIK' />
                <MenuItem value='PURGE' primaryText='PURGE' />
                <MenuItem value='LOCK' primaryText='LOCK' />
                <MenuItem value='UNLOCK' primaryText='UNLOCK' />
                <MenuItem value='PROPFIND' primaryText='PROPFIND' />
                <MenuItem value='VIEW' primaryText='VIEW' />
            </SelectField>
        </div>
        <div style={ styles.route }>
            <TextField
                fullWidth={ true }
                name='inputRoute'
                placeholder='New Mock Name'
                value={ route }
                onChange={ event => onChangeRoute(event.target.value) }
            />
        </div>
        <div style={ styles.timeout }>
            <TextField
                fullWidth={ true }
                name='inputTimeout'
                underlineShow={ false }
                inputStyle={ styles.inputTimeout }
                value={ timeout }
                onChange={ event => onChangeTimeout(Number(event.target.value)) }
                type='number'
            />
        </div>
    </div>
);

export default EndPointParams;
