import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Jobs } from '../../../imports/collections/jobs';

class JobEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      desc: '',
      complete: '',
      priority: '',
      assignTo: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.createNewJob = this.createNewJob.bind(this);
  }
  handleChange(e) {
    console.log(e.target.value);
    this.setState((e.target.name = [e.target.value]));
  }

  createNewJob() {
    console.log(this.state);

    Meteor.call('jobs.insert', (error, jobId) => {
      console.log(jobId);
    });
  }
  render() {
    return (
      <div className="row job">
        <div className="col-sm-6">
          <label>Enter Details</label>
          <input
            onChange={(e) => this.setState({ title: e.target.value })}
            type="text"
            name="title"
            className="form-control"
            placeholder="Ex: Redesign logo"
          />
          <label>Priority Status</label>
          <br />

          <input
            onChange={(e) => this.setState({ priority: e.target.value })}
            type="radio"
            value="low"
            name="priority"
            defaultChecked
          />
          {' Default:Low '}
          <br />
          <input
            onChange={(e) => this.setState({ priority: e.target.value })}
            type="radio"
            value="intemediate"
            name="priority"
          />
          {' Intermediate'}
          <br />
          <input
            onChange={(e) => this.setState({ priority: e.target.value })}
            type="radio"
            value="high"
            name="priority"
          />
          {' High:Urgent'}
          <br />
          <label>Approx. time for completion</label>
          <input
            onChange={(e) => this.setState({ complete: e.target.value })}
            name="complete"
            type="number"
            className="form-control"
            placeholder="In days"
          />
        </div>
        <div className="col-sm-6">
          <label>Short Desc.</label>
          <input
            onChange={(e) => this.setState({ desc: e.target.value })}
            name="desc"
            type="text"
            className="form-control"
            placeholder="Redesign the team;s logo"
          />
          <label>Assign To</label>
          <select
            onChange={(e) => this.setState({ assignTo: e.target.value })}
            name="assignTo"
            className="form-control"
          >
            <option value="none">Default: None</option>
            <option value="ningshen">Ningshen</option>
            <option value="john doe">John Doe</option>
          </select>
          <br />
          <br />
          <br />
          <br />

          <button
            onClick={this.createNewJob}
            className="btn btn-sm btn-success form-control"
          >
            Create Job
          </button>
        </div>
      </div>
    );
  }
}

export default JobEditor;
