import React from 'react';
import { Card, CardHeader, CardText, TextField, Toggle } from 'material-ui';

const styles = {
    card: {
        margin: 5,
    },
    textArea: {
        width: '100%',
        padding: '12px 20px',
        margin: '8px 0',
        display: 'inline-block',
        borderRadius: 4,
        boxSizing: 'border-box',
    },
    inputNormal: {
        border: '1px solid #ccc',
    },
    inputError: {
        border: '1px solid #a94442',
    },
    cardHeader: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
    },
    cardHeaderToggle: {
        flexBasis: '20%',
    },
    cardHeaderResponse: {
        flexBasis: '80%',
        paddingLeft: 10,
    },
};

const Response = ({ data, use, defaultJson, onToggle, onChangeCode, onChangeData }) => (
    <Card style={ styles.card }>
        <CardHeader
            title={
                <div style={ styles.cardHeader }>
                    <div style={ styles.cardHeaderToggle }>
                        <Toggle
                            toggled={ Number(use) === Number(data.code) }
                            onToggle={ () => onToggle(Number(data.code)) }
                        />
                    </div>
                    <div style={ styles.cardHeaderResponse }>
                        <TextField
                            underlineShow={ false }
                            name='responseName'
                            defaultValue={ data.code }
                            placeholder='New Response'
                            onChange={ onChangeCode }
                        />
                    </div>
                </div>
            }
            actAsExpander={ false }
            showExpandableButton={ true }
        />
        <CardText expandable={ true }>
            <TextField
                name='ResponseJson'
                style={ data.isJsonWrong ? {...styles.textArea, ...styles.inputError} : {...styles.textArea, ...styles.inputNormal} }
                multiLine={ true }
                defaultValue={ defaultJson }
                rows={ 20 }
                underlineShow={ false }
                onChange={ onChangeData }
            />
        </CardText>
    </Card>
);

export default Response;
