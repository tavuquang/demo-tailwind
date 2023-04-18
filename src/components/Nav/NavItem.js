const NavItem = (props) => {
    const {item} = props;

    return(
        <li className={`flex p-2 justify-end items-center cursor-pointer ${item.active? 'bg-primary text-white' : ''}`}>
                <h3 className="mr-2">{item.label}</h3>
                {item.icon}
                {/* <BiHomeAlt size="1.875rem"/> */}
        </li>
    );
}

export default NavItem;