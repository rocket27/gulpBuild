import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import config from '../config';

const images = () => gulp.src(config.globPaths.images)
    .pipe(imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.jpegtran({ progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
            plugins: [
                { removeViewBox: true },
                { cleanupIDs: false },
            ],
        }),
    ]))
    .pipe(gulp.dest(config.targetPaths.images));

export default images;
