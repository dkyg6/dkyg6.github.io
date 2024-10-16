import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,d as e,b as n,e as a,a as i,o as p,r}from"./app-BlitenSH.js";const c={},d={href:"https://github.com/alist-org/alist",target:"_blank",rel:"noopener noreferrer"};function v(g,s){const t=r("ExternalLinkIcon");return p(),l("div",null,[s[7]||(s[7]=e('<h1 id="从源码运行" tabindex="-1"><a class="header-anchor" href="#从源码运行"><span>从源码运行</span></a></h1><div class="hint-container caution"><p class="hint-container-title">警告</p><p>此步骤仅适用于需要自行修改源代码的用户。 不明白的请跳过。</p></div><h2 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备"><span><strong>环境准备</strong></span></a></h2><p>首先，你需要一个有<code>git</code>，<code>nodejs</code>，<code>pnpm</code>，<code>golang&gt;=1.20</code>，<code>gcc</code>的环境</p><h2 id="构建前端" tabindex="-1"><a class="header-anchor" href="#构建前端"><span><strong>构建前端</strong></span></a></h2><p>使用 <code>git clone --recurse-submodules https://github.com/alist-org/alist-web.git</code> 克隆前端 ，执行 <code>pnpm install &amp;&amp; pnpm build</code> 得到 dist 目录下的目标文件</p><h2 id="构建后端" tabindex="-1"><a class="header-anchor" href="#构建后端"><span><strong>构建后端</strong></span></a></h2>',7)),n("p",null,[s[1]||(s[1]=a("克隆 ")),n("a",d,[s[0]||(s[0]=a("https://github.com/alist-org/alist")),i(t)]),s[2]||(s[2]=a(" ，将上一步的 ")),s[3]||(s[3]=n("code",null,"dist",-1)),s[4]||(s[4]=a(" 目录复制到项目下的 ")),s[5]||(s[5]=n("code",null,"public",-1)),s[6]||(s[6]=a(" 目录下，然后执行："))]),s[8]||(s[8]=e(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token assign-left variable">appName</span><span class="token operator">=</span><span class="token string">&quot;alist&quot;</span>
<span class="token assign-left variable">builtAt</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +<span class="token string">&#39;%F %T %z&#39;</span><span class="token variable">)</span></span>&quot;</span>
<span class="token assign-left variable">goVersion</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>go version <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/go version //&#39;</span><span class="token variable">)</span></span>
<span class="token assign-left variable">gitAuthor</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">git</span> show <span class="token parameter variable">-s</span> <span class="token parameter variable">--format</span><span class="token operator">=</span><span class="token string">&#39;format:%aN &lt;%ae&gt;&#39;</span> HEAD<span class="token variable">)</span></span>
<span class="token assign-left variable">gitCommit</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>format:<span class="token string">&quot;%h&quot;</span> <span class="token parameter variable">-1</span><span class="token variable">)</span></span>
<span class="token assign-left variable">version</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">git</span> describe <span class="token parameter variable">--long</span> <span class="token parameter variable">--tags</span> <span class="token parameter variable">--dirty</span> <span class="token parameter variable">--always</span><span class="token variable">)</span></span>
<span class="token assign-left variable">webVersion</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">wget</span> -qO- <span class="token parameter variable">-t1</span> <span class="token parameter variable">-T2</span> <span class="token string">&quot;https://api.github.com/repos/alist-org/alist-web/releases/latest&quot;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;tag_name&quot;</span> <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-n</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&quot;:&quot;</span> <span class="token string">&#39;{print $2}&#39;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/\\&quot;//g;s/,//g;s/ //g&#39;</span><span class="token variable">)</span></span>
<span class="token assign-left variable">ldflags</span><span class="token operator">=</span><span class="token string">&quot;\\
-w -s \\
-X &#39;github.com/alist-org/alist/v3/internal/conf.BuiltAt=<span class="token variable">$builtAt</span>&#39; \\
-X &#39;github.com/alist-org/alist/v3/internal/conf.GoVersion=<span class="token variable">$goVersion</span>&#39; \\
-X &#39;github.com/alist-org/alist/v3/internal/conf.GitAuthor=<span class="token variable">$gitAuthor</span>&#39; \\
-X &#39;github.com/alist-org/alist/v3/internal/conf.GitCommit=<span class="token variable">$gitCommit</span>&#39; \\
-X &#39;github.com/alist-org/alist/v3/internal/conf.Version=<span class="token variable">$version</span>&#39; \\
-X &#39;github.com/alist-org/alist/v3/internal/conf.WebVersion=<span class="token variable">$webVersion</span>&#39; \\
&quot;</span>
go build <span class="token parameter variable">-ldflags</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$ldflags</span>&quot;</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1))])}const u=o(c,[["render",v],["__file","source.html.vue"]]),m=JSON.parse('{"path":"/index/Alist/install/source.html","title":"从源码运行","lang":"zh-CN","frontmatter":{"icon":"iconfont icon-code","order":9,"category":["Guide"],"tag":["Install","Guide"],"sticky":true,"star":true},"headers":[{"level":2,"title":"环境准备","slug":"环境准备","link":"#环境准备","children":[]},{"level":2,"title":"构建前端","slug":"构建前端","link":"#构建前端","children":[]},{"level":2,"title":"构建后端","slug":"构建后端","link":"#构建后端","children":[]}],"git":{"createdTime":1729050589000,"updatedTime":1729050589000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.93,"words":278},"filePathRelative":"index/Alist/install/source.md","localizedDate":"2024年10月16日","excerpt":"\\n<div class=\\"hint-container caution\\">\\n<p class=\\"hint-container-title\\">警告</p>\\n<p>此步骤仅适用于需要自行修改源代码的用户。 不明白的请跳过。</p>\\n</div>\\n<h2><strong>环境准备</strong></h2>\\n<p>首先，你需要一个有<code>git</code>，<code>nodejs</code>，<code>pnpm</code>，<code>golang&gt;=1.20</code>，<code>gcc</code>的环境</p>\\n<h2><strong>构建前端</strong></h2>"}');export{u as comp,m as data};
