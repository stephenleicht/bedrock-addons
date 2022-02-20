require('require-json5').replace()
const through2 = require('through2')

debugger;

class CJSONPlugin {
    constructor() {
        this.sourceTasks = [{
            condition: '**/*.cjson',
            task: (packInfo) => through2.obj(function (file, _, cb) {
                const obj = require(file.path);
                const contents = JSON.stringify(obj, null, 2);
                file.contents = Buffer.from(contents);
                file.extname = '.json'
                cb(null, file)
            })
        }]
    }
}

module.exports = CJSONPlugin