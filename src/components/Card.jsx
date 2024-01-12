import CardBtn from "./CardBtn"
import PropTypes from 'prop-types';

Card.propTypes = {
    jobTitle: PropTypes.string,
    company: PropTypes.string,
    address: PropTypes.string,
    pay: PropTypes.string,
    time: PropTypes.string,
    postedTime: PropTypes.string
};



export default function Card({ jobTitle, company, address, pay, time, postedTime }) {
    return (
        <div className="card">
            <img src="https://fakeimg.pl/300x100/3f72af/fff"></img>
            <div className="card-info">
                <h3>{jobTitle}</h3>
                <h3>{company}</h3>
                <p>{address}</p>
                <p>{pay}</p>
            </div>
            <div className="line"></div>
            <div className="card-bottom">
                <CardBtn>{time}</CardBtn>
                <p>{postedTime}</p>
            </div>
        </div>
    )
}