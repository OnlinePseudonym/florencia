import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import menuData from './menu-data';
import StandardMenu from './standard_menu';
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
                <StandardMenu name="Appetizers" menu={menuData.appetizers} />
            </TabPanel>
            <TabPanel>
                <Salads menu={menuData.salads} />
            </TabPanel>
            <TabPanel>
                <Pizzas menu={menuData.pizzas} />
            </TabPanel>
            <TabPanel>
                <StandardMenu name="Sandwiches" menu={menuData.sandwiches} />
            </TabPanel>
            <TabPanel>
                <StandardMenu name="Paninis" menu={menuData.paninis} />
            </TabPanel>
            <TabPanel>
                <StandardMenu name="Calzones" menu={menuData.calzones} />
            </TabPanel>
            <TabPanel>
                <StandardMenu name="Kids" menu={menuData.kids} />
            </TabPanel>
            <TabPanel>
                <StandardMenu name="Desserts" menu={menuData.desserts} />
            </TabPanel>
        </Tabs>
    )
}

export default Menu;