import { useState } from 'react';
import PageBanner from '../../Components/PageBanner';
import bannerImg from '../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/useMenu';
import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories = ['salads', 'pizza', 'soup', 'desserts', 'drinks']
    const { category } = useParams();
    console.log(category);
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    const drinksItem = menu.filter(item => item.category == 'drinks');
    const dessertItem = menu.filter(item => item.category == 'dessert');
    const pizzaItem = menu.filter(item => item.category == 'pizza');
    const saladItem = menu.filter(item => item.category == 'salad');
    const soupItem = menu.filter(item => item.category == 'soup');
    return (
        <div>

            <Helmet>
                <title>BISTRO | Order Food</title>
            </Helmet>

            {/* Banner */}

            <PageBanner
                bannerImg={bannerImg}
                title={"our shop"}
                subTitle={"would you like to try a dish?"}
            ></PageBanner>

            {/* Tabs */}

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>SALADS</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUP</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>

                <TabPanel>
                    <OrderTab
                        items={saladItem}
                    ></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab
                        items={pizzaItem}
                    ></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab
                        items={soupItem}
                    ></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab
                        items={dessertItem}
                    ></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab
                        items={drinksItem}
                    ></OrderTab>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Order;