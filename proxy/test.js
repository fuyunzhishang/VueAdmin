var http = require('http');
//创建http服务
var app = http.createServer(function (req, res) {
    //查询本机ip
    var sreq = http.request({
        host: 'www.baidu.com', //目标主机
        path: '?wd=', //目标路径
        method: req.method //请求方式
    }, function(sres) {
        sres.pipe(res);
        sres.on('end', function() {
            console.log(req.url);
        })
    });
    if (/POST|PUT/i.test(req.method)) {
        req.pipe(sreq);
    } else {
        sreq.end();
    }
});

app.listen(3001);
console.log("server started on localhost:3001");