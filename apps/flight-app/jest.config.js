module.exports = {
  name: 'flight-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/flight-app',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
