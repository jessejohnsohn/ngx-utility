module.exports = {
  name: 'shared-utility-notifications',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/shared/utility/notifications',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
