Example App with Java PlayFramework as REST API and Angular 2 as frontend build.

Frontend build is performed using Angular-cli.

#### Setup

```
nvm install stable
npm install -g typescript@2.0.0
npm install -g angular-cli
```

#### Running in DEV mode

```
$ ng build --watch --output-path=public
$ activator run
```

#### Running in STAGE or DIST

```
$ ng build --output-path=public --target=production
$ activator dist/stage
```

#### See that it works

http://localhost:9000

For any not routed URL index.html is returned

#### Application code structure

- `apiui` contains angular code
- `app/assets/playentrypoint/IndexController`
    is entry point for all urls that were not matched
