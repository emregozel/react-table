import React, { Component, PropTypes } from 'react';

class UserRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDetail: false
    }
  }

  parentUserToggle (item, index) {
    this.setState({openDetail: !this.state.openDetail})
  }

  render() {
    const { userProfile, index } = this.props;

    let parentItem = null;
    if (userProfile.children !== undefined) {
      parentItem = Object.keys(userProfile.children).map((key, index) => {
        return(
          <UserRow
            key={key}
            index={index}
            userProfile={userProfile.children[key]}
          />
        )
      });
    }

    return (
      <div className={userProfile.children ? 'table-parent' : 'table-child'}>
        <div className="col-md-2"></div>
        <div className="col-md-2">{userProfile.Name}</div>
        <div className="col-md-2">{userProfile.City}</div>
        <div className="col-md-2">{userProfile.Phone}</div>
        {
          userProfile.children ?
          <div className="table-child">
            {
              parentItem
            }
          </div>
          : null
        }
      </div>
    )
  }
}

export default UserRow;
