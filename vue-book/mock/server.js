let http=require('http');
let url=require('url');
let fs=require('fs');//文件读取
function read(cb) {
  //如果有书返回书的集合，没书就是空数组
  fs.readFile('./book.json','utf-8',function (err, data) {
    //如果有错误 走 空数组，没错 走下面数据
    if(err || data.length===0 ){
      cb([]);
    }else {
      cb(JSON.parse(data))
    }
  })
}
read(function (data) {
  //console.log(data);
})

let sliders=require('./sliders');


http.createServer(function (request, response) {
  //获取轮播图数据
  let {pathname,query}=url.parse(request.url,true);
  if(pathname==='/api/getSliders'){
    response.setHeader('Content-Type','application/json;charset=utf-8');
    response.end(JSON.stringify(sliders));
  }else if(pathname==='/api/hot'){
      read(function (data) {
        setTimeout(function () {
          response.setHeader('Content-Type','application/json;charset=utf-8');
          response.end(JSON.stringify(data.reverse().slice(0,9)));
        },2000)
      })
    //对图书的增删改查  /api/book  GET DELETE PUT POST
  }else if (pathname==='/api/book'){
    switch (request.method){
      case 'GET':
        read(function (data) {
          response.setHeader('Content-Type','application/json;charset=utf-8');
          response.end(JSON.stringify(data))
        })
    }
  }

}).listen(8000,function () {
  console.log('ok');
});
// localhost:8080   -> localhost:8000 会跨域



