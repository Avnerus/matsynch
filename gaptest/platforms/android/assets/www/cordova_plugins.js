cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.knowledgecode.cordova.websocket/www/websocket.js",
        "id": "com.knowledgecode.cordova.websocket.websocket",
        "clobbers": [
            "WebSocket"
        ]
    },
    {
        "file": "plugins/com.phonegap.plugins.video/3.0.0/www/video.js",
        "id": "com.phonegap.plugins.video.VideoPlayer",
        "clobbers": [
            "VideoPlayer"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.knowledgecode.cordova.websocket": "0.8.0",
    "com.phonegap.plugins.video": "1.0.0"
}
// BOTTOM OF METADATA
});