import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,d as s,b as t,e as n,a as o,o as p,r as d}from"./app-BlitenSH.js";const l={},c={href:"https://blog.scottlowe.org/2013/09/04/introducing-linux-network-namespaces/",target:"_blank",rel:"noopener noreferrer"};function h(m,e){const a=d("ExternalLinkIcon");return p(),i("div",null,[e[3]||(e[3]=s('<h1 id="命名空间" tabindex="-1"><a class="header-anchor" href="#命名空间"><span>命名空间</span></a></h1><p>命名空间是 Linux 内核一个强大的特性。每个容器都有自己单独的命名空间，运行在其中的应用都像是在独立的操作系统中运行一样。命名空间保证了容器之间彼此互不影响。</p><h2 id="pid-命名空间" tabindex="-1"><a class="header-anchor" href="#pid-命名空间"><span>pid 命名空间</span></a></h2><p>不同用户的进程就是通过 pid 命名空间隔离开的，且不同命名空间中可以有相同 pid。所有的 LXC 进程在 Docker 中的父进程为 Docker 进程，每个 LXC 进程具有不同的命名空间。同时由于允许嵌套，因此可以很方便的实现嵌套的 Docker 容器。</p><h2 id="net-命名空间" tabindex="-1"><a class="header-anchor" href="#net-命名空间"><span>net 命名空间</span></a></h2><p>有了 pid 命名空间，每个命名空间中的 pid 能够相互隔离，但是网络端口还是共享 host 的端口。网络隔离是通过 net 命名空间实现的， 每个 net 命名空间有独立的 网络设备，IP 地址，路由表，/proc/net 目录。这样每个容器的网络就能隔离开来。Docker 默认采用 veth 的方式，将容器中的虚拟网卡同 host 上的一 个Docker 网桥 docker0 连接在一起。</p><h2 id="ipc-命名空间" tabindex="-1"><a class="header-anchor" href="#ipc-命名空间"><span>ipc 命名空间</span></a></h2><p>容器中进程交互还是采用了 Linux 常见的进程间交互方法(interprocess communication - IPC)， 包括信号量、消息队列和共享内存等。然而同 VM 不同的是，容器的进程间交互实际上还是 host 上具有相同 pid 命名空间中的进程间交互，因此需要在 IPC 资源申请时加入命名空间信息，每个 IPC 资源有一个唯一的 32 位 id。</p><h2 id="mnt-命名空间" tabindex="-1"><a class="header-anchor" href="#mnt-命名空间"><span>mnt 命名空间</span></a></h2><p>类似 chroot，将一个进程放到一个特定的目录执行。mnt 命名空间允许不同命名空间的进程看到的文件结构不同，这样每个命名空间 中的进程所看到的文件目录就被隔离开了。同 chroot 不同，每个命名空间中的容器在 /proc/mounts 的信息只包含所在命名空间的 mount point。</p><h2 id="uts-命名空间" tabindex="-1"><a class="header-anchor" href="#uts-命名空间"><span>uts 命名空间</span></a></h2><p>UTS(&quot;UNIX Time-sharing System&quot;) 命名空间允许每个容器拥有独立的 hostname 和 domain name， 使其在网络上可以被视作一个独立的节点而非 主机上的一个进程。</p><h2 id="user-命名空间" tabindex="-1"><a class="header-anchor" href="#user-命名空间"><span>user 命名空间</span></a></h2><p>每个容器可以有不同的用户和组 id， 也就是说可以在容器内用容器内部的用户执行程序而非主机上的用户。</p>',14)),t("p",null,[e[1]||(e[1]=n("*注：更多关于 Linux 上命名空间的信息，请阅读 ")),t("a",c,[e[0]||(e[0]=n("这篇文章")),o(a)]),e[2]||(e[2]=n("。"))])])}const x=r(l,[["render",h],["__file","namespace.html.vue"]]),f=JSON.parse('{"path":"/index/Docker/underly/namespace.html","title":"命名空间","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"pid 命名空间","slug":"pid-命名空间","link":"#pid-命名空间","children":[]},{"level":2,"title":"net 命名空间","slug":"net-命名空间","link":"#net-命名空间","children":[]},{"level":2,"title":"ipc 命名空间","slug":"ipc-命名空间","link":"#ipc-命名空间","children":[]},{"level":2,"title":"mnt 命名空间","slug":"mnt-命名空间","link":"#mnt-命名空间","children":[]},{"level":2,"title":"uts 命名空间","slug":"uts-命名空间","link":"#uts-命名空间","children":[]},{"level":2,"title":"user 命名空间","slug":"user-命名空间","link":"#user-命名空间","children":[]}],"git":{"createdTime":1729050589000,"updatedTime":1729050589000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.18,"words":654},"filePathRelative":"index/Docker/underly/namespace.md","localizedDate":"2024年10月16日","excerpt":"\\n<p>命名空间是 Linux 内核一个强大的特性。每个容器都有自己单独的命名空间，运行在其中的应用都像是在独立的操作系统中运行一样。命名空间保证了容器之间彼此互不影响。</p>\\n<h2>pid 命名空间</h2>\\n<p>不同用户的进程就是通过 pid 命名空间隔离开的，且不同命名空间中可以有相同 pid。所有的 LXC 进程在 Docker 中的父进程为 Docker 进程，每个 LXC 进程具有不同的命名空间。同时由于允许嵌套，因此可以很方便的实现嵌套的 Docker 容器。</p>\\n<h2>net 命名空间</h2>\\n<p>有了 pid 命名空间，每个命名空间中的 pid 能够相互隔离，但是网络端口还是共享 host 的端口。网络隔离是通过 net 命名空间实现的， 每个 net 命名空间有独立的 网络设备，IP 地址，路由表，/proc/net 目录。这样每个容器的网络就能隔离开来。Docker 默认采用 veth 的方式，将容器中的虚拟网卡同 host 上的一 个Docker 网桥 docker0 连接在一起。</p>"}');export{x as comp,f as data};
