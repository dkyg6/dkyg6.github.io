import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,b as n,e as a,a as i,d as o,o as l,r as d}from"./app-BlitenSH.js";const p={},c={id:"nginx",tabindex:"-1"},m={class:"header-anchor",href:"#nginx"},u={href:"https://hub.docker.com/_/nginx/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://en.wikipedia.org/wiki/Nginx",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/docker-library/docs/tree/master/nginx",target:"_blank",rel:"noopener noreferrer"};function b(h,e){const s=d("ExternalLinkIcon");return l(),t("div",null,[n("h1",c,[n("a",m,[n("span",null,[n("a",u,[e[0]||(e[0]=a("Nginx")),i(s)])])])]),e[6]||(e[6]=n("h2",{id:"基本信息",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#基本信息"},[n("span",null,"基本信息")])],-1)),n("p",null,[n("a",g,[e[1]||(e[1]=a("Nginx")),i(s)]),e[2]||(e[2]=a(" 是开源的高效的 Web 服务器实现，支持 HTTP、HTTPS、SMTP、POP3、IMAP 等协议。"))]),e[7]||(e[7]=o(`<p>该仓库位于 <code>https://hub.docker.com/_/nginx/</code> ，提供了 Nginx 1.0 ~ 1.19.x 各个版本的镜像。</p><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2><p>下面的命令将作为一个静态页面服务器启动。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run <span class="token parameter variable">--name</span> some-nginx <span class="token parameter variable">-v</span> /some/content:/usr/share/nginx/html:ro <span class="token parameter variable">-d</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>用户也可以不使用这种映射方式，通过利用 Dockerfile 来直接将静态页面内容放到镜像中，内容为</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> nginx</span>
<span class="token instruction"><span class="token keyword">COPY</span> static-html-directory /usr/share/nginx/html</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>之后生成新的镜像，并启动一个容器。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> build <span class="token parameter variable">-t</span> some-content-nginx <span class="token builtin class-name">.</span>
$ <span class="token function">docker</span> run <span class="token parameter variable">--name</span> some-nginx <span class="token parameter variable">-d</span> some-content-nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>开放端口，并映射到本地的 <code>8080</code> 端口。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run <span class="token parameter variable">--name</span> some-nginx <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">8080</span>:80 some-content-nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Nginx的默认配置文件路径为 <code>/etc/nginx/nginx.conf</code>，可以通过映射它来使用本地的配置文件，例如</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--name</span> some-nginx <span class="token punctuation">\\</span>
    <span class="token parameter variable">-p</span> <span class="token number">8080</span>:80 <span class="token punctuation">\\</span>
    <span class="token parameter variable">-v</span> /path/nginx.conf:/etc/nginx/nginx.conf:ro <span class="token punctuation">\\</span>
    nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dockerfile" tabindex="-1"><a class="header-anchor" href="#dockerfile"><span>Dockerfile</span></a></h2>`,13)),n("p",null,[e[4]||(e[4]=a("请到 ")),n("a",k,[e[3]||(e[3]=a("https://github.com/docker-library/docs/tree/master/nginx")),i(s)]),e[5]||(e[5]=a(" 查看。"))])])}const f=r(p,[["render",b],["__file","nginx.html.vue"]]),N=JSON.parse('{"path":"/index/Docker/appendix/repo/nginx.html","title":"Nginx","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"基本信息","slug":"基本信息","link":"#基本信息","children":[]},{"level":2,"title":"使用方法","slug":"使用方法","link":"#使用方法","children":[]},{"level":2,"title":"Dockerfile","slug":"dockerfile","link":"#dockerfile","children":[]}],"git":{"createdTime":1729050589000,"updatedTime":1729050589000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.82,"words":246},"filePathRelative":"index/Docker/appendix/repo/nginx.md","localizedDate":"2024年10月16日","excerpt":"\\n<h2>基本信息</h2>\\n<p><a href=\\"https://en.wikipedia.org/wiki/Nginx\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Nginx</a> 是开源的高效的 Web 服务器实现，支持 HTTP、HTTPS、SMTP、POP3、IMAP 等协议。</p>\\n<p>该仓库位于 <code>https://hub.docker.com/_/nginx/</code> ，提供了 Nginx 1.0 ~ 1.19.x 各个版本的镜像。</p>\\n<h2>使用方法</h2>\\n<p>下面的命令将作为一个静态页面服务器启动。</p>"}');export{f as comp,N as data};
