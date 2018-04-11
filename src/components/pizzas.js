import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PizzaSubMenu from './pizza_sub_menu';

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
                <PizzaSubMenu name="Traditional Pizzas" menu={props.menu.traditional} />
            </TabPanel>
            <TabPanel>
                <PizzaSubMenu name="Olive Oil Pizzas" menu={props.menu.oliveOil} />
            </TabPanel>
            <TabPanel>
                <PizzaSubMenu name="Pesto Pizzas" menu={props.menu.pesto} />
            </TabPanel>
            <TabPanel>
                <PizzaSubMenu name="Ranch Pizzas" menu={props.menu.ranch} />
            </TabPanel>
        </Tabs>
    )
}

export default Pizzas;