var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var soap = require('soap');
var querystring = require('querystring');
var loginUrl = 'http://wms.hzd.highstore.cn/rights/RightsServiceForMultiApp.asmx?wsdl';

// var args= {userNo:'050050', password:'hc123456', appNo:'1008'}


var server = http.createServer((req, res) => {
    //设置接受数据编码格式为UTF-8
    //req.setEncoding('utf-8');
    var postData = '';
    //数据块接收中
    req.addListener('data', (postDataChunk) => {
        postData += postDataChunk;
    });
    //数据接收完毕，执行回调函数
    req.addListener('end', () => {
        console.log('数据接收成功！');
        console.log(postData);
        var params = querystring.parse(postData);
        console.log(params);
        res.writeHead(200, {
                "Content-Type": "text/plain;charset=utf-8"
            });
            soap.createClient(loginUrl, function(err, client) {
                client.LoginToApp(params, function(err, result) {
                    if(err) {
                        console.log(err);
                    }else {
                        //console.log(result);
                        console.log(result.LoginToAppResult.diffgram.DocumentElement.Result);
                        var loginResult = result.LoginToAppResult.diffgram.DocumentElement.Result;
                        var args = {userNo:params.userNo, guid:loginResult.GUID, appNo:params.appNo};
                        client.GetUserInfo(args, function(err, result) {
                            if(err) {
                                console.log(err);
                            }else {
                                var getUserResult = result.GetUserInfoResult.diffgram.DocumentElement.User;
                                loginResult.userName = getUserResult.USERNAME;
                                console.log(getUserResult);
                                 res.end(querystring.stringify(loginResult));
                            }
                        })
                    }
                })
            })
            
        })
    })
    
    server.listen(3001);
    console.log('server started on localhost:3001');