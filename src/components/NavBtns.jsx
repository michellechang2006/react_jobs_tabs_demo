import NavBtn from "./NavBtn"
import DATA from "../data/data"
import PropTypes from 'prop-types';
NavBtns.propTypes = {
    onSelected: PropTypes.func,
    active: PropTypes.number
};

export default function NavBtns({onSelected,active}) {
    return (
        <ul>
            {DATA.map((item,index) => {
                console.log(item.tab)
                return (
                    <NavBtn active={active === index? true : false} key={item.tab} onSelected={() => {onSelected(index)}} >{item.tab}</NavBtn>
                )
            })}
        </ul>
    )
}

