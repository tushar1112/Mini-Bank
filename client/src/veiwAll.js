import React ,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
export default function VeiwAll() {
    
    const [data, setData] = useState([])
    
    useEffect(() => {
        
            axios.get('/app/signup/mydata')
            .then(response=>{
                setData(response.data)
            });
        

    }, [])

    return (
        <div>
            <table className="table table-striped table-bordered table-light auto-index">
              <thead>
                  <tr>                     
                      <th>Sr no</th>
                      <th>FullName</th>
                      <th>Email</th>
                      <th>Account No</th>
                      <th>Amount</th>
                      <th>Make Transaction</th>
                  </tr>
              </thead>
              <tbody>
                  {
                  data.map((post,index)=>{
                    return  post.fullname!==''?(
                       <tr key={index}>
                            <td></td>
                            <td>{post.fullname}</td>
                            <td>{post.email}</td>
                            <td>{post.accountNo}</td>
                            <td>{post.amount}</td>
                            <td><Link to={{
                                pathname:'/transfer',
                                state:{
                                    holder:post.accountNo
                                }
                            }}>
                            <button className="btn btn-info button-tech">Transfer</button></Link>
                            </td>
                        </tr>
                        ):null
                    }
                   )
                  }
              </tbody>
          </table>
        </div>
    )
}
