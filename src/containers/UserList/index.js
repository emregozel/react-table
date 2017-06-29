import React, { Component, PropTypes} from 'react';

class UserList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      openDetail: false
    }
  }

  parentUserToggle (item, index) {
    this.setState({
      openDetail: !this.state.openDetail
    })
  }

  render() {
    const { userProfile, index } = this.props;
    let parentUserItem = null;
    if (userProfile.children instanceof Object) {
      parentUserItem = userProfile.children.map((children, index) => {
        return <UserList key={children.ID} index={index} userProfile={children} />
      });
    }
    return (
      <div className="table-row" key={index}>
        <div className="col-md-1">
          {
            userProfile.children ?
            <button
              className="btn btn-primary"
              onClick={this.parentUserToggle.bind(this, userProfile.children)}
            > {this.state.openMessage ? 'CLOSE' : 'OPEN'} </button>
            : null
          }
        </div>
        <div className="col-md-3">{userProfile.Name}</div>
        <div className="col-md-3">{userProfile.City}</div>
        <div className="col-md-3">{userProfile.Phone}</div>
        <div className="col-md-2">
          <button
            className="btn btn-danger"
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
