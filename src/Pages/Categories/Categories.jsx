
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { useLoaderData } from 'react-router-dom';
import CategoryCard from './CategoryCard';


const Categories = () => {


    const datas = useLoaderData()

    return (
        <div>
            <h2 className='text-5xl text-center m-10'>Shop by Categories</h2>
            <div className='flex justify-around my-8'>
                <Tabs>
                    <TabList>
                        <Tab><button className="btn btn-outline btn-success">{datas[0].category}</button></Tab>

                        <Tab><button className="btn btn-outline btn-warning">{datas[1].category}</button></Tab>
                        <Tab><button className="btn btn-outline btn-error">{datas[2].category}</button></Tab>
                    </TabList>
                    {/* tab panel  */}
                    <div>
                        <TabPanel>
                            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                                {
                                    datas[0].items.map(item => <CategoryCard
                                        key={item.picture}
                                        item={item}
                                    ></CategoryCard>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                                {
                                    datas[1].items.map(item => <CategoryCard
                                        key={item.picture}
                                        item={item}
                                    ></CategoryCard>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                                {
                                    datas[2].items.map(item => <CategoryCard
                                        key={item.picture}
                                        item={item}
                                    ></CategoryCard>)
                                }
                            </div>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        </div>
    );
};

export default Categories;