import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as d,d as e,b as a,e as s,a as o,w as p,r as i,o as r}from"./app-BlitenSH.js";const u={},k={href:"https://hub.docker.com/_/postgres/",target:"_blank",rel:"noopener noreferrer"};function m(v,n){const t=i("RouteLink"),l=i("ExternalLinkIcon");return r(),d("div",null,[n[13]||(n[13]=e(`<h1 id="使用-django" tabindex="-1"><a class="header-anchor" href="#使用-django"><span>使用 Django</span></a></h1><blockquote><p>本小节内容适合 <code>Python</code> 开发人员阅读。</p></blockquote><p>我们现在将使用 <code>Docker Compose</code> 配置并运行一个 <code>Django/PostgreSQL</code> 应用。</p><p>在一切工作开始前，需要先编辑好三个必要的文件。</p><p>第一步，因为应用将要运行在一个满足所有环境依赖的 Docker 容器里面，那么我们可以通过编辑 <code>Dockerfile</code> 文件来指定 Docker 容器要安装内容。内容如下：</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> python:3</span>
<span class="token instruction"><span class="token keyword">ENV</span> PYTHONUNBUFFERED 1</span>
<span class="token instruction"><span class="token keyword">RUN</span> mkdir /code</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /code</span>
<span class="token instruction"><span class="token keyword">COPY</span> requirements.txt /code/</span>
<span class="token instruction"><span class="token keyword">RUN</span> pip install -r requirements.txt</span>
<span class="token instruction"><span class="token keyword">COPY</span> . /code/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6)),a("p",null,[n[1]||(n[1]=s("以上内容指定应用将使用安装了 Python 以及必要依赖包的镜像。更多关于如何编写 ")),n[2]||(n[2]=a("code",null,"Dockerfile",-1)),n[3]||(n[3]=s(" 文件的信息可以查看 ")),o(t,{to:"/index/Docker/image/dockerfile/"},{default:p(()=>n[0]||(n[0]=[s(" Dockerfile 使用")])),_:1}),n[4]||(n[4]=s("。"))]),n[14]||(n[14]=e(`<p>第二步，在 <code>requirements.txt</code> 文件里面写明需要安装的具体依赖包名。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Django<span class="token operator">&gt;=</span><span class="token number">2.0</span>,<span class="token operator">&lt;</span><span class="token number">3.0</span>
psycopg<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token operator">=</span><span class="token number">2.7</span>,<span class="token operator">&lt;</span><span class="token number">3.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>第三步，<code>docker-compose.yml</code> 文件将把所有的东西关联起来。它描述了应用的构成（一个 web 服务和一个数据库）、使用的 Docker 镜像、镜像之间的连接、挂载到容器的卷，以及服务开放的端口。</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>

  <span class="token key atrule">db</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> postgres
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">POSTGRES_PASSWORD</span><span class="token punctuation">:</span> <span class="token string">&#39;postgres&#39;</span>

  <span class="token key atrule">web</span><span class="token punctuation">:</span>
    <span class="token key atrule">build</span><span class="token punctuation">:</span> .
    <span class="token key atrule">command</span><span class="token punctuation">:</span> python manage.py runserver 0.0.0.0<span class="token punctuation">:</span><span class="token number">8000</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> .<span class="token punctuation">:</span>/code
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;8000:8000&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)),a("p",null,[n[6]||(n[6]=s("查看 ")),o(t,{to:"/index/Docker/compose/compose_file.html"},{default:p(()=>n[5]||(n[5]=[a("code",null,"docker-compose.yml",-1),s(" 章节")])),_:1}),n[7]||(n[7]=s(" 了解更多详细的工作机制。"))]),n[15]||(n[15]=e(`<p>现在我们就可以使用 <code>docker-compose run</code> 命令启动一个 <code>Django</code> 应用了。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker-compose</span> run web django-admin startproject django_example <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>由于 web 服务所使用的镜像并不存在，所以 Compose 会首先使用 <code>Dockerfile</code> 为 web 服务构建一个镜像，接着使用这个镜像在容器里运行 <code>django-admin startproject django_example</code> 指令。</p><p>这将在当前目录生成一个 <code>Django</code> 应用。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">ls</span>
Dockerfile       docker-compose.yml          django_example       manage.py       requirements.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你的系统是 Linux,记得更改文件权限。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">chown</span> <span class="token parameter variable">-R</span> <span class="token environment constant">$USER</span><span class="token builtin class-name">:</span><span class="token environment constant">$USER</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>首先，我们要为应用设置好数据库的连接信息。用以下内容替换 <code>django_example/settings.py</code> 文件中 <code>DATABASES = ...</code> 定义的节点内容。</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>DATABASES <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;default&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token string">&#39;ENGINE&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;django.db.backends.postgresql&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;NAME&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;postgres&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;USER&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;postgres&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;HOST&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;db&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;PORT&#39;</span><span class="token punctuation">:</span> <span class="token number">5432</span><span class="token punctuation">,</span>
        <span class="token string">&#39;PASSWORD&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;postgres&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9)),a("p",null,[n[9]||(n[9]=s("这些信息是在 ")),a("a",k,[n[8]||(n[8]=s("postgres")),o(l)]),n[10]||(n[10]=s(" 镜像固定设置好的。然后，运行 ")),n[11]||(n[11]=a("code",null,"docker-compose up",-1)),n[12]||(n[12]=s(" ："))]),n[16]||(n[16]=e(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker-compose</span> up

django_db_1 is up-to-date
Creating django_web_1 <span class="token punctuation">..</span>.
Creating django_web_1 <span class="token punctuation">..</span>. <span class="token keyword">done</span>
Attaching to django_db_1, django_web_1
db_1   <span class="token operator">|</span> The files belonging to this database system will be owned by user <span class="token string">&quot;postgres&quot;</span><span class="token builtin class-name">.</span>
db_1   <span class="token operator">|</span> This user must also own the server process.
db_1   <span class="token operator">|</span>
db_1   <span class="token operator">|</span> The database cluster will be initialized with locale <span class="token string">&quot;en_US.utf8&quot;</span><span class="token builtin class-name">.</span>
db_1   <span class="token operator">|</span> The default database encoding has accordingly been <span class="token builtin class-name">set</span> to <span class="token string">&quot;UTF8&quot;</span><span class="token builtin class-name">.</span>
db_1   <span class="token operator">|</span> The default text search configuration will be <span class="token builtin class-name">set</span> to <span class="token string">&quot;english&quot;</span><span class="token builtin class-name">.</span>

web_1  <span class="token operator">|</span> Performing system checks<span class="token punctuation">..</span>.
web_1  <span class="token operator">|</span>
web_1  <span class="token operator">|</span> System check identified no issues <span class="token punctuation">(</span><span class="token number">0</span> silenced<span class="token punctuation">)</span>.
web_1  <span class="token operator">|</span>
web_1  <span class="token operator">|</span> November <span class="token number">23</span>, <span class="token number">2017</span> - 06:21:19
web_1  <span class="token operator">|</span> Django version <span class="token number">1.11</span>.7, using settings <span class="token string">&#39;django_example.settings&#39;</span>
web_1  <span class="token operator">|</span> Starting development server at http://0.0.0.0:8000/
web_1  <span class="token operator">|</span> Quit the server with CONTROL-C.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个 <code>Django</code> 应用已经开始在你的 Docker 守护进程里监听着 <code>8000</code> 端口了。打开 <code>127.0.0.1:8000</code> 即可看到 <code>Django</code> 欢迎页面。</p><p>你还可以在 Docker 上运行其它的管理命令，例如对于同步数据库结构这种事，在运行完 <code>docker-compose up</code> 后，在另外一个终端进入文件夹运行以下命令即可：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker-compose</span> run web python manage.py syncdb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4))])}const y=c(u,[["render",m],["__file","django.html.vue"]]),h=JSON.parse('{"path":"/index/Docker/compose/django.html","title":"使用 Django","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"createdTime":1729050589000,"updatedTime":1729050589000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.53,"words":759},"filePathRelative":"index/Docker/compose/django.md","localizedDate":"2024年10月16日","excerpt":"\\n<blockquote>\\n<p>本小节内容适合 <code>Python</code> 开发人员阅读。</p>\\n</blockquote>\\n<p>我们现在将使用 <code>Docker Compose</code> 配置并运行一个 <code>Django/PostgreSQL</code> 应用。</p>\\n<p>在一切工作开始前，需要先编辑好三个必要的文件。</p>\\n<p>第一步，因为应用将要运行在一个满足所有环境依赖的 Docker 容器里面，那么我们可以通过编辑 <code>Dockerfile</code> 文件来指定 Docker 容器要安装内容。内容如下：</p>\\n<div class=\\"language-docker\\" data-ext=\\"docker\\" data-title=\\"docker\\"><pre class=\\"language-docker\\"><code><span class=\\"token instruction\\"><span class=\\"token keyword\\">FROM</span> python:3</span>\\n<span class=\\"token instruction\\"><span class=\\"token keyword\\">ENV</span> PYTHONUNBUFFERED 1</span>\\n<span class=\\"token instruction\\"><span class=\\"token keyword\\">RUN</span> mkdir /code</span>\\n<span class=\\"token instruction\\"><span class=\\"token keyword\\">WORKDIR</span> /code</span>\\n<span class=\\"token instruction\\"><span class=\\"token keyword\\">COPY</span> requirements.txt /code/</span>\\n<span class=\\"token instruction\\"><span class=\\"token keyword\\">RUN</span> pip install -r requirements.txt</span>\\n<span class=\\"token instruction\\"><span class=\\"token keyword\\">COPY</span> . /code/</span>\\n</code></pre></div>"}');export{y as comp,h as data};
