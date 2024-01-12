import Card from "./Card"
import DATA from "../data/data"
import PropTypes from 'prop-types';

Cards.propTypes = {
    cardsIndex: PropTypes.any
};

export default function Cards({ cardsIndex }) {
    return (
        <div className="cards-container">
            <div className="cards">
                {DATA[cardsIndex].data.map((item) => {
                    return (
                        <Card jobTitle={item.title} company={item.companyName}
                            address={`${item.addressCity} ${item.addressCounrty}`}
                            pay={"$5000 ~ $6000"}
                            time={item.time}
                            postedTime={item.postedTime}
                            key={item.title}
                        />
                    )
                })}
            </div>
        </div>
    )
}