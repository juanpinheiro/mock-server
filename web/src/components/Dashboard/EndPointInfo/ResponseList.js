import React from 'react';
import { FloatingActionButton } from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Response from './Response';

const styles = {
    addContainer: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        marginTop: 20,
    },
};

const ResponseList = ({ responses, use, onAdd, onChangeUse, onChangeResponseCode, onChangeResponseData }) => (
    <div>
        {responses.map((response, key) =>
            <Response
                key={ key }
                use={ use }
                data={ response }
                defaultJson={ JSON.stringify(response.data, null, 4) }
                onToggle={ onChangeUse }
                onChangeCode={ event => onChangeResponseCode(key, event.target.value) }
                onChangeData={ event => onChangeResponseData(key, event.target.value) }
            />
        )}
        <div style={ styles.addContainer }>
            <FloatingActionButton mini={ true } onClick={ onAdd }>
                <ContentAdd />
            </FloatingActionButton>
        </div>
    </div>
);

export default ResponseList;
