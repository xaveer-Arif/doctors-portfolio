import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import HomeBanner from '../HomeBanner/HomeBanner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation/>
            <HomeBanner/>
            <Services/> 
            <AppointmentBanner/>
        </div>
    );
};

export default Home;