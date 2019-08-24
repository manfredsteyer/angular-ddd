module.exports = {
  name: 'boarding-domain-boarding',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/boarding/domain-boarding',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
