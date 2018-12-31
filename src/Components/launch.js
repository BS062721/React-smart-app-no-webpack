import React, { Component } from 'react';
import root from 'window-or-global'
import 'fhirclient';
class Launch extends Component{
    constructor(props) {
        super(props);
      }

      componentDidMount(){
        root.FHIR.oauth2.authorize({
            client_id: 'a8ba127e-8adf-4f03-9916-efee885a5cab',
            scope: 'patient/Patient.read patient/Observation.read launch online_access openid profile',
            redirect_uri: 'http://localhost:3000/demo',
          });
      }

      render(){
        return(
                <div>
                </div>
            );
    }
}

export default Launch;