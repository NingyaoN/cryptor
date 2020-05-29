// Only executed on the server
import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
import { Members } from '../imports/collections/members';
import { image, helpers } from 'faker';

Meteor.startup(() => {
  // Great place to generate data

  // Check to see if data exists in the collection
  // See if the collection has any records
  const numberRecords = Members.find({}).count();
  if (!numberRecords) {
    // Generate some data...

    _.times(5000, () => {
      const { name, email, phone } = helpers.createCard();

      Members.insert({
        name,
        email,
        phone,
        avatar: image.avatar(),
      });
    });
  }

  Meteor.publish('members', function (per_page) {
    return Members.find({}, { limit: per_page });
  });
});
