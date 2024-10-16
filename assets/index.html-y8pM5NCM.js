import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,b as a,a as s,e as o,d,o as l,r as i}from"./app-BlitenSH.js";const p={},c={href:"https://github.com/containers/podman",target:"_blank",rel:"noopener noreferrer"},m={href:"https://developers.redhat.com/blog/2019/02/21/podman-and-buildah-for-docker-users/",target:"_blank",rel:"noopener noreferrer"};function u(h,e){const n=i("ExternalLinkIcon");return l(),t("div",null,[e[3]||(e[3]=a("h1",{id:"podman",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#podman"},[a("span",null,"podman")])],-1)),a("p",null,[a("a",c,[e[0]||(e[0]=a("code",null,"podman",-1)),s(n)]),e[1]||(e[1]=o(" 是一个无守护程序与 docker 命令兼容的下一代 Linux 容器工具。"))]),e[4]||(e[4]=d(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> yum <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">podman</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2><p><code>podman</code> 与 docker 命令完全兼容，只需将 <code>docker</code> 替换为 <code>podman</code> 即可，例如运行一个容器：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># $ docker run -d -p 80:80 nginx:alpine</span>

$ <span class="token function">podman</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 nginx:alpine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2>`,6)),a("ul",null,[a("li",null,[a("a",m,[e[2]||(e[2]=o("https://developers.redhat.com/blog/2019/02/21/podman-and-buildah-for-docker-users/")),s(n)])])])])}const v=r(p,[["render",u],["__file","index.html.vue"]]),g=JSON.parse('{"path":"/index/Docker/podman/","title":"podman","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1729050589000,"updatedTime":1729050589000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.3,"words":90},"filePathRelative":"index/Docker/podman/README.md","localizedDate":"2024年10月16日","excerpt":"\\n<p><a href=\\"https://github.com/containers/podman\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><code>podman</code></a> 是一个无守护程序与 docker 命令兼容的下一代 Linux 容器工具。</p>\\n<h2>安装</h2>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>$ <span class=\\"token function\\">sudo</span> yum <span class=\\"token parameter variable\\">-y</span> <span class=\\"token function\\">install</span> <span class=\\"token function\\">podman</span>\\n</code></pre></div>"}');export{v as comp,g as data};
