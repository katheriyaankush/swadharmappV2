import React from 'react'
import './Success.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const  Success = ({message, redirectHandle})=> {
    return (
        <div >
<section className="mt-4 mb-4">
          <div className="container">
            <div className="row">
              <div className="col-sm-2"></div>
              <div className="col-sm-8">
                <div className="detail-bg">          
                {message.error ? <h3 className="failed">Record already exist!!</h3 >:null}
                { message.status ? 
              <div>  <h3 className="success">Record successfully added!!</h3> <p style={{color: 'gray', textAlign: 'center', fontWeight:'600'}}>Id:  {message.id}</p> </div> : null}

                <div className="center">
                <button className="button" onClick={()=>redirectHandle()} >Redirect to Form</button>
                </div>
                  </div>
                  </div>
                  </div>
                  </div>
                  </section>
        </div>
    )
}

export default Success

