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

// const browserSync = require('browser-sync').create();
// const gulp = require('gulp');
// const loadPlugin = require('gulp-load-plugins')();
// const imagemin = require('gulp-imagemin');
// const config = {
//     distPath: './dist',
//     externalStyles: [
//         './node_modules/normalize.css/normalize.css',
//     ],
//     sourcePath: './source',
// };

// gulp.task('images', () => {
//     return gulp.src(
//         `${config.sourcePath}/assets/images/**/*.*`,
//         { since: gulp.lastRun('images') },
//     )
//         .pipe(imagemin([
//             imagemin.gifsicle({ interlaced: true }),
//             imagemin.jpegtran({ progressive: true} ),
//             imagemin.optipng({ optimizationLevel: 5 }),
//             imagemin.svgo({
//                 plugins: [
//                     { removeViewBox: true },
//                     { cleanupIDs: false },
//                 ],
//             }),
//         ]))
//         .pipe(gulp.dest(`${config.distPath}/assets/images`))
// });

// gulp.task('svgSprite', () => {
//     return gulp.src(`${config.sourcePath}/assets/svg/**/*.svg`)
//         .pipe(loadPlugin.svgmin({
//             js2svg: {
//                 pretty: true,
//             },
//         }))
//         .pipe(loadPlugin.cheerio({
//             run: ($) => {
//                 $('[fill]').removeAttr('fill');
//                 $('[stroke]').removeAttr('stroke');
//                 $('[style]').removeAttr('style');
//             },
//             parserOptions: { xmlMode: true },
//         }))
//         .pipe(loadPlugin.replace('&gt;', '>'))
//         .pipe(loadPlugin.svgSprite({
//             mode: {
//                 symbol: {
//                     sprite: "../sprite.svg",
//                 },
//             },
//         }))
//         .pipe(gulp.dest(`${config.distPath}/assets/images`))
// });

// gulp.task('addVersions', () => {
//     return gulp.src(`${config.distPath}/*.html`)
//         .pipe(loadPlugin.replace(new RegExp('.js"', 'g'), '.js?v=' + new Date().getTime() + '"'))
//         .pipe(loadPlugin.replace(new RegExp('.css"', 'g'), '.css?v=' + new Date().getTime() + '"'))
//         .pipe(gulp.dest(config.distPath));
// })

gulp.task('development', gulp.series(
    clean,
    gulp.parallel(
        fonts,
        files,
        // 'images',
        // 'svgSprite',
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
        // 'images',
        // 'svgSprite',
        externalStyles,
        pages,
        styles,
        scripts(),
    ),
    // gulp.series('addVersions'),
));
gulp.task('t', gulp.series(scriptsServe()));
gulp.task('default', gulp.series('development'));
