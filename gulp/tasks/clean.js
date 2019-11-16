import del from 'del';
import config from '../config';

const clean = (cb) => del(config.distPath, cb);

export default clean;
