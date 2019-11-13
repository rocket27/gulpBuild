import cleanCss from 'gulp-clean-css';
import gulp from 'gulp';
import sassGlob from 'gulp-sass-glob';
import loadPluginInstance from '../service/loadPluginInstance';
import config from '../config';
import browserSyncInstance from '../service/browserSyncInstance';

const styles = () => gulp.src(config.stylesPaths.stylesBundle)
    .pipe(loadPluginInstance
        .sourcemaps.init())
    .pipe(sassGlob())
    .pipe(loadPluginInstance
        .sass())
    .on('error', loadPluginInstance.notify.onError((error) => ({
        title: 'Styles',
        message: error.message,
    })))
    .pipe(loadPluginInstance
        .autoprefixer({ cascade: false }))
    .pipe(cleanCss(config.pluginsConfigs.cleanCss))
    .pipe(loadPluginInstance.sourcemaps.write())
    .pipe(gulp.dest(config.targetPaths.styles))
    .pipe(browserSyncInstance.stream());

export default styles;
