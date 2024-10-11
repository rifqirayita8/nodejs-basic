import { Console } from "console";
import fs from "fs";

const logFile= fs.createWriteStream('app.log');

const log= new Console({
    stdout: logFile,
    stderr: logFile
});

log.info('Ini info');
log.error('Ini error');