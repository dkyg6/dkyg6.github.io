import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,b as s,e as a,a as t,d as l,o as c,r as u}from"./app-BlitenSH.js";const i={},r={href:"https://github.com/features/actions",target:"_blank",rel:"noopener noreferrer"},k={href:"https://docs.github.com/en/actions",target:"_blank",rel:"noopener noreferrer"};function d(m,n){const e=u("ExternalLinkIcon");return c(),o("div",null,[n[4]||(n[4]=s("h1",{id:"github-actions",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#github-actions"},[s("span",null,"GitHub Actions")])],-1)),s("p",null,[n[1]||(n[1]=a("GitHub ")),s("a",r,[n[0]||(n[0]=a("Actions")),t(e)]),n[2]||(n[2]=a(" 是 GitHub 推出的一款 CI/CD 工具。"))]),n[5]||(n[5]=l(`<p>我们可以在每个 <code>job</code> 的 <code>step</code> 中使用 Docker 执行构建步骤。</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">on</span><span class="token punctuation">:</span> push

<span class="token key atrule">name</span><span class="token punctuation">:</span> CI

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">my-job</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> Build
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@master
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">2</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> run docker container
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> docker<span class="token punctuation">:</span>//golang<span class="token punctuation">:</span>alpine
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">args</span><span class="token punctuation">:</span> go version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2>`,3)),s("ul",null,[s("li",null,[s("a",k,[n[3]||(n[3]=a("Actions Docs")),t(e)])])])])}const y=p(i,[["render",d],["__file","index.html.vue"]]),h=JSON.parse('{"path":"/index/Docker/cases/ci/actions/","title":"GitHub Actions","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1729050589000,"updatedTime":1729050589000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.26,"words":77},"filePathRelative":"index/Docker/cases/ci/actions/README.md","localizedDate":"2024年10月16日","excerpt":"\\n<p>GitHub <a href=\\"https://github.com/features/actions\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Actions</a> 是 GitHub 推出的一款 CI/CD 工具。</p>\\n<p>我们可以在每个 <code>job</code> 的 <code>step</code> 中使用 Docker 执行构建步骤。</p>\\n<div class=\\"language-yaml\\" data-ext=\\"yml\\" data-title=\\"yml\\"><pre class=\\"language-yaml\\"><code><span class=\\"token key atrule\\">on</span><span class=\\"token punctuation\\">:</span> push\\n\\n<span class=\\"token key atrule\\">name</span><span class=\\"token punctuation\\">:</span> CI\\n\\n<span class=\\"token key atrule\\">jobs</span><span class=\\"token punctuation\\">:</span>\\n  <span class=\\"token key atrule\\">my-job</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token key atrule\\">name</span><span class=\\"token punctuation\\">:</span> Build\\n    <span class=\\"token key atrule\\">runs-on</span><span class=\\"token punctuation\\">:</span> ubuntu<span class=\\"token punctuation\\">-</span>latest\\n    <span class=\\"token key atrule\\">steps</span><span class=\\"token punctuation\\">:</span>\\n      <span class=\\"token punctuation\\">-</span> <span class=\\"token key atrule\\">uses</span><span class=\\"token punctuation\\">:</span> actions/checkout@master\\n        <span class=\\"token key atrule\\">with</span><span class=\\"token punctuation\\">:</span>\\n          <span class=\\"token key atrule\\">fetch-depth</span><span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">2</span>\\n      <span class=\\"token punctuation\\">-</span> <span class=\\"token key atrule\\">name</span><span class=\\"token punctuation\\">:</span> run docker container\\n        <span class=\\"token key atrule\\">uses</span><span class=\\"token punctuation\\">:</span> docker<span class=\\"token punctuation\\">:</span>//golang<span class=\\"token punctuation\\">:</span>alpine\\n        <span class=\\"token key atrule\\">with</span><span class=\\"token punctuation\\">:</span>\\n          <span class=\\"token key atrule\\">args</span><span class=\\"token punctuation\\">:</span> go version\\n</code></pre></div>"}');export{y as comp,h as data};
