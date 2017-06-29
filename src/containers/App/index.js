import React, { Component } from 'react';
import UserList from '../UserList';
import FindUser from '../../util/findUser';

import userData from '../../data/users';

import './App.css';

const initialState = {
    userData: {}
};

class App extends Component {
  constructor(props){
    super(props);
    this.satate = initialState;
  }
  componentWillMount() {
    this.setState({
      userData: FindUser(userData)
    });
  }

  userDeleteToggle (index) {
    const userData = this.state.userData;
    delete userData[index];
  }

  render() {
    const { userData } = this.state;
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="table">
                <div className="table-head">
                  <div className="col-md-1">#</div>
                  <div className="col-md-3">Name</div>
                  <div className="col-md-3">City</div>
                  <div className="col-md-3">Phone</div>
                  <div className="col-md-2">Delete</div>
                </div>
                <div className="table-body">
                  {
                    Object.keys(userData).map((key, index) => {
                      return(
                        <UserList
                          key={key}
                          index={index}
                          userProfile={userData[key]}
                          removeUser={this.userDeleteToggle.bind(this, index)}
                        />
                      );
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
