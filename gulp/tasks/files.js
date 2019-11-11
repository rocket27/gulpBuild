import gulp from 'gulp';
import config from '../config';

const files = () => gulp.src(config.assets.files)
    .pipe(gulp.dest(`${config.distPath}/assets/files`));

export default files;
