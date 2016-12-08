Example App with Java PlayFramework as REST API and ReactJS as frontend build.

Frontend build is performed using NPM and Webpack and is integrated into SBT build.

#### Running in DEV mode

```
# npm install every time package.json changes dependencies
$ npm install
$ activator run
```

#### Running in STAGE or DIST

```
$ npm install
$ activator dist/stage
```

#### See that it works

http://localhost:9000/route-one prints `Greetings super nice Play user`
http://localhost:9000/route-two prints `Hello RouteTwo`

#### Application code structure

- `api` package should contain REST Api code.
- `assets` package should container Frontend code
  - playentrypoint package contains index.html and index controller to be which gets returned for all unrouted requests
  - routes file contains:

  ```
  GET     /      assets.playentrypoint.IndexController.index()
  GET     /*path assets.playentrypoint.IndexController.wildcardIndex(path)
  ```

  to make sure index page is returned for all unmatched requests. Let React routing logic decide what to do next

### Build integration

#### JS code reload on change

project/Webpack.scala has implemented PlayRunHook that runs `webpack --watch` after `run`. This gives the effect of
reload of JS on change.

#### Dist build

When running `dist` or `stage` npmProdBuildTask.sbt runs webpack with production flags.
webpack.conf.js has stuff like uglify that minimizes js
