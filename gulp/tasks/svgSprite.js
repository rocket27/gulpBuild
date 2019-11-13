import gulp from 'gulp';
import config from '../config';
import loadPluginInstance from '../service/loadPluginInstance';

const svgSprite = () => gulp.src(config.globPaths.svg)
    .pipe(loadPluginInstance.svgmin({
        js2svg: {
            pretty: true,
        },
    }))
    .pipe(loadPluginInstance.cheerio({
        run: ($) => {
            $('[fill]')
                .removeAttr('fill');
            $('[stroke]')
                .removeAttr('stroke');
            $('[style]')
                .removeAttr('style');
        },
        parserOptions: { xmlMode: true },
    }))
    .pipe(loadPluginInstance.replace('&gt;', '>'))
    .pipe(loadPluginInstance.svgSprite({
        mode: {
            symbol: {
                sprite: '../sprite.svg',
            },
        },
    }))
    .pipe(gulp.dest(config.targetPaths.images));

export default svgSprite;
