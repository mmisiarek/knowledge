### Deploying application with grunt and sass

1. All grunt dependencies need to be under `dependecies`
2. `heroku config:add BUILDPACK_URL=https://github.com/ddollar/heroku-buildpack-multi.git`
3. `heroku config:set NODE_ENV=production`
4. Create `Gemfile`:

```ruby
source "http://rubygems.org"
gem "sass"
```
5. Create `Gemfile.lock`:

```ruby
GEM
  remote: http://rubygems.org/
  specs:
    sass (3.4.5)

PLATFORMS
  ruby

DEPENDENCIES
  sass
```
6. Create `.buildpacks`:

```
https://github.com/heroku/heroku-buildpack-ruby.git
https://github.com/heroku/heroku-buildpack-nodejs.git
```
7. In `Gruntfile.js` add line:

```javascript
  grunt.registerTask('heroku:production', 'Building app on heroku', ['build']);
```

