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
        border: '1px solid #ccc',
        borderRadius: 4,
        boxSizing: 'border-box',
    },
    cardHeader: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
    },
    cardHeaderToggle: {
        flexBasis: '20%',
    },
    cardHeaderCode: {
        flexBasis: '80%',
        paddingLeft: 10,
    }
};

const Code = ({ defaultValue, code, onChange, use }) => (
    <Card style={ styles.card }>
        <CardHeader
            title={
                <div style={ styles.cardHeader }>
                    <div style={ styles.cardHeaderToggle }>
                        <Toggle
                            defaultToggled={ Number(use) === Number(code) }
                        />
                    </div>
                    <div style={ styles.cardHeaderCode }>
                        <TextField underlineShow={false} name='codeName' defaultValue={code} />
                    </div>
                </div>
            }
            actAsExpander={false}
            showExpandableButton={true}
        />
        <CardText expandable={true}>
            <TextField
                name='CodeJson'
                style={ styles.textArea }
                multiLine={true}
                defaultValue={ defaultValue }
                onChange={ onChange }
                rows={20}
                underlineShow={false}
            />
        </CardText>
    </Card>
);

export default Code;
