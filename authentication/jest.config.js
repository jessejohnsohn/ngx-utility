module.exports = {
  name: 'shared-utility-authentication',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/shared/utility/authentication',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
