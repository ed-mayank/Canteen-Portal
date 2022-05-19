import React, { useState } from 'react';
import TabOptions from "./tabOptions"
import Drinks from './tabs/Drinks';
import Noodles from './tabs/Noodles';
import Sweets from './tabs/Sweets';
import Others from './tabs/Others';
import Header from './Header';
import './style.css';

const Food = () => {
    const [activeTab, setActiveTab] = useState("Drinks")
    return (
        <div>
            <Header />
            <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
            {getCorrectScreen(activeTab)}
        </div>
    )
};

const getCorrectScreen = (tab) => {
    switch (tab) {
        case "Drinks":
            return <Drinks />;

        case "Noodles":
            return <Noodles />;

        case "Sweets":
            return <Sweets />;
        case "Other":
            return <Others />
        default:
            return <Drinks />;
    }
};

export default Food;
