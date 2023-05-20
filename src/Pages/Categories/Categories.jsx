
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { useLoaderData } from 'react-router-dom';


const Categories = () => {


    const datas = useLoaderData()

    console.log(datas);
    console.log(datas[0]?.category);

    return (
        <div>
            <h2 className='text-5xl text-center m-10'>Search by Categories</h2>
            <div className='flex justify-around m-8'>
                <Tabs>
                    <TabList>
                        <Tab><button className="btn btn-outline btn-success">{datas[0].category}</button></Tab>

                        <Tab><button className="btn btn-outline btn-warning">{datas[1].category}</button></Tab>
                        <Tab><button className="btn btn-outline btn-error">{datas[2].category}</button></Tab>
                    </TabList>

                    <TabPanel>
                        <button className="btn btn-outline btn-secondary">Button</button>
                        <button className="btn btn-outline btn-primary">Button</button>

                    </TabPanel>
                    <TabPanel>
                        <button className="btn btn-outline btn-secondary">Button</button>
                        <button className="btn btn-outline btn-accent">Button</button>
                    </TabPanel>
                    <TabPanel>
                        <button className="btn btn-outline">Button</button>
                        <button className="btn btn-outline btn-accent">Button</button>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Categories;