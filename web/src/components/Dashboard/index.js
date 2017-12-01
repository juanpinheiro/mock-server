import React from 'react';
import Header from './Header';
import EndPointList from './EndPointList';
import EndPointInfo from './EndPointInfo';
import Loading from './Loading';

const styles = {
    container: {
        display: 'flex',
        margin: -8,
    },
    sideList: {
        flexBasis: '20%',
    },
    content: {
        flexBasis: '80%',
    }
};

const Dashboard = () => (
    <div style={ styles.container }>
        <Loading />
        <div style={ styles.sideList }>
            <EndPointList />
        </div>
        <div style={ styles.content }>
            <Header />
            <EndPointInfo />
        </div>
    </div>
);

export default Dashboard;
