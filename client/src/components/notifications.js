import React, { useEffect } from 'react';

const notices = [
  {
    title: 'Redo',
    desc: 'Re-design the front-end with different framework.',
    assignTo: {
      name: 'john doe',
    },
  },

  {
    title: 'Create Content',
    desc: 'Create a new content for n.js.',
    assignTo: {
      name: 'Lincoln',
    },
    priority: 'intermidiate',
  },
  {
    title: 'refactof',
    desc: 'Re-schedule meeting for ',
    assignTo: {
      name: 'simon',
    },
    priority: 'low',
  },
  {
    title: 'Redesign',
    desc: 'Re-design the front-end with different framework.',
    assignTo: {
      name: 'john smith',
    },
    priority: 'urgent',
  },
];
const Notifications = () => {
  useEffect(() => {
    console.log(notices);
    // const uniqueMembers = notices.filter(
    //   (prev, next) => prev.assignTo.name != next.assignTo.name
    // );
    // console.log(uniqueMembers);
  });
  return (
    <div className="container notifications">
      <div className="row">
        <div className="col-sm-6 pull-right">
          <select className="form-control">
            <option>Filter by Name</option>
            {notices.map((notice) => {
              return (
                <option key={notice.title} value={notice.assignTo.name}>
                  {notice.assignTo.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <ol>
        {notices.map((notice) => {
          return (
            <li className="notices" key={notice.title}>
              <label>{notice.title}:</label>
              <span>
                <i>{notice.assignTo.name}</i>
              </span>{' '}
              <span>
                <button className="btn btn-sm btn-danger" disabled>
                  {notice.priority || '0'}
                </button>
              </span>
              <h4>{notice.desc}</h4>
            </li>
          );
        })}
      </ol>
      <button className="form-control btn btn-primary">Load more ...</button>
    </div>
  );
};

export default Notifications;
