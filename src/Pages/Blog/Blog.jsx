
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div>
            <h3 className='text-3xl'>
                What is an access token and refersh token? How do they work and where should we store them on client side?

            </h3>
            <p className='text-xl'>
                access token: assess token in JWT contain information about an entity in the form of claims.
                refresh token: The refresh token is used to genetate new access token.
                we should store them in localstorage or in browser cookie as http only cookie
            </p>
            <h3 className='text-3xl'>Compare sql and no sql database?</h3>
            <p className='text-xl'>
                sql: sql(structured query language)  databases follow a  tabular, and predefined schema model.SQL databases are vertically scalable.
            </p>
            <p>  noSql:nlSql (Not Only SQL) databases use flexible, schema-less data models.noSQL databases are horizontally scalable.</p>
            <h3 className='text-3xl'>what is express.js?</h3>
            <p className='text-xl'>Express is a minimal and flexible Node.js web application framework.It is used to build a single page, multipage, and hybrid web application.</p>
            <h3 className='text-3xl'>What is nest.js</h3>
            <p className='text-xl'>Nest. js is one of the node.js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node. js</p>
            <h3 className='text-3xl'>What is mongodb Aggregate and how does it work?</h3>
            <p className='text-xl'>Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages.</p>
        </div>
    );
};

export default Blog;