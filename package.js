Package.describe({
  name: 'lookback:html-to-text',
  summary: 'Meteor wrapper',
  version: '2.1.3_1',
  git: 'https://github.com/lookback/html-to-text.git'
});

Npm.depends({
  'html-to-text': '2.1.3'
});

Package.onUse(function(api) {
  api.mainModule('export.js', 'server');
});
