module.exports = {
  name: 'boarding-feature-boarding',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/boarding/feature-boarding',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
