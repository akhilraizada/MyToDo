cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "com.couchbase.lite.phonegap.CouchbaseLite",
        "file": "plugins/com.couchbase.lite.phonegap/www/cblite.js",
        "pluginId": "com.couchbase.lite.phonegap",
        "clobbers": [
            "window.cblite"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.couchbase.lite.phonegap": "1.3.1",
    "cordova-plugin-whitelist": "1.3.1"
};
// BOTTOM OF METADATA
});