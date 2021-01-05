import React, { useState } from 'react'

function Contact() {
    const [data, setData]= useState({
        fullname:'',
        phone:'',
        email:'',
        text:'',

    });
    const formSubmit=(e)=>{
        e.preventDefault();
        alert(`${data.fullname} your data has been submitted`);

    }
    const InputEvent=(event)=>{
        const {name, value} = event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name]:value,
        };
        });

    }
    return (
        <div>
            <div className='my-5'>
                <h1 className='text-center'>Contact Us</h1>
            </div>
            <div className='container contact_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form onSubmit={formSubmit}>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Name</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" value={data.fullname} name='fullname' autoComplete='off' onChange={InputEvent} placeholder='Enter your name'/>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Phone number</label>
                                <input type="number" className="form-control" id="exampleInputEmail1" value={data.phone} name='phone' onChange={InputEvent} placeholder='phone number'/>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" value={data.email} name='email' autoComplete='off' onChange={InputEvent} placeholder='enter your email'/>
                            </div>
                            <div className="form-group mb-3">
                                <label for="exampleInputEmail1">Message</label>
                                <textarea rows='3' type="text" className="form-control" id="exampleInputEmail1"  value={data.text} name='text' onChange={InputEvent}/>
                            </div>
                            <div className='col-12'>                 
                            <button type="submit" className="btn btn-primary">Submit</button>
                            </div>   
                        </form>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Contact
