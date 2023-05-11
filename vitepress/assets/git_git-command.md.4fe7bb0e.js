import{_ as s,o as n,c as a,V as l}from"./chunks/framework.716eacd7.js";const u=JSON.parse('{"title":"Git 命令","description":"","frontmatter":{},"headers":[],"relativePath":"git/git-command.md","lastUpdated":1683784892000}'),p={name:"git/git-command.md"},e=l(`<h1 id="git-命令" tabindex="-1">Git 命令 <a class="header-anchor" href="#git-命令" aria-label="Permalink to &quot;Git 命令&quot;">​</a></h1><h2 id="切换远程仓库地址" tabindex="-1">切换远程仓库地址 <a class="header-anchor" href="#切换远程仓库地址" aria-label="Permalink to &quot;切换远程仓库地址&quot;">​</a></h2><ol><li>命令切换</li></ol><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#ABB2BF;">git </span><span style="color:#98C379;">remote</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">set-url</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">origin</span><span style="color:#ABB2BF;"> [url] </span><span style="color:#7F848E;font-style:italic;"># url 为修改后的远程地址</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>删除当前远程地址再添加远程地址</li></ol><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#ABB2BF;">git </span><span style="color:#98C379;">remote</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">rm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">origin</span></span>
<span class="line"><span style="color:#ABB2BF;">git </span><span style="color:#98C379;">remote</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">add</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">origin</span><span style="color:#ABB2BF;"> [url] </span><span style="color:#7F848E;font-style:italic;"># url 为修改后的远程地址</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="修改分支提交的作者" tabindex="-1">修改分支提交的作者 <a class="header-anchor" href="#修改分支提交的作者" aria-label="Permalink to &quot;修改分支提交的作者&quot;">​</a></h2><p><a href="https://blog.51cto.com/liguodong/5110629" target="_blank" rel="noreferrer">https://blog.51cto.com/liguodong/5110629</a></p><ol><li>修改当前分支</li></ol><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#ABB2BF;">git </span><span style="color:#98C379;">commit</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-m</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;&lt;message&gt;&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--author=</span><span style="color:#98C379;">&quot;&lt;name&gt; &lt;&lt;email&gt;&gt;&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;"># 提交的时候修改 提交作者</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>修改上次提交</li></ol><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#ABB2BF;">git </span><span style="color:#98C379;">commit</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--amend</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--author=</span><span style="color:#98C379;">&quot;&lt;name&gt; &lt;&lt;email&gt;&gt;&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3"><li>修改多次提交</li></ol><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#ABB2BF;">git </span><span style="color:#98C379;">rebase</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-i</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">HEAD~n</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;"># 压缩合并多次提交</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># eg git rebase -i HEAD~3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">##</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 然后将需要修改信息的提交 前面的 pick 修改成 edit</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 然后使用 \`git commit --amend --author=&quot;&lt;name&gt; &lt;&lt;email&gt;&gt;&quot;\` 修改从上到下每一条 commit 的信息</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 每修改完一条后使用 \`git rebase continue\` 进行下一条 commit 的修改</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 修改完成之后使用可以使用 \`git log\` 查看是否修改成功</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 修改成功后使用 \`git push -f\` 提交修改</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">##</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ol start="4"><li>修改所有提交</li></ol><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 重置项目用户信息</span></span>
<span class="line"><span style="color:#ABB2BF;">git </span><span style="color:#98C379;">config</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--local</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">user.name</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;&lt;name&gt;&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">git </span><span style="color:#98C379;">config</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--local</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">user.email</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;&lt;email&gt;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 查看是否修改成功</span></span>
<span class="line"><span style="color:#ABB2BF;">git </span><span style="color:#98C379;">config</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--local</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 回到当前分支的第一个修改</span></span>
<span class="line"><span style="color:#ABB2BF;">git </span><span style="color:#98C379;">rebase</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-i</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--root</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;"># 会弹出 vim 编辑器，将需要修改的 commit 前面的 pick 改成 edit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 对每个 commit 进行重置提交作者信息</span></span>
<span class="line"><span style="color:#ABB2BF;">git </span><span style="color:#98C379;">commit</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--amend</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--reset-author</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;"># 会弹出 vim 编辑器，直接 :q 退出即可. 或者在后面添加 --no-edit 只重置提交作者信息</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 进入下一个 commit</span></span>
<span class="line"><span style="color:#ABB2BF;">git </span><span style="color:#98C379;">rebase</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">contiune</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 重复上面两个操作将需要修改的每一个 commit 都进行修改</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 查看是否修改成功</span></span>
<span class="line"><span style="color:#ABB2BF;">git </span><span style="color:#98C379;">log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 强制提交到仓库</span></span>
<span class="line"><span style="color:#ABB2BF;">git </span><span style="color:#98C379;">push</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-f</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,16),o=[e];function t(r,c,i,y,B,m){return n(),a("div",null,o)}const d=s(p,[["render",t]]);export{u as __pageData,d as default};
