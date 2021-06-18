import React ,{useState,useEffect} from 'react'
import axios from 'axios';


export default function Transaction() {
    
    const [data, setData] = useState([])


    useEffect(() => {
            axios.get('/app/signup/mydata')
            .then(response=>{
                setData(response.data)
            });
        

    }, [])

    return (
        <>
        <h3 className="header1">Transaction History</h3>
        <br/><br/>
        <div>
            <table className="table table-striped table-bordered table-light auto-index">
              <thead>
                  <tr>
                      <th> Sr no</th>
                      <th>Sender</th>
                      <th>Receiver</th>
                      <th>Date and time</th>
                      <th>Amount</th>
                  </tr>
              </thead>
              <tbody>
                  {
                  data.map((post,index)=>{
                    return  post.fullname===''?(
                        <tr key={index}>
                             <td></td>
                             <td>{post.sender}</td>
                             <td>{post.receiver}</td>
                             <td>{post.date}</td>
                             <td>{post.amount}</td>
                         </tr> ):null
                    }
                  )
                  }
              </tbody>
          </table>
        </div>
        </>
    )
}
