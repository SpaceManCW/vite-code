const Koa = require('koa'); // 必须使用commonjs
const fs = require('fs');
const path = require('path');

// 不同的宿主环境会给js赋予一些不同的能力
const app = new Koa();

// 当请求来临时  会直接进入到use注册的回调函数中
app.use(async (ctx) => { 
  // ctx context 上下文 request ---> 请求信息 响应信息
  console.log("ctx", ctx.request, ctx.response);
  if(ctx.request.url === '/') {
    // 这意味着要请求根路径的东西
    const indexContent = await fs.promises.readFile(path.resolve(__dirname, './index.html'));
    ctx.response.body = indexContent;
    // 响应体设置好了  那么还需要告诉浏览器拿到响应之后以什么形式进行解析
  }
})

app.listen(5173, () => {
  console.log('vite dev serve listen on 5173');
})
