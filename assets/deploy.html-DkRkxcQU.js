import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as e,o}from"./app-BlitenSH.js";const t={};function i(c,n){return o(),a("div",null,n[0]||(n[0]=[e(`<h1 id="部署服务" tabindex="-1"><a class="header-anchor" href="#部署服务"><span>部署服务</span></a></h1><p>我们使用 <code>docker service</code> 命令来管理 <code>Swarm</code> 集群中的服务，该命令只能在管理节点运行。</p><h2 id="新建服务" tabindex="-1"><a class="header-anchor" href="#新建服务"><span>新建服务</span></a></h2><p>现在我们在上一节创建的 <code>Swarm</code> 集群中运行一个名为 <code>nginx</code> 服务。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> <span class="token function">service</span> create <span class="token parameter variable">--replicas</span> <span class="token number">3</span> <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 <span class="token parameter variable">--name</span> nginx nginx:1.13.7-alpine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>现在我们使用浏览器，输入任意节点 IP ，即可看到 nginx 默认页面。</p><h2 id="查看服务" tabindex="-1"><a class="header-anchor" href="#查看服务"><span>查看服务</span></a></h2><p>使用 <code>docker service ls</code> 来查看当前 <code>Swarm</code> 集群运行的服务。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> <span class="token function">service</span> <span class="token function">ls</span>
ID                  NAME                MODE                REPLICAS            IMAGE                 PORTS
kc57xffvhul5        nginx               replicated          <span class="token number">3</span>/3                 nginx:1.13.7-alpine   *:80-<span class="token operator">&gt;</span><span class="token number">80</span>/tcp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>docker service ps</code> 来查看某个服务的详情。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> <span class="token function">service</span> <span class="token function">ps</span> nginx
ID                  NAME                IMAGE                 NODE                DESIRED STATE       CURRENT STATE                ERROR               PORTS
pjfzd39buzlt        nginx.1             nginx:1.13.7-alpine   swarm2              Running             Running about a minute ago
hy9eeivdxlaa        nginx.2             nginx:1.13.7-alpine   swarm1              Running             Running about a minute ago
36wmpiv7gmfo        nginx.3             nginx:1.13.7-alpine   swarm3              Running             Running about a minute ago
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>docker service logs</code> 来查看某个服务的日志。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> <span class="token function">service</span> logs nginx
nginx.3.36wmpiv7gmfo@swarm3    <span class="token operator">|</span> <span class="token number">10.255</span>.0.4 - - <span class="token punctuation">[</span><span class="token number">25</span>/Nov/2017:02:10:30 +0000<span class="token punctuation">]</span> <span class="token string">&quot;GET / HTTP/1.1&quot;</span> <span class="token number">200</span> <span class="token number">612</span> <span class="token string">&quot;-&quot;</span> <span class="token string">&quot;Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:58.0) Gecko/20100101 Firefox/58.0&quot;</span> <span class="token string">&quot;-&quot;</span>
nginx.3.36wmpiv7gmfo@swarm3    <span class="token operator">|</span> <span class="token number">10.255</span>.0.4 - - <span class="token punctuation">[</span><span class="token number">25</span>/Nov/2017:02:10:30 +0000<span class="token punctuation">]</span> <span class="token string">&quot;GET /favicon.ico HTTP/1.1&quot;</span> <span class="token number">404</span> <span class="token number">169</span> <span class="token string">&quot;-&quot;</span> <span class="token string">&quot;Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:58.0) Gecko/20100101 Firefox/58.0&quot;</span> <span class="token string">&quot;-&quot;</span>
nginx.3.36wmpiv7gmfo@swarm3    <span class="token operator">|</span> <span class="token number">2017</span>/11/25 02:10:30 <span class="token punctuation">[</span>error<span class="token punctuation">]</span> <span class="token number">5</span><span class="token comment">#5: *1 open() &quot;/usr/share/nginx/html/favicon.ico&quot; failed (2: No such file or directory), client: 10.255.0.4, server: localhost, request: &quot;GET /favicon.ico HTTP/1.1&quot;, host: &quot;192.168.99.102&quot;</span>
nginx.1.pjfzd39buzlt@swarm2    <span class="token operator">|</span> <span class="token number">10.255</span>.0.2 - - <span class="token punctuation">[</span><span class="token number">25</span>/Nov/2017:02:10:26 +0000<span class="token punctuation">]</span> <span class="token string">&quot;GET / HTTP/1.1&quot;</span> <span class="token number">200</span> <span class="token number">612</span> <span class="token string">&quot;-&quot;</span> <span class="token string">&quot;Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:58.0) Gecko/20100101 Firefox/58.0&quot;</span> <span class="token string">&quot;-&quot;</span>
nginx.1.pjfzd39buzlt@swarm2    <span class="token operator">|</span> <span class="token number">10.255</span>.0.2 - - <span class="token punctuation">[</span><span class="token number">25</span>/Nov/2017:02:10:27 +0000<span class="token punctuation">]</span> <span class="token string">&quot;GET /favicon.ico HTTP/1.1&quot;</span> <span class="token number">404</span> <span class="token number">169</span> <span class="token string">&quot;-&quot;</span> <span class="token string">&quot;Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:58.0) Gecko/20100101 Firefox/58.0&quot;</span> <span class="token string">&quot;-&quot;</span>
nginx.1.pjfzd39buzlt@swarm2    <span class="token operator">|</span> <span class="token number">2017</span>/11/25 02:10:27 <span class="token punctuation">[</span>error<span class="token punctuation">]</span> <span class="token number">5</span><span class="token comment">#5: *1 open() &quot;/usr/share/nginx/html/favicon.ico&quot; failed (2: No such file or directory), client: 10.255.0.2, server: localhost, request: &quot;GET /favicon.ico HTTP/1.1&quot;, host: &quot;192.168.99.101&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="服务伸缩" tabindex="-1"><a class="header-anchor" href="#服务伸缩"><span>服务伸缩</span></a></h2><p>我们可以使用 <code>docker service scale</code> 对一个服务运行的容器数量进行伸缩。</p><p>当业务处于高峰期时，我们需要扩展服务运行的容器数量。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> <span class="token function">service</span> scale <span class="token assign-left variable">nginx</span><span class="token operator">=</span><span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当业务平稳时，我们需要减少服务运行的容器数量。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> <span class="token function">service</span> scale <span class="token assign-left variable">nginx</span><span class="token operator">=</span><span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="删除服务" tabindex="-1"><a class="header-anchor" href="#删除服务"><span>删除服务</span></a></h2><p>使用 <code>docker service rm</code> 来从 <code>Swarm</code> 集群移除某个服务。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> <span class="token function">service</span> <span class="token function">rm</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,22)]))}const r=s(t,[["render",i],["__file","deploy.html.vue"]]),d=JSON.parse('{"path":"/index/Docker/swarm_mode/deploy.html","title":"部署服务","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"新建服务","slug":"新建服务","link":"#新建服务","children":[]},{"level":2,"title":"查看服务","slug":"查看服务","link":"#查看服务","children":[]},{"level":2,"title":"服务伸缩","slug":"服务伸缩","link":"#服务伸缩","children":[]},{"level":2,"title":"删除服务","slug":"删除服务","link":"#删除服务","children":[]}],"git":{"createdTime":1729050589000,"updatedTime":1729050589000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.62,"words":487},"filePathRelative":"index/Docker/swarm_mode/deploy.md","localizedDate":"2024年10月16日","excerpt":"\\n<p>我们使用 <code>docker service</code> 命令来管理 <code>Swarm</code> 集群中的服务，该命令只能在管理节点运行。</p>\\n<h2>新建服务</h2>\\n<p>现在我们在上一节创建的 <code>Swarm</code> 集群中运行一个名为 <code>nginx</code> 服务。</p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>$ <span class=\\"token function\\">docker</span> <span class=\\"token function\\">service</span> create <span class=\\"token parameter variable\\">--replicas</span> <span class=\\"token number\\">3</span> <span class=\\"token parameter variable\\">-p</span> <span class=\\"token number\\">80</span>:80 <span class=\\"token parameter variable\\">--name</span> nginx nginx:1.13.7-alpine\\n</code></pre></div>"}');export{r as comp,d as data};
