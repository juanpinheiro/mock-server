import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import { List, Subheader } from 'material-ui';
import { FloatingActionButton } from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import EndPoint from './EndPoint';

const styles = {
    addButtonContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 20,
    }
};

class EndPointList extends Component {
    componentDidMount() {
        this.props.getEndPoints();
    }

    render() {
        return (
            <div>
                <List>
                    <Subheader inset={ true }>Mock List</Subheader>
                    {this.props.endPoints.map((endPoint, key) =>
                        <EndPoint
                            key={key}
                            endPoint={endPoint}
                            onClick={() => this.props.getEndPointInfo(endPoint.id)}
                        />
                    )}
                </List>
                <div style={ styles.addButtonContainer }>
                    <FloatingActionButton mini={true} style={ styles.addButton }>
                        <ContentAdd />
                    </FloatingActionButton>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    endPoints: state.endPoints,
});

const mapDispatchToProps = dispatch => ({
    getEndPoints: () => dispatch(actions.getEndPoints()),
    getEndPointInfo: id => dispatch(actions.getEndPointInfo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EndPointList);
