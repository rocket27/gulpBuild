import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import gulp from 'gulp';
import yargs from 'yargs';
import config from '../config';
import jslint from './eslint';
import webpackConfig from '../../webpack.config';
import browserSyncInstance from '../service/browserSyncInstance';

const webpackSettings = webpackConfig;
const { argv } = yargs;
const production = !!argv.production;

const setMode = (env = production) => {
    webpackSettings.mode = env ? 'production' : 'development';
    webpackSettings.devtool = env ? false : 'source-map';
    webpackSettings.optimization = {
        minimize: env,
    };
    console.log(webpackSettings);
};

// const js = () => gulp.src(config.jsPath)
//     .pipe(webpackStream(webpackSettings), webpack)
//     .pipe(gulp.dest(config.targetPaths.scripts))
//     .on('end', browserSyncInstance.reload);
const js = () => {
    console.log('js');

    return gulp.src(config.jsPath)
        .pipe(webpackStream(webpackSettings), webpack)
        .pipe(gulp.dest(config.targetPaths.scripts))
        .on('end', browserSyncInstance.reload);
};

const scriptsServe = (cb) => {
    setMode();

    gulp.series(
        // (callback) => {
        //     setMode();
        //     callback();
        // },
        jslint,
        js,
    );

    cb();
};

const scripts = (cb) => {
    gulp.series(
        (callback) => {
            setMode(true);
            callback();
        },
        jslint,
        js,
    );

    cb();
};

export { scriptsServe, scripts };
