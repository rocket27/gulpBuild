import cleanCss from 'gulp-clean-css';
import gulp from 'gulp';
import loadPlugin from 'gulp-load-plugins';
import sassGlob from 'gulp-sass-glob';
import config from '../config';
import browserSyncInstance from '../service/browserSyncInstance';

const styles = () => gulp.src(config.stylesPaths.stylesBundle)
    .pipe(loadPlugin()
        .sourcemaps.init())
    .pipe(sassGlob())
    .pipe(loadPlugin()
        .sass())
    .on('error', loadPlugin().notify.onError((error) => ({
        title: 'Styles',
        message: error.message,
    })))
    .pipe(loadPlugin()
        .autoprefixer({ cascade: false }))
    .pipe(cleanCss(config.pluginsConfigs.cleanCss))
    .pipe(loadPlugin().sourcemaps.write())
    .pipe(gulp.dest(config.targetPaths.styles))
    .pipe(browserSyncInstance.stream());

export default styles;
