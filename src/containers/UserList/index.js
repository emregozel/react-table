import React, { Component, PropTypes} from 'react';
import { Table, Collapse } from 'react-bootstrap';

class UserList extends Component {

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
    const { userProfile, index, key, removeUser } = this.props;
    let parentUserItem = null;
    if (userProfile.children instanceof Object) {
      parentUserItem = userProfile.children.map((children, index) => {
        return <UserList key={children.ID} index={index} userProfile={children} />
      });
    }
    return (
      <div className="table-row" key={index}>
        <div className="col-md-2">
          {
            userProfile.children ?
            <button
              onClick={this.parentUserToggle.bind(this, userProfile.children)}
            > Open </button>
            : null
          }
        </div>
        <div className="col-md-2">{userProfile.Name}</div>
        <div className="col-md-2">{userProfile.City}</div>
        <div className="col-md-2">{userProfile.Phone}</div>
        <div className="col-md-2">
          <button
            onClick={this.props.removeUser}
          > Remove User </button>
        </div>
        <div className={this.state.openDetail ? 'table-true' : 'table-false'}>
          {
            parentUserItem
          }
        </div>
      </div>
    );
  }
}

UserList.propTypes = {
  userProfile: PropTypes.object
};

UserList.defaultProps = {
  userProfile: {
    children: {}
  }
}

export default UserList;
