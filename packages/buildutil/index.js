require('require-json5').replace()
const through2 = require('through2')
const MinecraftAddonBuilder = require("minecraft-addon-toolchain/v1");

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


module.exports = function getGulpConfig(addonName) {
    const builder = new MinecraftAddonBuilder(addonName);
    builder.addPlugin(new CJSONPlugin())

    return builder.configureEverythingForMe();
}
