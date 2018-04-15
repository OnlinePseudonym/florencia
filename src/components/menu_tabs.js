import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import menuData from './menu-data';
import Menu from './menu';
import PizzaTabs from './pizza_tabs';
import Divider from './divider';
import './menu.css';

const MenuTabs = () => {
    return (
        <div className="menu-tabs" id="menu">
            <Divider className="divider--white divider--blue-background" fill="#fff" />
            <h2 className="section-title">Menu</h2>
            <Tabs>
                <TabList className="menu-btns">
                    <Tab className="menu-btns__btn">Appetizers</Tab>
                    <Tab className="menu-btns__btn">Salads</Tab>
                    <Tab className="menu-btns__btn">Pizzas</Tab>
                    <Tab className="menu-btns__btn">Sandwiches</Tab>
                    <Tab className="menu-btns__btn">Paninis</Tab>
                    <Tab className="menu-btns__btn">Calzones</Tab>
                    <Tab className="menu-btns__btn">Kids</Tab>
                    <Tab className="menu-btns__btn">Desserts</Tab>
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
        </div>
    )
}

export default MenuTabs;