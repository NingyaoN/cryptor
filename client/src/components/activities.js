import React, { useState, useEffect } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Jobs } from '../../../imports/collections/jobs';
import JobEditor from './job-editor';

const Activities = ({ jobs }) => {
  const [create, setCreate] = useState(false);
  const [jobId, setJobId] = useState();

  const createJob = (e) => {
    e.preventDefault();
    setCreate(true);

    Meteor.call('jobs.insert', (error, jobId) => {
      browserHistory.push(`/${jobId}`);
      setJobId(jobId);
    });
  };

  const updateJob = () => {};
  useEffect(() => {
    console.log(jobs);
  });
  return (
    <div className="container activities">
      <div className="row">
        <div className="col-sm-12 right pull-right">
          {!create ? (
            <div className=" mb-3">
              <button onClick={createJob} className="btn btn-success pull-left">
                Create new job
              </button>
            </div>
          ) : (
            ''
          )}
          <JobEditor create={create} jobId={jobId} />
          <br />
          <br />

          <div>
            <ol>
              <li className="act">
                <label>Web design</label>
                <div className="pull-right">
                  <button className="btn btn-sm btn-warning">Assign</button>
                  <button className="btn btn-sm btn-success">Done</button>
                  <button className="btn btn-sm btn-danger">Remove</button>
                </div>
              </li>
              <li className="act">
                <label>Front-End Design Refactoring</label>
                <div className="pull-right">
                  <button className="btn btn-sm btn-warning">Assign</button>
                  <button className="btn btn-sm btn-success">Done</button>
                  <button className="btn btn-sm btn-danger">Remove</button>
                </div>
              </li>
              <li className="act">
                <label>Web Crawler Re-design</label>
                <div className="pull-right">
                  <button className="btn btn-sm btn-warning">Assign</button>
                  <button className="btn btn-sm btn-success">Done</button>
                  <button className="btn btn-sm btn-danger">Remove</button>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTracker(() => {
  Meteor.subscribe('jobs');
  return { jobs: Jobs.find({}).fetch() };
})(Activities);
