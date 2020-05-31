import React, { useEffect } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Jobs } from '../../../imports/collections/jobs';

const JobsEditor = ({ bin, create, jobId }) => {
  useEffect(() => {
    console.log(jobId, create);
    console.log(bin);
  });
  const renderCreate = () => {
    if (create) {
      return (
        <div className="row job">
          {/* <div className="col-sm-6">
            <label>Enter Details</label>
            <input
              type="text"
              name="title"
              value={jobs.title}
              className="form-control"
              placeholder="Ex: Redesign logo"
            />
            <label>Priority Status</label>
            <select
              name="priority"
              onChange={handleChange}
              className="form-control"
            >
              <option value="low">Default: Low</option>
              <option style={{ color: 'red' }} value="urgent">
                Urgent
              </option>
            </select>
            <label>Approx. time for completion</label>
            <input
              name="tminus"
              value={job}
              type="number"
              className="form-control"
              placeholder="In days"
            />
          </div>
          <div className="col-sm-6">
            <label>Short Desc.</label>
            <input
              type="text"
              className="form-control"
              placeholder="Redesign the team;s logo"
            />
            <label>Assign To</label>
            <select className="form-control">
              <option>Default: None</option>
              <option>Ningshen</option>
              <option>John Doe</option>
            </select>
            <br />
            <br />
            <button onClick={updateJob} className="btn btn-sm btn-success">
              Create Job
            </button>
            <button
              onClick={(e) => setCreate(false)}
              className="btn btn-sm btn-danger pull-right"
            >
              Close/Cancel
            </button>
          </div> */}
        </div>
      );
    } else {
      <div></div>;
    }
  };

  return <div>{renderCreate()}</div>;
};

export default withTracker((props) => {
  const { jobId } = props.params; // Error: Fix props.params undefined.
  Meteor.subscribe('jobs');
  return { job: Jobs.findOne(jobId) };
})(JobsEditor);
