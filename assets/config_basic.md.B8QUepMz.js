import{_ as l,D as s,c as i,j as a,a as e,I as o,a8 as r,o as c}from"./chunks/framework.C4h01PAh.js";const D=JSON.parse('{"title":"基础设置","description":"","frontmatter":{"lang":"zh-cn","title":"基础设置"},"headers":[],"relativePath":"config/basic.md","filePath":"config/basic.md","lastUpdated":1723442587000}'),n={name:"config/basic.md"},d=r('<h1 id="基础设置" tabindex="-1">基础设置 <a class="header-anchor" href="#基础设置" aria-label="Permalink to &quot;基础设置&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">本节内容</p><p>本节将介绍基础设置内的内容。</p></div><h2 id="master-管理" tabindex="-1">Master 管理 <a class="header-anchor" href="#master-管理" aria-label="Permalink to &quot;Master 管理&quot;">​</a></h2><p>在这里你可以管理你的骰娘的 Master 列表。</p><h3 id="master-解锁码" tabindex="-1">Master 解锁码 <a class="header-anchor" href="#master-解锁码" aria-label="Permalink to &quot;Master 解锁码&quot;">​</a></h3><p>获取 Master 解锁码。Master 解锁码的用法参见 <a href="./../use/core.html#master-骰主指令">骰主指令</a>。每次获取有效期 20 分钟。</p><h3 id="master-列表" tabindex="-1">Master 列表 <a class="header-anchor" href="#master-列表" aria-label="Permalink to &quot;Master 列表&quot;">​</a></h3><p>在这里你可以添加、删除或更改 Master。请使用统一 ID，可使用 <code>.userid</code> 指令查看你的账号 ID。</p><p>你也可添加群组 ID，在指定的群中所有人均视为有 Master 权限</p><h3 id="消息通知列表" tabindex="-1">消息通知列表 <a class="header-anchor" href="#消息通知列表" aria-label="Permalink to &quot;消息通知列表&quot;">​</a></h3><p>会对以下消息进行通知：加群邀请、好友邀请、进入群组、被踢出群、被禁言、自动激活、指令退群。</p><p>此处应使用统一 ID。在你开启「邮箱通知」后，给通知列表中的 QQ 号发送通知时会自动转换成对应邮箱。</p><h4 id="好友邀请" tabindex="-1">好友邀请 <a class="header-anchor" href="#好友邀请" aria-label="Permalink to &quot;好友邀请&quot;">​</a></h4><p>由于 QQ 的限制，当你 QQ 的「加我为好友时需要的验证方式」设置为「允许任何人」时，添加的好友为单向好友，此时不会发送 <code>骰子成为好友</code> 文案和 <code>好友邀请</code> 通过。</p><p>请你按自己的需求选择其他的验证方式，若设置为「需要验证消息」或「需要回答问题并由我确认」，海豹会按照<a href="##加好友验证">加好友验证设置</a>自动通过或拒绝。</p><h2 id="邮箱通知" tabindex="-1">邮箱通知 <a class="header-anchor" href="#邮箱通知" aria-label="Permalink to &quot;邮箱通知&quot;">​</a></h2><p>为处理某些平台通知频繁引起的问题，开启此功能后<strong>只会通过邮件</strong>进行通知。请慎重决定是否开启，避免出现 <strong>为什么我的骰娘不发通知了？</strong> 的情况。</p><h3 id="发件邮箱" tabindex="-1">发件邮箱 <a class="header-anchor" href="#发件邮箱" aria-label="Permalink to &quot;发件邮箱&quot;">​</a></h3><p>填写你希望的发件邮箱，你指定的邮箱需支持通过 SMTP 协议发信，特别提醒：QQ 号被冻结后对应账号的邮箱也无法使用。</p><h3 id="邮箱密钥" tabindex="-1">邮箱密钥 <a class="header-anchor" href="#邮箱密钥" aria-label="Permalink to &quot;邮箱密钥&quot;">​</a></h3><p>填写邮箱密钥。</p><p>对于一些邮箱，密钥并不是登陆密码；例如：QQ 邮箱的 SMTP 功能需使用单独生成的授权码。</p><h3 id="smtp-地址" tabindex="-1">SMTP 地址 <a class="header-anchor" href="#smtp-地址" aria-label="Permalink to &quot;SMTP 地址&quot;">​</a></h3><p>填写你邮箱服务提供商的 SMTP 地址。例如：QQ 邮箱为 <code>smtp.qq.com</code>。</p><h2 id="私骰模式" tabindex="-1">私骰模式 <a class="header-anchor" href="#私骰模式" aria-label="Permalink to &quot;私骰模式&quot;">​</a></h2><p>因 QQ 的实现变更，此功能暂无实际作用。</p><h2 id="允许自由开关" tabindex="-1">允许自由开关 <a class="header-anchor" href="#允许自由开关" aria-label="Permalink to &quot;允许自由开关&quot;">​</a></h2><p>允许任何人执行 bot on/off 和 ext on/off，否则只有邀请者、管理员和 Master 进行操作。</p><h2 id="启用戳一戳" tabindex="-1">启用戳一戳 <a class="header-anchor" href="#启用戳一戳" aria-label="Permalink to &quot;启用戳一戳&quot;">​</a></h2><p>仅 QQ 平台，关闭后不回应戳一戳。</p>',30),h={class:"warning custom-block"},p=a("p",{class:"custom-block-title"},[e("注意：对接基于 NTQQ PC 端协议的 QQ 方案时，注意对方是否支持 "),a("code",null,"戳一戳"),e(" 功能")],-1),u=a("p",null,"内置客户端/Lagrange、LLOneBot 和 Napcat 等基于 NTQQ PC 的 QQ 方案，在旧版本中由于 NTQQ 旧协议本身不支持的原因，缺失该功能。",-1),b=a("p",null,"请使用：",-1),_=a("li",null,"……",-1),m=a("p",null,[e("等方案的用户及时更新或"),a("strong",null,"关闭此开关"),e("（位于 "),a("code",null,"综合设置"),e(" - "),a("code",null,"基本设置"),e("），以免产生不必要的报错信息。")],-1),f=r('<h2 id="限制-text-指令" tabindex="-1">限制 .text 指令 <a class="header-anchor" href="#限制-text-指令" aria-label="Permalink to &quot;限制 .text 指令&quot;">​</a></h2><p>默认开启。开启后只有 Master 和信任用户可使用 <a href="./../use/fun.html#text-文本模板测试"><code>.text</code></a> 指令。如果你不了解这个指令，一定要开启。</p><h2 id="忽略-bot-裸指令" tabindex="-1">忽略 .bot 裸指令 <a class="header-anchor" href="#忽略-bot-裸指令" aria-label="Permalink to &quot;忽略 .bot 裸指令&quot;">​</a></h2><p>默认关闭。开启后在群聊中只有 AT 骰子才会响应 <code>.bot</code> 指令。</p><h2 id="存活确认" tabindex="-1">存活确认 <a class="header-anchor" href="#存活确认" aria-label="Permalink to &quot;存活确认&quot;">​</a></h2><p>定期向通知列表发送消息，以便于骰主知晓存活状态。</p><p>存活消息间隔写法：<code>@every 1h30m10s</code> 表示 1 小时 30 分 10 秒。更多请参阅 <a href="https://pkg.go.dev/github.com/robfig/cron" target="_blank" rel="noreferrer">cron 文档</a>。</p><p>注意：重启骰子后重新计时。</p><h2 id="日志记录提示" tabindex="-1">日志记录提示 <a class="header-anchor" href="#日志记录提示" aria-label="Permalink to &quot;日志记录提示&quot;">​</a></h2><p>开启后，每记录 N 条文本后，主动发送一条提醒信息，避免忘记 <code>.log off</code>。</p><h2 id="刷屏警告" tabindex="-1">刷屏警告 <a class="header-anchor" href="#刷屏警告" aria-label="Permalink to &quot;刷屏警告&quot;">​</a></h2><p>默认关闭。开启后会对使用指令过快的用户和群组进行警告，警告后继续使用指令会增加怒气值，只对 QQ 平台有效。</p><p>刷屏警告工作原理为令牌桶算法，具体请看 <a href="https://en.wikipedia.org/wiki/Token_bucket" target="_blank" rel="noreferrer">wiki</a>。</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>如果您感觉难以理解，为了稳定性还是不要更改比较好！</p></div><div class="warning custom-block"><p class="custom-block-title">对速率限制的所有更改 重启后生效</p></div><div class="info custom-block"><p class="custom-block-title">速率设置支持以下格式：</p><p>@every 3s 每 3 秒一个；</p><p>3 每秒 3 个。</p></div><h2 id="访问控制" tabindex="-1">访问控制 <a class="header-anchor" href="#访问控制" aria-label="Permalink to &quot;访问控制&quot;">​</a></h2><p>对于 UI 界面地址由 <code>{Host:Port}</code> 两部分组成。</p><p><code>Host</code> 可分为两种，0.0.0.0 主要用于服务器，代表可以在公网中用你的手机和电脑访问；127.0.0.1 主要用于自己的电脑/手机，只能在当前设备上管理海豹。</p><p><code>Port</code> 为海豹核心运行的端口，默认为 3211，想开多个海豹必须修改端口号！</p><div class="warning custom-block"><p class="custom-block-title">注意：重启骰子后生效！</p></div><p>当你的海豹核心运行在公网时可设置密码，避免他人访问。</p><p>登录后会自动记住一段时间。如果忘记密码请看 <a href="./../use/faq.html#我忘了-webui-密码">我忘了 WebUI 密码</a>。</p><h2 id="qq-频道设置" tabindex="-1">QQ 频道设置 <a class="header-anchor" href="#qq-频道设置" aria-label="Permalink to &quot;QQ 频道设置&quot;">​</a></h2><p>开启后将回应频道消息。基于 NTQQ 的连接方案暂不支持 QQ 频道。</p><h2 id="加好友验证" tabindex="-1">加好友验证 <a class="header-anchor" href="#加好友验证" aria-label="Permalink to &quot;加好友验证&quot;">​</a></h2><p>仅当 QQ 账号选用「回答问题并由我确认」方式时有效。</p><p>如果留空，则海豹核心将通过所有好友请求。</p><p>你设定的答案不应含有空格。如果设置了多个问题，将所有答案用空格连接起来。例如：</p><blockquote><p>问题 1：以 dis 开头的退群指令是什么</p><p>问题 2：你是否已阅读使用说明</p></blockquote><p>则在 WebUI 应填写为：<code>dismiss 是</code></p>',31),q={id:"自动退出不活跃群组",tabindex:"-1"},k=a("a",{class:"header-anchor",href:"#自动退出不活跃群组","aria-label":'Permalink to "自动退出不活跃群组 <Badge type="tip" text="v1.4.2" />"'},"​",-1),x=a("p",null,"你可以设定一个时间线，单位是 天。",-1),Q=a("p",null,"每天凌晨 4 时，海豹核心会检查在每个 QQ 群组中最后一次发送消息的时间。如果未发送消息的天数超过了你的设定，海豹核心会自动从该群组中退出。",-1),P=a("p",null,"退出前，海豹会向通知列表发送一条通知。",-1),g=a("p",null,"将时间线设置为 0 即可关闭自动退群功能。",-1),v=a("p",null,"自动退群将会按批次执行。你可以在 WebUI 中设置每个批次的数量和批次间隔时间。每两批之间将会间隔你所指定的分钟数。每批次内退出两个群将间隔 10 秒。",-1);function T(M,N,I,S,y,w){const t=s("Badge");return c(),i("div",null,[d,a("div",h,[p,u,b,a("ul",null,[a("li",null,[e("海豹版本 "),o(t,{type:"tip",text:"v1.4.6"}),e(" 之前的内置客户端")]),a("li",null,[o(t,{type:"tip",text:"6e350b0"}),e(" 之前的 Lagrange")]),a("li",null,[o(t,{type:"tip",text:"v3.27.0"}),e(" 之前的 LLOneBot")]),a("li",null,[o(t,{type:"tip",text:"v1.6.7"}),e(" 之前的 Napcat")]),_]),m]),f,a("h2",q,[e("自动退出不活跃群组 "),o(t,{type:"tip",text:"v1.4.2"}),e(),k]),a("p",null,[e("这是 "),o(t,{type:"tip",text:"v1.4.2"}),e(" 版本新增的功能。")]),x,Q,P,g,a("p",null,[e("在 "),o(t,{type:"tip",text:"v1.4.4"}),e(" 版本做了优化调整。")]),v])}const V=l(n,[["render",T]]);export{D as __pageData,V as default};
