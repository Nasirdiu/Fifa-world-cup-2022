import React from 'react';
import PointTable from '../../PointTable/PointTable';
import Banner from '../Banner/Banner';
import LiveStream from '../LiveStream/LiveStream';
import Studium from '../Studium/Studium';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LiveStream></LiveStream>
            <PointTable></PointTable>
            <Studium></Studium>
        </div>
    );
};

export default Home;