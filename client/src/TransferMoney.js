import React, { useState ,useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios'
export default function TransferMoney(props) {
    
    const [user1, setuser1] = useState('')
    const [user2, setuser2] = useState('')
    const [user3, setuser3] = useState('')
    
    const location=useLocation()
    
    const [Data, setData] = useState([])

    useEffect(() => {

    axios.get('/app/signup/mydata')
    .then(response=>{
        setData(response.data)
        console.log(Data)
    });
    
    setuser1("8227347")
    setuser2("8227347")
    setuser2(location.state.holder)
    // console.log(props.location.state.holder)

    }, [])

    const changeMode=(event)=>{   
        event.preventDefault();
        
        const val={
            user1:user1,
            user2:user2,
            user3:Number(user3)
        }

        const transfer={
            amount:Number(user3),
            sender:user1,
            receiver:user2
          }

        axios.post('/app/signup/change',val)
        .then(response=>{
            alert("successful transection !!")
        })
        .catch(error=>{
            alert("transection failed !!")
        })

        axios.post('/app/signup/transfer',transfer)
        .then(response=>{
            console.log("data saved")
        })
        .catch(error=>{
            alert("data not saved")
        })

     setuser1('')
     setuser2('')
     setuser3('')
        
    }

 
    const handleChange1=(event)=>{
        setuser1(event.target.value)
    }
    const handleChange2=(event)=>{
        setuser2(event.target.value)
    }
    const handleChange3=(event)=>{
        setuser3(event.target.value)
    }

    return (
        <div >
        <div className="container-transfer">
            <h3 className="header">TRANSFER  MONEY</h3>
            <form className="form" id="form">
                
                <div className="form-control">
                    <label>From : </label>
                    <select value={user1} onChange={handleChange1} className="form-select form-select-sm" aria-label=".form-select-sm example" >
                        {
                            Data.map((data)=>{
                                {
                                    return  data.fullname!==''?(
                                        <option value={data.accountNo}>{data.accountNo}</option> ):undefined
                                    }
                            }
                        )}
                    </select>
                </div>
                
                <div className="form-control">
                    <label>To : </label>
                    <select value={user2} onChange={handleChange2} className="form-select form-select-sm" aria-label=".form-select-sm example" >
                        {
                            Data.map((data)=>{
                                 {    
                                    return  data.fullname!==''?(
                                        <option value={data.accountNo}>{data.accountNo}</option> ):undefined
                                    }      
                            }
                        )}
                    </select>
                </div>

                <div className="form-control">
                    <label>Amount :</label>
                    <input type="text" placeholder="INR"
                    id="email" name="email"
                    value={user3}
                    onChange={handleChange3}
                    className="transfer"
                    />
                </div>
                <br/><br/>
             <button onClick={changeMode} type="submit" className="btn btn-info button-tech">Submit</button>

             <Link to="/transaction"><input type="submit" className="btn btn-warning btn-block input-btn " value="See History"/></Link>

            </form>
        </div>
        </div>
    )
}
