module.exports = {
  name: 'shared-ui-common',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/ui-common',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
