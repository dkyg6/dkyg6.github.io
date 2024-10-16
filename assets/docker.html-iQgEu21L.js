import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,d as i,b as o,e as r,a as t,o as a,r as n}from"./app-BlitenSH.js";const s={},k={href:"https://docs.docker.com/engine/reference/commandline/cli/",target:"_blank",rel:"noopener noreferrer"};function p(u,e){const c=n("ExternalLinkIcon");return a(),l("div",null,[e[1]||(e[1]=i('<h1 id="客户端命令-docker" tabindex="-1"><a class="header-anchor" href="#客户端命令-docker"><span>客户端命令(docker)</span></a></h1><h2 id="客户端命令选项" tabindex="-1"><a class="header-anchor" href="#客户端命令选项"><span>客户端命令选项</span></a></h2><ul><li><code>--config=&quot;&quot;</code>：指定客户端配置文件，默认为 <code>~/.docker</code>；</li><li><code>-D=true|false</code>：是否使用 debug 模式。默认不开启；</li><li><code>-H, --host=[]</code>：指定命令对应 Docker 守护进程的监听接口，可以为 unix 套接字 <code>unix:///path/to/socket</code>，文件句柄 <code>fd://socketfd</code> 或 tcp 套接字 <code>tcp://[host[:port]]</code>，默认为 <code>unix:///var/run/docker.sock</code>；</li><li><code>-l, --log-level=&quot;debug|info|warn|error|fatal&quot;</code>：指定日志输出级别；</li><li><code>--tls=true|false</code>：是否对 Docker 守护进程启用 TLS 安全机制，默认为否；</li><li><code>--tlscacert=/.docker/ca.pem</code>：TLS CA 签名的可信证书文件路径；</li><li><code>--tlscert=/.docker/cert.pem</code>：TLS 可信证书文件路径；</li><li><code>--tlscert=/.docker/key.pem</code>：TLS 密钥文件路径；</li><li><code>--tlsverify=true|false</code>：启用 TLS 校验，默认为否。</li></ul><h2 id="客户端命令" tabindex="-1"><a class="header-anchor" href="#客户端命令"><span>客户端命令</span></a></h2><p>可以通过 <code>docker COMMAND --help</code> 来查看这些命令的具体用法。</p><ul><li><code>attach</code>：依附到一个正在运行的容器中；</li><li><code>build</code>：从一个 Dockerfile 创建一个镜像；</li><li><code>commit</code>：从一个容器的修改中创建一个新的镜像；</li><li><code>cp</code>：在容器和本地宿主系统之间复制文件中；</li><li><code>create</code>：创建一个新容器，但并不运行它；</li><li><code>diff</code>：检查一个容器内文件系统的修改，包括修改和增加；</li><li><code>events</code>：从服务端获取实时的事件；</li><li><code>exec</code>：在运行的容器内执行命令；</li><li><code>export</code>：导出容器内容为一个 <code>tar</code> 包；</li><li><code>history</code>：显示一个镜像的历史信息；</li><li><code>images</code>：列出存在的镜像；</li><li><code>import</code>：导入一个文件（典型为 <code>tar</code> 包）路径或目录来创建一个本地镜像；</li><li><code>info</code>：显示一些相关的系统信息；</li><li><code>inspect</code>：显示一个容器的具体配置信息；</li><li><code>kill</code>：关闭一个运行中的容器 (包括进程和所有相关资源)；</li><li><code>load</code>：从一个 tar 包中加载一个镜像；</li><li><code>login</code>：注册或登录到一个 Docker 的仓库服务器；</li><li><code>logout</code>：从 Docker 的仓库服务器登出；</li><li><code>logs</code>：获取容器的 log 信息；</li><li><code>network</code>：管理 Docker 的网络，包括查看、创建、删除、挂载、卸载等；</li><li><code>node</code>：管理 swarm 集群中的节点，包括查看、更新、删除、提升/取消管理节点等；</li><li><code>pause</code>：暂停一个容器中的所有进程；</li><li><code>port</code>：查找一个 nat 到一个私有网口的公共口；</li><li><code>ps</code>：列出主机上的容器；</li><li><code>pull</code>：从一个Docker的仓库服务器下拉一个镜像或仓库；</li><li><code>push</code>：将一个镜像或者仓库推送到一个 Docker 的注册服务器；</li><li><code>rename</code>：重命名一个容器；</li><li><code>restart</code>：重启一个运行中的容器；</li><li><code>rm</code>：删除给定的若干个容器；</li><li><code>rmi</code>：删除给定的若干个镜像；</li><li><code>run</code>：创建一个新容器，并在其中运行给定命令；</li><li><code>save</code>：保存一个镜像为 tar 包文件；</li><li><code>search</code>：在 Docker index 中搜索一个镜像；</li><li><code>service</code>：管理 Docker 所启动的应用服务，包括创建、更新、删除等；</li><li><code>start</code>：启动一个容器；</li><li><code>stats</code>：输出（一个或多个）容器的资源使用统计信息；</li><li><code>stop</code>：终止一个运行中的容器；</li><li><code>swarm</code>：管理 Docker swarm 集群，包括创建、加入、退出、更新等；</li><li><code>tag</code>：为一个镜像打标签；</li><li><code>top</code>：查看一个容器中的正在运行的进程信息；</li><li><code>unpause</code>：将一个容器内所有的进程从暂停状态中恢复；</li><li><code>update</code>：更新指定的若干容器的配置信息；</li><li><code>version</code>：输出 Docker 的版本信息；</li><li><code>volume</code>：管理 Docker volume，包括查看、创建、删除等；</li><li><code>wait</code>：阻塞直到一个容器终止，然后输出它的退出符。</li></ul><h2 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h2>',7)),o("ul",null,[o("li",null,[o("a",k,[e[0]||(e[0]=r("官方文档")),t(c)])])])])}const f=d(s,[["render",p],["__file","docker.html.vue"]]),g=JSON.parse('{"path":"/index/Docker/appendix/command/docker.html","title":"客户端命令(docker)","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"客户端命令选项","slug":"客户端命令选项","link":"#客户端命令选项","children":[]},{"level":2,"title":"客户端命令","slug":"客户端命令","link":"#客户端命令","children":[]},{"level":2,"title":"","slug":"","link":"#","children":[]}],"git":{"createdTime":1729050589000,"updatedTime":1729050589000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.91,"words":872},"filePathRelative":"index/Docker/appendix/command/docker.md","localizedDate":"2024年10月16日","excerpt":"\\n<h2>客户端命令选项</h2>\\n<ul>\\n<li><code>--config=\\"\\"</code>：指定客户端配置文件，默认为 <code>~/.docker</code>；</li>\\n<li><code>-D=true|false</code>：是否使用 debug 模式。默认不开启；</li>\\n<li><code>-H, --host=[]</code>：指定命令对应 Docker 守护进程的监听接口，可以为 unix 套接字 <code>unix:///path/to/socket</code>，文件句柄 <code>fd://socketfd</code> 或 tcp 套接字 <code>tcp://[host[:port]]</code>，默认为 <code>unix:///var/run/docker.sock</code>；</li>\\n<li><code>-l, --log-level=\\"debug|info|warn|error|fatal\\"</code>：指定日志输出级别；</li>\\n<li><code>--tls=true|false</code>：是否对 Docker 守护进程启用 TLS 安全机制，默认为否；</li>\\n<li><code>--tlscacert=/.docker/ca.pem</code>：TLS CA 签名的可信证书文件路径；</li>\\n<li><code>--tlscert=/.docker/cert.pem</code>：TLS 可信证书文件路径；</li>\\n<li><code>--tlscert=/.docker/key.pem</code>：TLS 密钥文件路径；</li>\\n<li><code>--tlsverify=true|false</code>：启用 TLS 校验，默认为否。</li>\\n</ul>"}');export{f as comp,g as data};
