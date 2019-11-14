import browserSyncInstance from '../service/browserSyncInstance';
import config from '../config';

const serve = () => {
    browserSyncInstance.init({
        open: true,
        server: config.distPath,
    });

    browserSyncInstance.watch(
        [
            `${config.distPath}/**/*.*`,
            '!**/*.css',
        ],
        browserSyncInstance.reload,
    );
};

export default serve;
