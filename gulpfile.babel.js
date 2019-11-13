import gulp from 'gulp';
import clean from './gulp/tasks/clean';
import fonts from './gulp/tasks/fonts';
import files from './gulp/tasks/files';
import externalStyles from './gulp/tasks/externalStyles';
import pages from './gulp/tasks/pug';
import styles from './gulp/tasks/styles';
import { scripts, scriptsServe } from './gulp/tasks/scripts';
import watch from './gulp/tasks/watch';
import serve from './gulp/tasks/serve';
import addVersions from './gulp/tasks/addVersions';
import images from './gulp/tasks/images';
import svgSprite from './gulp/tasks/svgSprite';

gulp.task('development', gulp.series(
    clean,
    gulp.parallel(
        fonts,
        files,
        images,
        svgSprite,
        externalStyles,
        pages,
        styles,
        scriptsServe(),
    ),
    gulp.parallel(
        watch,
        serve,
    ),
));

gulp.task('build', gulp.series(
    clean,
    gulp.parallel(
        fonts,
        files,
        images,
        svgSprite,
        externalStyles,
        pages,
        styles,
        scripts(),
    ),
    gulp.series(addVersions),
));

gulp.task('t', gulp.series(scriptsServe()));

gulp.task('default', gulp.series('development'));
