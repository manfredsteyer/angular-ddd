module.exports = {
  name: 'booking-domain-flights',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/booking/domain-flights',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
