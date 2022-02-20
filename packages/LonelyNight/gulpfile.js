const MinecraftAddonBuilder = require("minecraft-addon-toolchain/v1");
const CJSONPlugin = require('cjson-plugin')

const builder = new MinecraftAddonBuilder("Lonely Night");
builder.addPlugin(new CJSONPlugin())


module.exports = builder.configureEverythingForMe();
