module.exports = {
  name: 'booking-api',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/booking/api',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
