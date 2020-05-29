import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Members as MemberList } from '../../../imports/collections/members';
import MemberDetails from './member-details';

const PER_PAGE = 4;

class Members extends Component {
  componentWillMount() {
    this.page = 1;

    console.log(this.props.members);
  }

  handleButtonClick() {
    Meteor.subscribe('members', PER_PAGE * (this.page + 1));
    this.page += 1;
  }

  render() {
    // props.employees => an array of employee objects
    console.log(this.props.members);
    return (
      <div className="container members">
        <div>
          <div className="member-list">
            {this.props.members.map((member) => (
              <MemberDetails key={member._id} member={member} />
            ))}
          </div>
          <button
            onClick={this.handleButtonClick.bind(this)}
            className="btn btn-primary pull-right"
          >
            Load More...
          </button>
        </div>
      </div>
    );
  }
}

export default withTracker(() => {
  // set up subscription
  Meteor.subscribe('members', PER_PAGE);

  // return an object.  Whatever we return will be sent to Members
  // as props
  return { members: MemberList.find({}).fetch() };
})(Members);
