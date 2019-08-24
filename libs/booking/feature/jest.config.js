module.exports = {
  name: 'booking-feature-flights',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/booking/feature-flights',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
