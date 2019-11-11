import cleanCss from 'gulp-clean-css';
import concat from 'gulp-concat';
import gulp from 'gulp';
import config from '../config';

const externalStyles = () => gulp.src(config.stylesPaths.externalCss)
    .pipe(cleanCss({ compatibility: 'ie8' }))
    .pipe(concat('external.css'))
    .pipe(gulp.dest(config.targetPaths.styles));

export default externalStyles;
