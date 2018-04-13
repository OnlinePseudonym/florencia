import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Menu from './menu';

const Pizzas = (props) => {
    return (
        <Tabs>
            <TabList className="menu--tabs-list">
                <Tab className="menu--tabs-list-item">Traditional</Tab>
                <Tab className="menu--tabs-list-item">Olive Oil</Tab>
                <Tab className="menu--tabs-list-item">Pesto</Tab>
                <Tab className="menu--tabs-list-item">Ranch</Tab>
            </TabList>

            <TabPanel>
                <Menu name="Traditional Pizzas" menu={props.menu.traditional} />
            </TabPanel>
            <TabPanel>
                <Menu name="Olive Oil Pizzas" menu={props.menu.oliveOil} />
            </TabPanel>
            <TabPanel>
                <Menu name="Pesto Pizzas" menu={props.menu.pesto} />
            </TabPanel>
            <TabPanel>
                <Menu name="Ranch Pizzas" menu={props.menu.ranch} />
            </TabPanel>
        </Tabs>
    )
}

export default Pizzas;