const proxyTarget = process.env.API_SERVER;
console.log('sssssss');
module.exports = {
    devServer: {
        open: true, //浏览器自动打开页面
        host: "localhost", //如果是真机测试，就使用这个IP
        port: 9527,
        https: false,
        hotOnly: false, //热更新（webpack已实现了，这里false即可）
        proxy: {
            //配置跨域
            '/api': {
                target: "http://127.0.0.1:3000/",
                ws:true,
                changOrigin:true,
                pathRewrite:{
                    '^/api':'/'
                }
            }
        }
    }
}
