import PropTypes from 'prop-types';
CardBtn.propTypes = {
    children: PropTypes.string
};
export default function CardBtn({children}) {
    return (
        <button className="card-btn">{children}</button>
    )
}