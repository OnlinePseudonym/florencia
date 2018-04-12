import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Menu from './menu';

const Pizzas = (props) => {
    return (
        <Tabs className="pizza--tabs">
            <TabList className="menu--tabs-list pizza--tab-list">
                <Tab className="menu--tabs-list-item pizza--tab-item">Traditional</Tab>
                <Tab className="menu--tabs-list-item pizza--tab-item">Olive Oil</Tab>
                <Tab className="menu--tabs-list-item pizza--tab-item">Pesto</Tab>
                <Tab className="menu--tabs-list-item pizza--tab-item">Ranch</Tab>
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