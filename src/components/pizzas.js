import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PizzaSubMenu from './pizza_sub_menu';

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
                <PizzaSubMenu name="Traditional" menu={props.menu.traditional} />
            </TabPanel>
            <TabPanel>
                <PizzaSubMenu name="Olive Oil" menu={props.menu.oliveOil} />
            </TabPanel>
            <TabPanel>
                <PizzaSubMenu name="Pesto" menu={props.menu.pesto} />
            </TabPanel>
            <TabPanel>
                <PizzaSubMenu name="Ranch" menu={props.menu.ranch} />
            </TabPanel>
        </Tabs>
    )
}

export default Pizzas;