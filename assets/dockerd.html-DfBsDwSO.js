import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,d as i,b as o,e as r,a as t,o as n,r as a}from"./app-BlitenSH.js";const s={},u={href:"https://docs.docker.com/engine/reference/commandline/dockerd/",target:"_blank",rel:"noopener noreferrer"};function p(f,e){const d=a("ExternalLinkIcon");return n(),l("div",null,[e[1]||(e[1]=i('<h1 id="服务端命令-dockerd" tabindex="-1"><a class="header-anchor" href="#服务端命令-dockerd"><span>服务端命令(dockerd)</span></a></h1><h2 id="dockerd-命令选项" tabindex="-1"><a class="header-anchor" href="#dockerd-命令选项"><span>dockerd 命令选项</span></a></h2><ul><li><code>--api-cors-header=&quot;&quot;</code>：CORS 头部域，默认不允许 CORS，要允许任意的跨域访问，可以指定为 &quot;*&quot;；</li><li><code>--authorization-plugin=&quot;&quot;</code>：载入认证的插件；</li><li><code>-b=&quot;&quot;</code>：将容器挂载到一个已存在的网桥上。指定为 <code>none</code> 时则禁用容器的网络，与 <code>--bip</code> 选项互斥；</li><li><code>--bip=&quot;&quot;</code>：让动态创建的 <code>docker0</code> 网桥采用给定的 CIDR 地址; 与 <code>-b</code> 选项互斥；</li><li><code>--cgroup-parent=&quot;&quot;</code>：指定 cgroup 的父组，默认 fs cgroup 驱动为 <code>/docker</code>，systemd cgroup 驱动为 <code>system.slice</code>；</li><li><code>--cluster-store=&quot;&quot;</code>：构成集群（如 <code>Swarm</code>）时，集群键值数据库服务地址；</li><li><code>--cluster-advertise=&quot;&quot;</code>：构成集群时，自身的被访问地址，可以为 <code>host:port</code> 或 <code>interface:port</code>；</li><li><code>--cluster-store-opt=&quot;&quot;</code>：构成集群时，键值数据库的配置选项；</li><li><code>--config-file=&quot;/etc/docker/daemon.json&quot;</code>：daemon 配置文件路径；</li><li><code>--containerd=&quot;&quot;</code>：containerd 文件的路径；</li><li><code>-D, --debug=true|false</code>：是否使用 Debug 模式。缺省为 false；</li><li><code>--default-gateway=&quot;&quot;</code>：容器的 IPv4 网关地址，必须在网桥的子网段内；</li><li><code>--default-gateway-v6=&quot;&quot;</code>：容器的 IPv6 网关地址；</li><li><code>--default-ulimit=[]</code>：默认的 ulimit 值；</li><li><code>--disable-legacy-registry=true|false</code>：是否允许访问旧版本的镜像仓库服务器；</li><li><code>--dns=&quot;&quot;</code>：指定容器使用的 DNS 服务器地址；</li><li><code>--dns-opt=&quot;&quot;</code>：DNS 选项；</li><li><code>--dns-search=[]</code>：DNS 搜索域；</li><li><code>--exec-opt=[]</code>：运行时的执行选项；</li><li><code>--exec-root=&quot;&quot;</code>：容器执行状态文件的根路径，默认为 <code>/var/run/docker</code>；</li><li><code>--fixed-cidr=&quot;&quot;</code>：限定分配 IPv4 地址范围；</li><li><code>--fixed-cidr-v6=&quot;&quot;</code>：限定分配 IPv6 地址范围；</li><li><code>-G, --group=&quot;&quot;</code>：分配给 unix 套接字的组，默认为 <code>docker</code>；</li><li><code>-g, --graph=&quot;&quot;</code>：Docker 运行时的根路径，默认为 <code>/var/lib/docker</code>；</li><li><code>-H, --host=[]</code>：指定命令对应 Docker daemon 的监听接口，可以为 unix 套接字 <code>unix:///path/to/socket</code>，文件句柄 <code>fd://socketfd</code> 或 tcp 套接字 <code>tcp://[host[:port]]</code>，默认为 <code>unix:///var/run/docker.sock</code>；</li><li><code>--icc=true|false</code>：是否启用容器间以及跟 daemon 所在主机的通信。默认为 true。</li><li><code>--insecure-registry=[]</code>：允许访问给定的非安全仓库服务；</li><li><code>--ip=&quot;&quot;</code>：绑定容器端口时候的默认 IP 地址。缺省为 <code>0.0.0.0</code>；</li><li><code>--ip-forward=true|false</code>：是否检查启动在 Docker 主机上的启用 IP 转发服务，默认开启。注意关闭该选项将不对系统转发能力进行任何检查修改；</li><li><code>--ip-masq=true|false</code>：是否进行地址伪装，用于容器访问外部网络，默认开启；</li><li><code>--iptables=true|false</code>：是否允许 Docker 添加 iptables 规则。缺省为 true；</li><li><code>--ipv6=true|false</code>：是否启用 IPv6 支持，默认关闭；</li><li><code>-l, --log-level=&quot;debug|info|warn|error|fatal&quot;</code>：指定日志输出级别；</li><li><code>--label=&quot;[]&quot;</code>：添加指定的键值对标注；</li><li><code>--log-driver=&quot;json-file|syslog|journald|gelf|fluentd|awslogs|splunk|etwlogs|gcplogs|none&quot;</code>：指定日志后端驱动，默认为 <code>json-file</code>；</li><li><code>--log-opt=[]</code>：日志后端的选项；</li><li><code>--mtu=VALUE</code>：指定容器网络的 <code>mtu</code>；</li><li><code>-p=&quot;&quot;</code>：指定 daemon 的 PID 文件路径。缺省为 <code>/var/run/docker.pid</code>；</li><li><code>--raw-logs</code>：输出原始，未加色彩的日志信息；</li><li><code>--registry-mirror=&lt;scheme&gt;://&lt;host&gt;</code>：指定 <code>docker pull</code> 时使用的注册服务器镜像地址；</li><li><code>-s, --storage-driver=&quot;&quot;</code>：指定使用给定的存储后端；</li><li><code>--selinux-enabled=true|false</code>：是否启用 SELinux 支持。缺省值为 false。SELinux 目前尚不支持 overlay 存储驱动；</li><li><code>--storage-opt=[]</code>：驱动后端选项；</li><li><code>--tls=true|false</code>：是否对 Docker daemon 启用 TLS 安全机制，默认为否；</li><li><code>--tlscacert=/.docker/ca.pem</code>：TLS CA 签名的可信证书文件路径；</li><li><code>--tlscert=/.docker/cert.pem</code>：TLS 可信证书文件路径；</li><li><code>--tlscert=/.docker/key.pem</code>：TLS 密钥文件路径；</li><li><code>--tlsverify=true|false</code>：启用 TLS 校验，默认为否；</li><li><code>--userland-proxy=true|false</code>：是否使用用户态代理来实现容器间和出容器的回环通信，默认为 true；</li><li><code>--userns-remap=default|uid:gid|user:group|user|uid</code>：指定容器的用户命名空间，默认是创建新的 UID 和 GID 映射到容器内进程。</li></ul><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2>',4)),o("ul",null,[o("li",null,[o("a",u,[e[0]||(e[0]=r("官方文档")),t(d)])])])])}const m=c(s,[["render",p],["__file","dockerd.html.vue"]]),q=JSON.parse('{"path":"/index/Docker/appendix/command/dockerd.html","title":"服务端命令(dockerd)","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"dockerd 命令选项","slug":"dockerd-命令选项","link":"#dockerd-命令选项","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1729050589000,"updatedTime":1729050589000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":3.05,"words":916},"filePathRelative":"index/Docker/appendix/command/dockerd.md","localizedDate":"2024年10月16日","excerpt":"\\n<h2>dockerd 命令选项</h2>\\n<ul>\\n<li><code>--api-cors-header=\\"\\"</code>：CORS 头部域，默认不允许 CORS，要允许任意的跨域访问，可以指定为 \\"*\\"；</li>\\n<li><code>--authorization-plugin=\\"\\"</code>：载入认证的插件；</li>\\n<li><code>-b=\\"\\"</code>：将容器挂载到一个已存在的网桥上。指定为 <code>none</code> 时则禁用容器的网络，与 <code>--bip</code> 选项互斥；</li>\\n<li><code>--bip=\\"\\"</code>：让动态创建的 <code>docker0</code> 网桥采用给定的 CIDR 地址; 与 <code>-b</code> 选项互斥；</li>\\n<li><code>--cgroup-parent=\\"\\"</code>：指定 cgroup 的父组，默认 fs cgroup 驱动为 <code>/docker</code>，systemd cgroup 驱动为 <code>system.slice</code>；</li>\\n<li><code>--cluster-store=\\"\\"</code>：构成集群（如 <code>Swarm</code>）时，集群键值数据库服务地址；</li>\\n<li><code>--cluster-advertise=\\"\\"</code>：构成集群时，自身的被访问地址，可以为 <code>host:port</code> 或 <code>interface:port</code>；</li>\\n<li><code>--cluster-store-opt=\\"\\"</code>：构成集群时，键值数据库的配置选项；</li>\\n<li><code>--config-file=\\"/etc/docker/daemon.json\\"</code>：daemon 配置文件路径；</li>\\n<li><code>--containerd=\\"\\"</code>：containerd 文件的路径；</li>\\n<li><code>-D, --debug=true|false</code>：是否使用 Debug 模式。缺省为 false；</li>\\n<li><code>--default-gateway=\\"\\"</code>：容器的 IPv4 网关地址，必须在网桥的子网段内；</li>\\n<li><code>--default-gateway-v6=\\"\\"</code>：容器的 IPv6 网关地址；</li>\\n<li><code>--default-ulimit=[]</code>：默认的 ulimit 值；</li>\\n<li><code>--disable-legacy-registry=true|false</code>：是否允许访问旧版本的镜像仓库服务器；</li>\\n<li><code>--dns=\\"\\"</code>：指定容器使用的 DNS 服务器地址；</li>\\n<li><code>--dns-opt=\\"\\"</code>：DNS 选项；</li>\\n<li><code>--dns-search=[]</code>：DNS 搜索域；</li>\\n<li><code>--exec-opt=[]</code>：运行时的执行选项；</li>\\n<li><code>--exec-root=\\"\\"</code>：容器执行状态文件的根路径，默认为 <code>/var/run/docker</code>；</li>\\n<li><code>--fixed-cidr=\\"\\"</code>：限定分配 IPv4 地址范围；</li>\\n<li><code>--fixed-cidr-v6=\\"\\"</code>：限定分配 IPv6 地址范围；</li>\\n<li><code>-G, --group=\\"\\"</code>：分配给 unix 套接字的组，默认为 <code>docker</code>；</li>\\n<li><code>-g, --graph=\\"\\"</code>：Docker 运行时的根路径，默认为 <code>/var/lib/docker</code>；</li>\\n<li><code>-H, --host=[]</code>：指定命令对应 Docker daemon 的监听接口，可以为 unix 套接字 <code>unix:///path/to/socket</code>，文件句柄 <code>fd://socketfd</code> 或 tcp 套接字 <code>tcp://[host[:port]]</code>，默认为 <code>unix:///var/run/docker.sock</code>；</li>\\n<li><code>--icc=true|false</code>：是否启用容器间以及跟 daemon 所在主机的通信。默认为 true。</li>\\n<li><code>--insecure-registry=[]</code>：允许访问给定的非安全仓库服务；</li>\\n<li><code>--ip=\\"\\"</code>：绑定容器端口时候的默认 IP 地址。缺省为 <code>0.0.0.0</code>；</li>\\n<li><code>--ip-forward=true|false</code>：是否检查启动在 Docker 主机上的启用 IP 转发服务，默认开启。注意关闭该选项将不对系统转发能力进行任何检查修改；</li>\\n<li><code>--ip-masq=true|false</code>：是否进行地址伪装，用于容器访问外部网络，默认开启；</li>\\n<li><code>--iptables=true|false</code>：是否允许 Docker 添加 iptables 规则。缺省为 true；</li>\\n<li><code>--ipv6=true|false</code>：是否启用 IPv6 支持，默认关闭；</li>\\n<li><code>-l, --log-level=\\"debug|info|warn|error|fatal\\"</code>：指定日志输出级别；</li>\\n<li><code>--label=\\"[]\\"</code>：添加指定的键值对标注；</li>\\n<li><code>--log-driver=\\"json-file|syslog|journald|gelf|fluentd|awslogs|splunk|etwlogs|gcplogs|none\\"</code>：指定日志后端驱动，默认为 <code>json-file</code>；</li>\\n<li><code>--log-opt=[]</code>：日志后端的选项；</li>\\n<li><code>--mtu=VALUE</code>：指定容器网络的 <code>mtu</code>；</li>\\n<li><code>-p=\\"\\"</code>：指定 daemon 的 PID 文件路径。缺省为 <code>/var/run/docker.pid</code>；</li>\\n<li><code>--raw-logs</code>：输出原始，未加色彩的日志信息；</li>\\n<li><code>--registry-mirror=&lt;scheme&gt;://&lt;host&gt;</code>：指定 <code>docker pull</code> 时使用的注册服务器镜像地址；</li>\\n<li><code>-s, --storage-driver=\\"\\"</code>：指定使用给定的存储后端；</li>\\n<li><code>--selinux-enabled=true|false</code>：是否启用 SELinux 支持。缺省值为 false。SELinux 目前尚不支持 overlay 存储驱动；</li>\\n<li><code>--storage-opt=[]</code>：驱动后端选项；</li>\\n<li><code>--tls=true|false</code>：是否对 Docker daemon 启用 TLS 安全机制，默认为否；</li>\\n<li><code>--tlscacert=/.docker/ca.pem</code>：TLS CA 签名的可信证书文件路径；</li>\\n<li><code>--tlscert=/.docker/cert.pem</code>：TLS 可信证书文件路径；</li>\\n<li><code>--tlscert=/.docker/key.pem</code>：TLS 密钥文件路径；</li>\\n<li><code>--tlsverify=true|false</code>：启用 TLS 校验，默认为否；</li>\\n<li><code>--userland-proxy=true|false</code>：是否使用用户态代理来实现容器间和出容器的回环通信，默认为 true；</li>\\n<li><code>--userns-remap=default|uid:gid|user:group|user|uid</code>：指定容器的用户命名空间，默认是创建新的 UID 和 GID 映射到容器内进程。</li>\\n</ul>"}');export{m as comp,q as data};
