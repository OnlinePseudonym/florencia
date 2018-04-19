import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Menu from './menu';
import CreateYourOwn from './create_your_own';

const Pizzas = (props) => {
    return (
        <Tabs>
            <TabList className="menu-btns">
                <Tab className="menu-btns__btn">Traditional</Tab>
                <Tab className="menu-btns__btn">Olive Oil</Tab>
                <Tab className="menu-btns__btn">Pesto</Tab>
                <Tab className="menu-btns__btn">Ranch</Tab>
                <Tab className="menu-btns__btn menu-btns__btn--create">Create Your Own</Tab>
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
            <TabPanel>
                <CreateYourOwn />
            </TabPanel>
        </Tabs>
    )
}

export default Pizzas;