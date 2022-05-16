import React from "react"
import './BaseFilter.css'

function BaseFilter(props) {
    return (
        <nav className="filter-nav">
            <button onClick={() =>props.onUpdate('all')}
           className={props.current === 'all' ? 'active' : ''}>View All
           </button>
            <button
             onClick={() =>props.onUpdate('completed')}
             className={props.current === 'completed' ? 'active' : ''}
             >Completed
             </button>
            <button 
            onClick={() =>props.onUpdate('pending')}
             className={props.current === 'pending' ? 'active' : ''} 
             >
                 Pending
            </button>

        </nav>
    );
}

export default BaseFilter