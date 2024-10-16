import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,d as l,b as n,e as a,a as o,o as c,r as p}from"./app-BlitenSH.js";const r={},d={href:"https://docs.docker.com/registry/recipes/nginx/",target:"_blank",rel:"noopener noreferrer"};function u(k,s){const e=p("ExternalLinkIcon");return c(),i("div",null,[s[5]||(s[5]=l(`<h1 id="私有仓库高级配置" tabindex="-1"><a class="header-anchor" href="#私有仓库高级配置"><span>私有仓库高级配置</span></a></h1><p>上一节我们搭建了一个具有基础功能的私有仓库，本小节我们来使用 <code>Docker Compose</code> 搭建一个拥有权限认证、TLS 的私有仓库。</p><p>新建一个文件夹，以下步骤均在该文件夹中进行。</p><h2 id="准备站点证书" tabindex="-1"><a class="header-anchor" href="#准备站点证书"><span>准备站点证书</span></a></h2><p>如果你拥有一个域名，国内各大云服务商均提供免费的站点证书。你也可以使用 <code>openssl</code> 自行签发证书。</p><p>这里假设我们将要搭建的私有仓库地址为 <code>docker.domain.com</code>，下面我们介绍使用 <code>openssl</code> 自行签发 <code>docker.domain.com</code> 的站点 SSL 证书。</p><p>第一步创建 <code>CA</code> 私钥。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ openssl genrsa <span class="token parameter variable">-out</span> <span class="token string">&quot;root-ca.key&quot;</span> <span class="token number">4096</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第二步利用私钥创建 <code>CA</code> 根证书请求文件。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ openssl req <span class="token punctuation">\\</span>
          <span class="token parameter variable">-new</span> <span class="token parameter variable">-key</span> <span class="token string">&quot;root-ca.key&quot;</span> <span class="token punctuation">\\</span>
          <span class="token parameter variable">-out</span> <span class="token string">&quot;root-ca.csr&quot;</span> <span class="token parameter variable">-sha256</span> <span class="token punctuation">\\</span>
          <span class="token parameter variable">-subj</span> <span class="token string">&#39;/C=CN/ST=Shanxi/L=Datong/O=Your Company Name/CN=Your Company Name Docker Registry CA&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>以上命令中 <code>-subj</code> 参数里的 <code>/C</code> 表示国家，如 <code>CN</code>；<code>/ST</code> 表示省；<code>/L</code> 表示城市或者地区；<code>/O</code> 表示组织名；<code>/CN</code> 通用名称。</p></blockquote><p>第三步配置 <code>CA</code> 根证书，新建 <code>root-ca.cnf</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root_ca<span class="token punctuation">]</span>
basicConstraints <span class="token operator">=</span> critical,CA:TRUE,pathlen:1
keyUsage <span class="token operator">=</span> critical, nonRepudiation, cRLSign, keyCertSign
<span class="token assign-left variable">subjectKeyIdentifier</span><span class="token operator">=</span>hash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第四步签发根证书。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ openssl x509 <span class="token parameter variable">-req</span>  <span class="token parameter variable">-days</span> <span class="token number">3650</span>  <span class="token parameter variable">-in</span> <span class="token string">&quot;root-ca.csr&quot;</span> <span class="token punctuation">\\</span>
               <span class="token parameter variable">-signkey</span> <span class="token string">&quot;root-ca.key&quot;</span> <span class="token parameter variable">-sha256</span> <span class="token parameter variable">-out</span> <span class="token string">&quot;root-ca.crt&quot;</span> <span class="token punctuation">\\</span>
               <span class="token parameter variable">-extfile</span> <span class="token string">&quot;root-ca.cnf&quot;</span> <span class="token parameter variable">-extensions</span> <span class="token punctuation">\\</span>
               root_ca
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第五步生成站点 <code>SSL</code> 私钥。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ openssl genrsa <span class="token parameter variable">-out</span> <span class="token string">&quot;docker.domain.com.key&quot;</span> <span class="token number">4096</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第六步使用私钥生成证书请求文件。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ openssl req <span class="token parameter variable">-new</span> <span class="token parameter variable">-key</span> <span class="token string">&quot;docker.domain.com.key&quot;</span> <span class="token parameter variable">-out</span> <span class="token string">&quot;site.csr&quot;</span> <span class="token parameter variable">-sha256</span> <span class="token punctuation">\\</span>
          <span class="token parameter variable">-subj</span> <span class="token string">&#39;/C=CN/ST=Shanxi/L=Datong/O=Your Company Name/CN=docker.domain.com&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>第七步配置证书，新建 <code>site.cnf</code> 文件。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>server<span class="token punctuation">]</span>
<span class="token assign-left variable">authorityKeyIdentifier</span><span class="token operator">=</span>keyid,issuer
basicConstraints <span class="token operator">=</span> critical,CA:FALSE
<span class="token assign-left variable">extendedKeyUsage</span><span class="token operator">=</span>serverAuth
keyUsage <span class="token operator">=</span> critical, digitalSignature, keyEncipherment
subjectAltName <span class="token operator">=</span> DNS:docker.domain.com, IP:127.0.0.1
<span class="token assign-left variable">subjectKeyIdentifier</span><span class="token operator">=</span>hash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第八步签署站点 <code>SSL</code> 证书。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ openssl x509 <span class="token parameter variable">-req</span> <span class="token parameter variable">-days</span> <span class="token number">750</span> <span class="token parameter variable">-in</span> <span class="token string">&quot;site.csr&quot;</span> <span class="token parameter variable">-sha256</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-CA</span> <span class="token string">&quot;root-ca.crt&quot;</span> <span class="token parameter variable">-CAkey</span> <span class="token string">&quot;root-ca.key&quot;</span>  <span class="token parameter variable">-CAcreateserial</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-out</span> <span class="token string">&quot;docker.domain.com.crt&quot;</span> <span class="token parameter variable">-extfile</span> <span class="token string">&quot;site.cnf&quot;</span> <span class="token parameter variable">-extensions</span> server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样已经拥有了 <code>docker.domain.com</code> 的网站 SSL 私钥 <code>docker.domain.com.key</code> 和 SSL 证书 <code>docker.domain.com.crt</code> 及 CA 根证书 <code>root-ca.crt</code>。</p><p>新建 <code>ssl</code> 文件夹并将 <code>docker.domain.com.key</code> <code>docker.domain.com.crt</code> <code>root-ca.crt</code> 这三个文件移入，删除其他文件。</p><h2 id="配置私有仓库" tabindex="-1"><a class="header-anchor" href="#配置私有仓库"><span>配置私有仓库</span></a></h2><p>私有仓库默认的配置文件位于 <code>/etc/docker/registry/config.yml</code>，我们先在本地编辑 <code>config.yml</code>，之后挂载到容器中。</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token number">0.1</span>
<span class="token key atrule">log</span><span class="token punctuation">:</span>
  <span class="token key atrule">accesslog</span><span class="token punctuation">:</span>
    <span class="token key atrule">disabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">level</span><span class="token punctuation">:</span> debug
  <span class="token key atrule">formatter</span><span class="token punctuation">:</span> text
  <span class="token key atrule">fields</span><span class="token punctuation">:</span>
    <span class="token key atrule">service</span><span class="token punctuation">:</span> registry
    <span class="token key atrule">environment</span><span class="token punctuation">:</span> staging
<span class="token key atrule">storage</span><span class="token punctuation">:</span>
  <span class="token key atrule">delete</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">cache</span><span class="token punctuation">:</span>
    <span class="token key atrule">blobdescriptor</span><span class="token punctuation">:</span> inmemory
  <span class="token key atrule">filesystem</span><span class="token punctuation">:</span>
    <span class="token key atrule">rootdirectory</span><span class="token punctuation">:</span> /var/lib/registry
<span class="token key atrule">auth</span><span class="token punctuation">:</span>
  <span class="token key atrule">htpasswd</span><span class="token punctuation">:</span>
    <span class="token key atrule">realm</span><span class="token punctuation">:</span> basic<span class="token punctuation">-</span>realm
    <span class="token key atrule">path</span><span class="token punctuation">:</span> /etc/docker/registry/auth/nginx.htpasswd
<span class="token key atrule">http</span><span class="token punctuation">:</span>
  <span class="token key atrule">addr</span><span class="token punctuation">:</span> <span class="token punctuation">:</span><span class="token number">443</span>
  <span class="token key atrule">host</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//docker.domain.com
  <span class="token key atrule">headers</span><span class="token punctuation">:</span>
    <span class="token key atrule">X-Content-Type-Options</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>nosniff<span class="token punctuation">]</span>
  <span class="token key atrule">http2</span><span class="token punctuation">:</span>
    <span class="token key atrule">disabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">tls</span><span class="token punctuation">:</span>
    <span class="token key atrule">certificate</span><span class="token punctuation">:</span> /etc/docker/registry/ssl/docker.domain.com.crt
    <span class="token key atrule">key</span><span class="token punctuation">:</span> /etc/docker/registry/ssl/docker.domain.com.key
<span class="token key atrule">health</span><span class="token punctuation">:</span>
  <span class="token key atrule">storagedriver</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> 10s
<span class="token key atrule">threshold</span><span class="token punctuation">:</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="生成-http-认证文件" tabindex="-1"><a class="header-anchor" href="#生成-http-认证文件"><span>生成 http 认证文件</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">mkdir</span> auth

$ <span class="token function">docker</span> run <span class="token parameter variable">--rm</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--entrypoint</span> htpasswd <span class="token punctuation">\\</span>
    httpd:alpine <span class="token punctuation">\\</span>
    <span class="token parameter variable">-Bbn</span> username password <span class="token operator">&gt;</span> auth/nginx.htpasswd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>将上面的 <code>username</code> <code>password</code> 替换为你自己的用户名和密码。</p></blockquote><h2 id="编辑-docker-compose-yml" tabindex="-1"><a class="header-anchor" href="#编辑-docker-compose-yml"><span>编辑 <code>docker-compose.yml</code></span></a></h2><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">registry</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> registry
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;443:443&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./<span class="token punctuation">:</span>/etc/docker/registry
      <span class="token punctuation">-</span> registry<span class="token punctuation">-</span>data<span class="token punctuation">:</span>/var/lib/registry

<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token key atrule">registry-data</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改-hosts" tabindex="-1"><a class="header-anchor" href="#修改-hosts"><span>修改 hosts</span></a></h2><p>编辑 <code>/etc/hosts</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1 docker.domain.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="启动" tabindex="-1"><a class="header-anchor" href="#启动"><span>启动</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样我们就搭建好了一个具有权限认证、TLS 的私有仓库，接下来我们测试其功能是否正常。</p><h2 id="测试私有仓库功能" tabindex="-1"><a class="header-anchor" href="#测试私有仓库功能"><span>测试私有仓库功能</span></a></h2><p>由于自行签发的 CA 根证书不被系统信任，所以我们需要将 CA 根证书 <code>ssl/root-ca.crt</code> 移入 <code>/etc/docker/certs.d/docker.domain.com</code> 文件夹中。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/docker/certs.d/docker.domain.com

$ <span class="token function">sudo</span> <span class="token function">cp</span> ssl/root-ca.crt /etc/docker/certs.d/docker.domain.com/ca.crt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>登录到私有仓库。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> login docker.domain.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>尝试推送、拉取镜像。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> pull ubuntu:18.04

$ <span class="token function">docker</span> tag ubuntu:18.04 docker.domain.com/username/ubuntu:18.04

$ <span class="token function">docker</span> push docker.domain.com/username/ubuntu:18.04

$ <span class="token function">docker</span> image <span class="token function">rm</span> docker.domain.com/username/ubuntu:18.04

$ <span class="token function">docker</span> pull docker.domain.com/username/ubuntu:18.04
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们退出登录，尝试推送镜像。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> <span class="token builtin class-name">logout</span> docker.domain.com

$ <span class="token function">docker</span> push docker.domain.com/username/ubuntu:18.04

no basic auth credentials
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>发现会提示没有登录，不能将镜像推送到私有仓库中。</p><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h2>`,50)),n("p",null,[s[1]||(s[1]=a("如果你本机占用了 ")),s[2]||(s[2]=n("code",null,"443",-1)),s[3]||(s[3]=a(" 端口，你可以配置 ")),n("a",d,[s[0]||(s[0]=a("Nginx 代理")),o(e)]),s[4]||(s[4]=a("，这里不再赘述。"))])])}const b=t(r,[["render",u],["__file","registry_auth.html.vue"]]),h=JSON.parse('{"path":"/index/Docker/repository/registry_auth.html","title":"私有仓库高级配置","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"准备站点证书","slug":"准备站点证书","link":"#准备站点证书","children":[]},{"level":2,"title":"配置私有仓库","slug":"配置私有仓库","link":"#配置私有仓库","children":[]},{"level":2,"title":"生成 http 认证文件","slug":"生成-http-认证文件","link":"#生成-http-认证文件","children":[]},{"level":2,"title":"编辑 docker-compose.yml","slug":"编辑-docker-compose-yml","link":"#编辑-docker-compose-yml","children":[]},{"level":2,"title":"修改 hosts","slug":"修改-hosts","link":"#修改-hosts","children":[]},{"level":2,"title":"启动","slug":"启动","link":"#启动","children":[]},{"level":2,"title":"测试私有仓库功能","slug":"测试私有仓库功能","link":"#测试私有仓库功能","children":[]},{"level":2,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]}],"git":{"createdTime":1729050589000,"updatedTime":1729050589000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.91,"words":873},"filePathRelative":"index/Docker/repository/registry_auth.md","localizedDate":"2024年10月16日","excerpt":"\\n<p>上一节我们搭建了一个具有基础功能的私有仓库，本小节我们来使用 <code>Docker Compose</code> 搭建一个拥有权限认证、TLS 的私有仓库。</p>\\n<p>新建一个文件夹，以下步骤均在该文件夹中进行。</p>\\n<h2>准备站点证书</h2>\\n<p>如果你拥有一个域名，国内各大云服务商均提供免费的站点证书。你也可以使用 <code>openssl</code> 自行签发证书。</p>\\n<p>这里假设我们将要搭建的私有仓库地址为 <code>docker.domain.com</code>，下面我们介绍使用 <code>openssl</code> 自行签发 <code>docker.domain.com</code> 的站点 SSL 证书。</p>"}');export{b as comp,h as data};
