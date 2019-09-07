module.exports = {
  name: 'ngx-utility-logger',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/shared/ngx-utility/logger',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
