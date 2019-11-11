import gulp from 'gulp';
import config from '../config';
import pug from './pug';
import styles from './styles';
import { scriptsServe } from './scripts';

const watch = () => {
    // gulp.watch(`${config.sourcePath}/assets/images/**/*.*`, gulp.series('images'));
    // gulp.watch(`${config.sourcePath}/assets/svg/**/*.svg`, gulp.series('svgSprite'));
    gulp.watch(`${config.sourcePath}/templates/**/*.pug`, gulp.series(pug));
    gulp.watch(`${config.sourcePath}/styles/**/*.scss`, gulp.series(styles));
    gulp.watch(`${config.sourcePath}/js/**/*.js`, gulp.series(scriptsServe));
};

export default watch;
