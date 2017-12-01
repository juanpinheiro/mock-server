import React from 'react';
import * as actions from 'actions';
import { connect } from 'react-redux';
import EndPointParams from './EndPointParams';
import ResponseList from './ResponseList';

const styles = {
    container: {
        padding: 20,
    }
};

const EndPointInfo = (props) => (
    <div style={ styles.container }>
        <EndPointParams
            method={ props.endPointInfo.method }
            route={ props.endPointInfo.route }
            timeout={ props.endPointInfo.timeout }
            onChangeMethod={ method => props.editMethod(method) }
            onChangeRoute={ route => props.editRoute(route) }
            onChangeTimeout={ timeout => props.editTimeout(timeout) }
        />
        <ResponseList
            responses={ props.endPointInfo.responses || [] }
            use={ props.endPointInfo.use }
            onAdd={() => props.addResponse()}
            onChangeUse={use => props.editUse(use)}
            onChangeResponseCode={(index, code) => props.editResponseCode(index, code)}
            onChangeResponseData={(index, data) => props.editResponseData(index, data)}
        />
    </div>
);

const mapStateToProps = state => ({
    endPointInfo: state.endPointInfo,
});

const mapDispatchToProps = dispatch => ({
    addResponse: (id) => dispatch(actions.addResponse(id)),
    editResponseCode: (index, code) => dispatch(actions.editResponseCode(index, code)),
    editResponseData: (index, data) => dispatch(actions.editResponseData(index, data)),
    editUse: use => dispatch(actions.editUse(use)),
    editMethod: method => dispatch(actions.editMethod(method)),
    editRoute: route => dispatch(actions.editRoute(route)),
    editTimeout: timeout => dispatch(actions.editTimeout(timeout)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EndPointInfo);
