# Local Development HTTPS with Gulp Watch


## Usage
Use for small scale local development when https is required. Local server is require (xampp) with ssl certificates installed locally.

Live reload and browserSync watches JavaScript and Html Files for changes in 'src' folder.

**NO SCSS support**

**Needs Virtual Host to Run???**

### Installation

**Install the dependencies**

```
$ npm install
```

### Configure gulpfile.js

```
const HOST = 'example.dev' // virtual host address
const ROOT = '/path/to/root/'
```

### Run
```
$ gulp watch
```


### Version

1.0.0 
- Initial Setup