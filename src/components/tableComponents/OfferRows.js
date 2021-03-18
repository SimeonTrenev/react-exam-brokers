import React from 'react';
import TableRow from './TableRow';

export default function OfferRows (props) {
    const offers = props.offers.map((e) => {
        return (<TableRow key={e._id} offer={e}></TableRow>)
    })

    return(<tbody>{offers}</tbody>)
}