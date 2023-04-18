import {BiHomeAlt, BiMoviePlay, BiInfoCircle} from 'react-icons/bi';
import NavItem from './NavItem';

const items = [
    {label: 'Home', icon: <BiHomeAlt size='1.875rem' />, active: true},
    {label: 'Movies', icon: <BiMoviePlay size='1.875rem' />},
    {label: 'About', icon: <BiInfoCircle size='1.875rem' />}
];

const NavItemContainer = () => (
    <>
        {items.map((item, index) => (
            <NavItem item={item} key={index}/>
        ))}
    </>
);

const Index = () => {
    return (
        <nav className="col-span-1 bg-cyan-200">
            <div className=" mx-4 justify-between items-center">
                 <h4 className="uppercase font-bold text-primary py-4 border-b border-primary text-right">Demo</h4>
            </div>

            <ul className="mx-4 my-2">
                <NavItemContainer/>
            </ul>
        </nav>
    );
};

export default Index;