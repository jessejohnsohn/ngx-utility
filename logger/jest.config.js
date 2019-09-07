module.exports = {
  name: 'shared-utility-logger',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/shared/utility/logger',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
