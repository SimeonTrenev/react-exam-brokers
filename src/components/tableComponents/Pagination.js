import React from 'react';
import { Link } from 'react-router-dom';

export default function Pagination (props)  {
    let nextPage = props.currentPage + 1;
    nextPage = nextPage > props.lastPage ? props.lastPage : nextPage;
    let prevPage = props.currentPage - 1;
    prevPage = prevPage < 1 ? 1 : prevPage;

    return(
        <nav aria-label="Page navigation example">
           <ul className="pagination">
            <li className="page-item">
                <Link className="page-link nextpage"
                to={`${props.baseUrl}1${props.querystring}`}
                aria-label="Next">
                    <span aria-hidden="true" className='nextpage'>&laquo;&laquo;</span>
                </Link>
            </li>
            <li className='page-item'>
               <Link className='page-link-prefpage'
               to={props.baseUrl + prevPage + props.querystring}
               aria-label="Previous">
                <span aria-hidden="true" className='prefpage'>&laquo;</span>
              </Link>
            </li>
            <li>
                <Link className='page-link nextpage'
                to={props.baseUrl + nextPage + props.querystring}
                aria-label="Next">
                <span aria-hidden="true" className="nextpage">&raquo;</span>
                </Link>
            </li>
            <li className='page-item'>
                <Link className='page-link nextpage'
                to={props.baseUrl + props.lastPage + props.querystring}
                aria-label="Next">
                    <span aria-hidden="true" className='nextpage'>&raquo;&raquo;</span>
                </Link>
            </li>
           </ul>
        </nav>
    )
}