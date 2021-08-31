import React, { Component } from 'react';
import { CSVLink } from "react-csv";
import Spinner from '../Spinner/Spinner'
import './Download.css'

 
const headers = [
  'id', 'phone', 'name', 'age','city', 'state', 'country', 'is_attend', 'time_duration', 'is_volunteer', 'is_help', 'dob', 'date_added'
];
 
class Download extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isSpinner: false,
    }
    this.csvLinkEl = React.createRef();
  }
 
  getUserList = () => {
    return fetch('https://aqueous-anchorage-48352.herokuapp.com/')
      .then(res => res.json());
  }
 
  downloadReport = async () => {
      this.setState({isSpinner:true});
    const data = await this.getUserList();    
    this.setState({ data: data }, () => {
      setTimeout(() => {
        this.csvLinkEl.current.link.click();
      });
    });

     this.setState({isSpinner:false});
  }
 
  render() {
    const { data, isSpinner } = this.state;
    return (
      <div>
          <section className="mt-4 mb-4">
          <div className="container">
            <div className="row">
              <div className="col-sm-2"></div>
              <div className="col-sm-8">
                <div className="detail-bg">  
                { isSpinner ? <Spinner/> :<div>     
        <input className="csv" type="button" value="Export to CSV" onClick={this.downloadReport} />
       <CSVLink
          headers={headers}
          filename="swadharma_data.csv"
          data={data}
          ref={this.csvLinkEl}
        />
        </div>
  }
       </div>
                  </div>
                  </div>
                  </div>
                  </section>
      </div>
    );
  }
}
 
export default Download;




