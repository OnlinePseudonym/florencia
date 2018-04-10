import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import menuData from './menu-data';
import Appetizers from './appetizers';
import Salads from './salads';
import Pizzas from './pizzas';
import './menu.css';

const Menu = () => {
    return (
        <Tabs>
            <TabList className="menu--tabs-list">
                <Tab className="menu--tabs-list-item">Appetizers</Tab>
                <Tab className="menu--tabs-list-item">Salads</Tab>
                <Tab className="menu--tabs-list-item">Pizzas</Tab>
                <Tab className="menu--tabs-list-item">Sandwiches</Tab>
                <Tab className="menu--tabs-list-item">Paninis</Tab>
                <Tab className="menu--tabs-list-item">Calzones</Tab>
                <Tab className="menu--tabs-list-item">Kids</Tab>
                <Tab className="menu--tabs-list-item">Desserts</Tab>
            </TabList>

            <TabPanel>
                <Appetizers menu={menuData.appetizers} />
            </TabPanel>
            <TabPanel>
                <Salads menu={menuData.salads} />
            </TabPanel>
            <TabPanel>
                <Pizzas menu={menuData.pizzas} />
            </TabPanel>
            <TabPanel>
                <div>Sandwiches</div>
            </TabPanel>
            <TabPanel>
                <div>Paninis</div>
            </TabPanel>
            <TabPanel>
                <div>Calzones</div>
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