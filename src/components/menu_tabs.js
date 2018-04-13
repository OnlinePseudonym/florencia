import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import menuData from './menu-data';
import Menu from './menu';
import PizzaTabs from './pizza_tabs';
import Divider from './divider';
import './menu.css';

const MenuTabs = () => {
    return (
        <Tabs id="menu">
            <Divider className="divider--white divider--blue-background" fill="#fff" />
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
                <Menu name="Appetizers" menu={menuData.appetizers} />
            </TabPanel>
            <TabPanel>
                <Menu name="Salads" menu={menuData.salads} />
            </TabPanel>
            <TabPanel>
                <PizzaTabs menu={menuData.pizzas} />
            </TabPanel>
            <TabPanel>
                <Menu name="Sandwiches" menu={menuData.sandwiches} />
            </TabPanel>
            <TabPanel>
                <Menu name="Paninis" menu={menuData.paninis} />
            </TabPanel>
            <TabPanel>
                <Menu name="Calzones" menu={menuData.calzones} />
            </TabPanel>
            <TabPanel>
                <Menu name="Kids" menu={menuData.kids} />
            </TabPanel>
            <TabPanel>
                <Menu name="Desserts" menu={menuData.desserts} />
            </TabPanel>
        </Tabs>
    )
}

export default MenuTabs;