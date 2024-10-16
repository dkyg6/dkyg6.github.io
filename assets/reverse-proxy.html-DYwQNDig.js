import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as s,o as i}from"./app-BlitenSH.js";const t={};function d(l,e){return i(),a("div",null,e[0]||(e[0]=[s(`<h1 id="反向代理" tabindex="-1"><a class="header-anchor" href="#反向代理"><span>反向代理</span></a></h1><p>程序默认监听 5244 端口。如有修改，请一并修改下列配置中的端口号。如果你使用反向代理，建议你设置[site_url]以帮助alist更好的工作。</p><div class="hint-container tip"><p class="hint-container-title">反向代理非标准端口或启用https后丢失https或端口号/无法播放视频?</p><p>你需要通过正确的Host头,请参考</p></div><h2 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx"><span><strong>nginx</strong></span></a></h2><p>在网站配置文件的 server 字段中添加</p><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code>location / {
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header X-Forwarded-Proto $scheme;
  proxy_set_header Host $http_host;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header Range $http_range;
	proxy_set_header If-Range $http_if_range;
  proxy_redirect off;
  proxy_pass http://127.0.0.1:5244;
  # the max size of file to upload
  client_max_body_size 20000m;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="如何对子目录进行反向代理" tabindex="-1"><a class="header-anchor" href="#如何对子目录进行反向代理"><span><strong>如何对子目录进行反向代理？</strong></span></a></h3><p>使用 nginx 反向代理示例：</p><ul><li>正常安装</li><li>将 [site_url] 设置为 <code>https://nn.ci/alist</code> 或者仅<code>/alist</code>, 然后重启alist</li><li>在 nginx 中添加反向代理配置</li></ul><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> /alist/</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-Proto <span class="token variable">$scheme</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$http_host</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> Range <span class="token variable">$http_range</span></span><span class="token punctuation">;</span>
	  <span class="token directive"><span class="token keyword">proxy_set_header</span> If-Range <span class="token variable">$http_if_range</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_redirect</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span> http://127.0.0.1:5244/alist</span><span class="token punctuation">;</span>
    <span class="token comment"># the max size of file to upload</span>
    <span class="token directive"><span class="token keyword">client_max_body_size</span> <span class="token number">20000m</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果需要使用HTTP/3，需要将对应<code>HOST</code>行修改为：</p><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code>proxy_set_header Host $host:$server_port;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样修改后的配置同时也可以兼容HTTP/2及更低版本的请求。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>如果使用宝塔面板，请务必删除以下默认配置</p><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code>- location ~ ^/(\\.user.ini|\\.htaccess|\\.git|\\.svn|\\.project|LICENSE|README.md
- location ~ .\\*\\.(gif|jpg|jpeg|png|bmp|swf)$
- location ~ .\\*\\.(js|css)?$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>并在<code>/www/server/nginx/conf/proxy.conf</code>中或对应网站配置文件中设置禁用Nginx缓存，否则默认配置下访问较大文件时Nginx会先尝试将远程文件缓存至本机，导致播放失败</p><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code>proxy_cache cache_one; # 删除这一行
proxy_max_temp_file_size 0; #加上这一行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="apache" tabindex="-1"><a class="header-anchor" href="#apache"><span><strong>Apache</strong></span></a></h2><p>在 VirtualHost 字段下添加配置项 ProxyPass，如：</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VirtualHost</span> <span class="token attr-name"><span class="token namespace">*:</span>80</span><span class="token punctuation">&gt;</span></span>
    ServerName myapp.example.com
    ServerAdmin webmaster@example.com
    DocumentRoot /www/myapp/public

    AllowEncodedSlashes NoDecode
    ProxyPass &quot;/&quot; &quot;http://127.0.0.1:5244/&quot; nocanon
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>VirtualHost</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="caddy" tabindex="-1"><a class="header-anchor" href="#caddy"><span><strong>Caddy</strong></span></a></h2><p>在 Caddyfile 文件下添加 reverse_proxy，如：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>:80 {
  reverse_proxy 127.0.0.1:5244
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果部署在 443 端口正常使用的服务器上且使用域名进行访问，建议使用这种配置让 Caddy 自动申请证书：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>example.com {
  reverse_proxy 127.0.0.1:5244
}

将 \`example.com\` 替换为你自己解析后的域名。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote></blockquote>`,23)]))}const c=n(t,[["render",d],["__file","reverse-proxy.html.vue"]]),p=JSON.parse('{"path":"/index/Alist/install/reverse-proxy.html","title":"反向代理","lang":"zh-CN","frontmatter":{"icon":"iconfont icon-page","order":11,"category":["Guide"],"tag":["Install","Guide"],"sticky":true,"star":true},"headers":[{"level":2,"title":"nginx","slug":"nginx","link":"#nginx","children":[{"level":3,"title":"如何对子目录进行反向代理？","slug":"如何对子目录进行反向代理","link":"#如何对子目录进行反向代理","children":[]}]},{"level":2,"title":"Apache","slug":"apache","link":"#apache","children":[]},{"level":2,"title":"Caddy","slug":"caddy","link":"#caddy","children":[]}],"git":{"createdTime":1729050589000,"updatedTime":1729050589000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.93,"words":579},"filePathRelative":"index/Alist/install/reverse-proxy.md","localizedDate":"2024年10月16日","excerpt":"\\n<p>程序默认监听 5244 端口。如有修改，请一并修改下列配置中的端口号。如果你使用反向代理，建议你设置[site_url]以帮助alist更好的工作。</p>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">反向代理非标准端口或启用https后丢失https或端口号/无法播放视频?</p>\\n<p>你需要通过正确的Host头,请参考</p>\\n</div>\\n<h2><strong>nginx</strong></h2>\\n<p>在网站配置文件的 server 字段中添加</p>\\n<div class=\\"language-conf\\" data-ext=\\"conf\\" data-title=\\"conf\\"><pre class=\\"language-conf\\"><code>location / {\\n  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\\n  proxy_set_header X-Forwarded-Proto $scheme;\\n  proxy_set_header Host $http_host;\\n  proxy_set_header X-Real-IP $remote_addr;\\n  proxy_set_header Range $http_range;\\n\\tproxy_set_header If-Range $http_if_range;\\n  proxy_redirect off;\\n  proxy_pass http://127.0.0.1:5244;\\n  # the max size of file to upload\\n  client_max_body_size 20000m;\\n}\\n</code></pre></div>"}');export{c as comp,p as data};
