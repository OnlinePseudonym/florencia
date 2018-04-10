import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PizzaSubMenu from './pizza_sub_menu';

const Pizzas = (props) => {
    return (
        <Tabs>
            <TabList>
                <Tab>Traditional</Tab>
                <Tab>Olive Oil</Tab>
                <Tab>Pesto</Tab>
                <Tab>Ranch</Tab>
            </TabList>

            <TabPanel>
                <PizzaSubMenu name="Traditional" menu={props.menu.traditional} />
            </TabPanel>
            <TabPanel>
                <PizzaSubMenu name="Olive Oil" menu={props.menu.oliveOil} />
            <div>olive oil</div>
            </TabPanel>
            <TabPanel>
                <PizzaSubMenu name="Pesto" menu={props.menu.pesto} />
            <div>pesto</div>
            </TabPanel>
            <TabPanel>
                <PizzaSubMenu name="Ranch" menu={props.menu.ranch} />
            <div>ranch</div>
            </TabPanel>
        </Tabs>
    )
}

export default Pizzas;