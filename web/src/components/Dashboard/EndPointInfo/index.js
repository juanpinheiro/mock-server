import React from 'react';
import { connect } from 'react-redux';
import { TextField, FloatingActionButton } from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import CodeList from './CodeList';

const styles = {
    container: {
        padding: 20,
    },
    endPointName: {
        width: '100%',
    },
    saveButtonContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: 20,
    },
    saveButton: {
        width: 100,
    },
    addButtonContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 20,
    }
};

const EndPointInfo = ({ endPointInfo, route }) => (
    <div style={ styles.container }>
        <TextField
            name='mockName'
            style={ styles.endPointName }
            placeholder='Mock Name'
            defaultValue={endPointInfo.route}
        />
        <CodeList
            responses={ endPointInfo.responses || {} }
            use={endPointInfo.use}
        />
        <div style={ styles.addButtonContainer }>
            <FloatingActionButton mini={ true } style={ styles.addButton }>
                <ContentAdd />
            </FloatingActionButton>
        </div>
    </div>
);

const mapStateToProps = state => ({
    endPointInfo: state.endPointInfo,
});

export default connect(mapStateToProps)(EndPointInfo);
