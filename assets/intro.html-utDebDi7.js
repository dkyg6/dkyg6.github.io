import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as d,d as i,b as o,e as t,a as n,o as s,r as p}from"./app-BlitenSH.js";const u="/assets/etcd_logo-BcUQkBcX.png",g={},f={href:"https://github.com/etcd-io/etcd",target:"_blank",rel:"noopener noreferrer"},a={href:"https://zookeeper.apache.org/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/ha/doozerd",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/grpc/grpc",target:"_blank",rel:"noopener noreferrer"},k={href:"https://raft.github.io/",target:"_blank",rel:"noopener noreferrer"},x={href:"http://raftconsensus.github.io",target:"_blank",rel:"noopener noreferrer"};function c(S,e){const r=p("ExternalLinkIcon");return s(),d("div",null,[e[23]||(e[23]=i('<h1 id="什么是-etcd" tabindex="-1"><a class="header-anchor" href="#什么是-etcd"><span>什么是 etcd</span></a></h1><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><code>etcd</code> 是 <code>CoreOS</code> 团队于 2013 年 6 月发起的开源项目，它的目标是构建一个高可用的分布式键值（<code>key-value</code>）数据库，基于 <code>Go</code> 语言实现。我们知道，在分布式系统中，各种服务的配置信息的管理分享，服务的发现是一个很基本同时也是很重要的问题。<code>CoreOS</code> 项目就希望基于 <code>etcd</code> 来解决这一问题。</p>',3)),o("p",null,[e[1]||(e[1]=o("code",null,"etcd",-1)),e[2]||(e[2]=t(" 目前在 ")),o("a",f,[e[0]||(e[0]=t("github.com/etcd-io/etcd")),n(r)]),e[3]||(e[3]=t(" 进行维护。"))]),o("p",null,[e[6]||(e[6]=t("受到 ")),o("a",a,[e[4]||(e[4]=t("Apache ZooKeeper")),n(r)]),e[7]||(e[7]=t(" 项目和 ")),o("a",m,[e[5]||(e[5]=t("doozer")),n(r)]),e[8]||(e[8]=t(" 项目的启发，")),e[9]||(e[9]=o("code",null,"etcd",-1)),e[10]||(e[10]=t(" 在设计的时候重点考虑了下面四个要素："))]),o("ul",null,[o("li",null,[o("p",null,[e[12]||(e[12]=t("简单：具有定义良好、面向用户的 ")),e[13]||(e[13]=o("code",null,"API",-1)),e[14]||(e[14]=t(" (")),o("a",b,[e[11]||(e[11]=t("gRPC")),n(r)]),e[15]||(e[15]=t(")"))])]),e[16]||(e[16]=o("li",null,[o("p",null,[t("安全：支持 "),o("code",null,"HTTPS"),t(" 方式的访问")])],-1)),e[17]||(e[17]=o("li",null,[o("p",null,[t("快速：支持并发 "),o("code",null,"10 k/s"),t(" 的写操作")])],-1)),e[18]||(e[18]=o("li",null,[o("p",null,[t("可靠：支持分布式结构，基于 "),o("code",null,"Raft"),t(" 的一致性算法")])],-1))]),e[24]||(e[24]=o("p",null,[o("em",null,"Apache ZooKeeper 是一套知名的分布式系统中进行同步和一致性管理的工具。")],-1)),e[25]||(e[25]=o("p",null,[o("em",null,"doozer 是一个一致性分布式数据库。")],-1)),o("p",null,[o("em",null,[o("a",k,[e[19]||(e[19]=t("Raft")),n(r)]),e[21]||(e[21]=t(" 是一套通过选举主节点来实现分布式系统一致性的算法，相比于大名鼎鼎的 Paxos 算法，它的过程更容易被人理解，由 Stanford 大学的 Diego Ongaro 和 John Ousterhout 提出。更多细节可以参考 ")),o("a",x,[e[20]||(e[20]=t("raftconsensus.github.io")),n(r)]),e[22]||(e[22]=t("。"))])]),e[26]||(e[26]=o("p",null,[t("一般情况下，用户使用 "),o("code",null,"etcd"),t(" 可以在多个节点上启动多个实例，并添加它们为一个集群。同一个集群中的 "),o("code",null,"etcd"),t(" 实例将会保持彼此信息的一致性。")],-1))])}const O=l(g,[["render",c],["__file","intro.html.vue"]]),v=JSON.parse('{"path":"/index/Docker/etcd/intro.html","title":"什么是 etcd","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"createdTime":1729050589000,"updatedTime":1729050589000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.29,"words":387},"filePathRelative":"index/Docker/etcd/intro.md","localizedDate":"2024年10月16日","excerpt":"\\n<figure><figcaption></figcaption></figure>\\n<p><code>etcd</code> 是 <code>CoreOS</code> 团队于 2013 年 6 月发起的开源项目，它的目标是构建一个高可用的分布式键值（<code>key-value</code>）数据库，基于 <code>Go</code> 语言实现。我们知道，在分布式系统中，各种服务的配置信息的管理分享，服务的发现是一个很基本同时也是很重要的问题。<code>CoreOS</code> 项目就希望基于 <code>etcd</code> 来解决这一问题。</p>\\n<p><code>etcd</code> 目前在 <a href=\\"https://github.com/etcd-io/etcd\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">github.com/etcd-io/etcd</a> 进行维护。</p>"}');export{O as comp,v as data};
