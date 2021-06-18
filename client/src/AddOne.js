
import React, { Component } from 'react'
import axios from 'axios'
export class AddOne extends Component {
    
    constructor(){
        super()
        this.state={
            fullname:'',
            email:'',
            accountNo:'',
            amount:null

        }
     this.ChangeFullname=this.ChangeFullname.bind(this)
     this.ChangeaccountNO=this.ChangeaccountNO.bind(this)
     this.ChangeEmail=this.ChangeEmail.bind(this)
     this.ChangeAmount=this.ChangeAmount.bind(this)
     this.onSubmit=this.onSubmit.bind(this)
     
    }
    ChangeFullname=(event)=>{
        this.setState({
            fullname:event.target.value
        })
    }
    ChangeaccountNO=(event)=>{
        this.setState({
            accountNo:event.target.value
        })
    }
    ChangeAmount=(event)=>{
        this.setState({
            amount:event.target.value
        })
    }
    ChangeEmail=(event)=>{
        this.setState({
            email:event.target.value
        })
    }

    onSubmit=(event)=>{
        event.preventDefault()

        const registered={
          fullname:this.state.fullname,
          accountNo:this.state.accountNo,
          email:this.state.email,
          amount:this.state.amount
        }

    axios.post('http://localhost:4000/app/signup',registered)
      .then(response=>console.log(response.data))
     
      this.setState({
        fullname:'',
        accountNo:'',
        email:'',
        amount:''
      })
    
    alert("Account successfully Added")
    }

    render() {
        return (
            <div className="tittle">
            <div className="container-transfer">
                <div className="header"> ADD ACCOUNT</div>
                <div className="container">
                    <div className="form-div">
                        <form onSubmit={this.onSubmit}>
                            <input
                            type="text"
                            placeholder="Full name"
                            onChange={this.ChangeFullname}
                            value={this.state.fullname}
                            className='form-control form-group transfer'
                            />
                        
                            <input
                            type="text"
                            placeholder="account number"
                            onChange={this.ChangeaccountNO}
                            value={this.state.accountNo}
                            className='form-control form-group transfer'
                            />
                        
                            <input
                            type="text"
                            placeholder="email"
                            onChange={this.ChangeEmail}
                            value={this.state.email}
                            className='form-control form-group transfer'
                            />
                        
                            <input
                            type="number"
                            placeholder="amount"
                            onChange={this.ChangeAmount}
                            value={this.state.amount}
                            className='form-control form-group transfer'
                            />

                            <input type="submit" className="btn btn-info btn-block input-btn" value="Add"/>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default AddOne
