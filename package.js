Package.describe({
  name: 'lookback:html-to-text',
  summary: 'Meteor wrapper',
  version: '2.1.3_2',
  git: 'https://github.com/johanbrook/html-to-text.git',
  documentation: null
});

Npm.depends({
  'html-to-text': '2.1.3'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use(['ecmascript'], 'server');
  api.mainModule('export.js', 'server');
});
