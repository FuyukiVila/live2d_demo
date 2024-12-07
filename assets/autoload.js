try {
    const path = 'https://fastly.jsdelivr.net/gh/fuyukivila/live2d_demo@@latest/'
    $("<link>").attr({href: path + "assets/waifu.min.css?v=1.4.2", rel: "stylesheet", type: "text/css"}).appendTo('head');
    $('body').append('<div class="waifu"><div class="waifu-tips"></div><canvas id="live2d" class="live2d"></canvas><div class="waifu-tool"><span class="fui-home"></span> <span class="fui-chat"></span> <span class="fui-eye"></span> <span class="fui-user"></span> <span class="fui-photo"></span> <span class="fui-info-circle"></span> <span class="fui-cross"></span></div></div>');
    $.ajax({url: path + "assets/waifu-tips.min.js?v=1.4.2", dataType:"script", cache: true, success: function() {
            $.ajax({url: path + "assets/live2d.min.js?v=1.0.5", dataType:"script", cache: true, success: function() {
                    /* 可直接修改部分参数 */
                    live2d_settings['hitokotoAPI'] = "hitokoto.cn";  // 一言 API
                    live2d_settings['modelId'] = 1;                  // 默认模型 ID
                    live2d_settings['modelTexturesId'] = Math.floor(Math.random() * 87) + 1;          // 默认材质 ID
                    live2d_settings['modelStorage'] = false;         // 不储存模型 ID
                    live2d_settings['waifuSize'] = '336x300';
                    live2d_settings['waifuFontSize'] = '14px';
                    live2d_settings['showF12Message'] = true;
                    live2d_settings['showToolMenu'] = false;
                    /* 在 initModel 前添加 */
                    initModel(path + "assets/waifu-tips.json");
                }});
        }});
} catch(err) { console.log("[Error] JQuery is not defined.") }