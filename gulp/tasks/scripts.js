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

const js = () => gulp.src(config.globPaths.scripts)
    .pipe(webpackStream(webpackSettings), webpack)
    .pipe(gulp.dest(config.targetPaths.scripts))
    .on('end', browserSyncInstance.reload);

const setMode = (env = production) => {
    webpackSettings.mode = env ? 'production' : 'development';
    webpackSettings.devtool = env ? false : 'source-map';
    webpackSettings.optimization = {
        minimize: env,
    };
};

const scriptsServe = () => gulp.series(
    (cb) => {
        setMode();
        cb();
    },
    jslint,
    js,
);

const scripts = () => gulp.series(
    (cb) => {
        setMode(true);
        cb();
    },
    jslint,
    js,
);

export { scriptsServe, scripts };
