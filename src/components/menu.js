import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import menuData from './menu-data';
import Appetizers from './appetizers';
import Salads from './salads';
import './menu.css';

const Menu = () => {
    return (
        <Tabs>
            <TabList>
                <Tab>Appetizers</Tab>
                <Tab>Salads</Tab>
                <Tab>Pizzas</Tab>
                <Tab>Sandwiches</Tab>
                <Tab>Calzonis</Tab>
                <Tab>Kids</Tab>
                <Tab>Desserts</Tab>
            </TabList>

            <TabPanel>
                <Appetizers menu={menuData.appetizers} />
            </TabPanel>
            <TabPanel>
                <Salads menu={menuData.salads} />
            </TabPanel>
            <TabPanel>
                <div>Pizzas</div>
            </TabPanel>
            <TabPanel>
                <div>Sandwiches</div>
            </TabPanel>
            <TabPanel>
                <div>Calzonis</div>
            </TabPanel>
            <TabPanel>
                <div>Kids</div>
            </TabPanel>
            <TabPanel>
                <div>Desserts</div>
            </TabPanel>
        </Tabs>
    )
}

export default Menu;