import React from 'react'
import {Link} from 'react-router-dom'

export default function navbar() {

    return (
        <ul>
            <Link to="/">
            <li><a href="">Home</a></li>
            </Link>
            <Link to="/add">
            <li><a href="">Add Account</a></li>
            </Link>
            <Link to="/all">
            <li><a href="">Veiw all</a></li>
            </Link>
            <Link to={{
                        pathname:'/transfer',
                        state:{
                            holder:''
                        }
                    }}>
            <li><a href="">Transfer Money</a></li>
            </Link>
            <Link to="/transaction">
            <li><a href="">Transaction History</a></li>
            </Link>
            
            
        </ul>
    )
}
