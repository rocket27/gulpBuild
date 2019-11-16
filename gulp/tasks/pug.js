import gulp from 'gulp';
import notify from 'gulp-notify';
import pug from 'gulp-pug';
import config from '../config';
import content from '../../source/pugContent.json';

const pages = () => gulp.src(config.pugPaths.templates)
    .pipe(pug({
        locals: content,
        pretty: true,
    }))
    .on('error', notify.onError((error) => ({
        title: 'Pug',
        message: error.message,
    })))
    .pipe(gulp.dest(config.distPath));

export default pages;
