import React from 'react'


const Pagination =(props)=>{
const pageNumbers=[]
    console.log(props.currentpage)
    for(let i=1;i<=props.currentpage;i++){
        pageNumbers.push(i)
    }

    return(
        <nav>
            <ul className="pagination">
                {  pageNumbers.map(number=>(
                        <li key={number} className="page-item">
                            <button onClick={()=>{props.paginate(number)}}  className='page-link'>
                            {number}
                            </button>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Pagination