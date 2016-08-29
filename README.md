Skeleton: React + Redux with Bootstrap
======================================

This is a simple skeleton to start out a barebones React + Redux app with Bootstrap styles.  For actual [React Bootstrap](react-bootstrap), do `npm install --save react-bootstrap`.



Things
------

- Scripts are processed with [Browserify](http://browserify.org/), using [Watchify](https://github.com/substack/watchify) to make incremental builds during dev, and squished using [uglifyify](https://github.com/hughsk/uglifyify).  [envify](https://github.com/hughsk/envify) subs in environment variables for dead code elimination by uglifyify, and [babelify](https://github.com/babel/babelify) converts your ES6/ESNext to ES5.
- Styles are compiled using [LESS](http://lesscss.org/) (via [gulp-less](https://github.com/plus3network/gulp-less)) and passed through [postcss](https://github.com/postcss/postcss) (via [gulp-postcss](https://github.com/postcss/gulp-postcss)) to handle [autoprefixer](https://github.com/postcss/autoprefixer) and [cssnano](http://cssnano.co/).


### Other Things

#### SASS

Install: `npm install --save-dev gulp-sass gulp-if`

Add to build process:

```js
const less = require( 'gulp-less' );
const sass = require( 'gulp-sass' );

// ...

// Mixed LESS/SASS/CSS
gulp.task( 'site:styles', () => {
	return gulp.src([ /* ... */ ])
		.pipe( buildEnv === 'production' ? sourcemaps.init() : gutil.noop() )
		.pipe( gulpIf( /\.less$/, less( /* ... */ ) ) )
		// Add sass
		.pipe( gulpIf( /\.(scss|sass)$/, sass( /* config here! */ ) ) )
		.pipe( postcss( /* ... */ ))
		// ...
		;
});

// Or, pure SASS
gulp.task( 'site:styles', () => {
	return gulp.src([ /* ... */ ])
		.pipe( buildEnv === 'production' ? sourcemaps.init() : gutil.noop() )
		// Add sass
		.pipe( sass( /* config here! */ ) )
		.pipe( postcss( /* ... */ ))
		// ...
		;
});
```



Dependencies
------------

### Global Dev Deps

- [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react)



[react-bootstrap]: https://react-bootstrap.github.io/
