import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'jobs.insert': function () {
    return Jobs.insert({
      createdAt: new Date(),
      title: '',
      desc: '',
      priority: '',
      assignTo: {
        name: '',
        id: '',
      },
      timeForCompletion: 0,
    });
  },

  'jobs.remove': function (bin) {
    return Jobs.remove(bin);
  },

  'jobs.update': function (bin, content) {
    return Jobs.update(bin._id, { $set: { content } });
  },
});

export const Jobs = new Mongo.Collection('jobs');
