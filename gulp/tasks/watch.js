import gulp from 'gulp';
import config from '../config';
import files from './files';
import fonts from './fonts';
import images from './images';
import pug from './pug';
import styles from './styles';
import svgSprite from './svgSprite';
import { scriptsServe } from './scripts';

const watch = () => {
    gulp.watch(config.globPaths.files, gulp.series(files));
    gulp.watch(config.globPaths.fonts, gulp.series(fonts));
    gulp.watch(config.globPaths.images, gulp.series(images));
    gulp.watch(config.globPaths.scripts, gulp.series(scriptsServe()));
    gulp.watch(config.globPaths.styles, gulp.series(styles));
    gulp.watch(config.globPaths.svg, gulp.series(svgSprite));
    gulp.watch(config.globPaths.templates, gulp.series(pug));
};

export default watch;
