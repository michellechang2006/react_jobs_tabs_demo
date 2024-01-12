import PropTypes from 'prop-types';

NavBtn.propTypes = {
    children: PropTypes.string,
    onSelected: PropTypes.func,
    active: PropTypes.bool
};
export default function NavBtn({ children, onSelected, active }) {
    return (
        <li><button onClick={onSelected} className={active ? "active" : null} >{children}</button></li>
    )
}