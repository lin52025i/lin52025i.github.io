import{_ as s,o as a,c as n,V as e}from"./chunks/framework.716eacd7.js";const y=JSON.parse('{"title":"Git 命令","description":"","frontmatter":{},"headers":[],"relativePath":"git/git-command.md","lastUpdated":1683186045000}'),l={name:"git/git-command.md"},o=e(`<h1 id="git-命令" tabindex="-1">Git 命令 <a class="header-anchor" href="#git-命令" aria-label="Permalink to &quot;Git 命令&quot;">​</a></h1><h2 id="切换远程仓库地址" tabindex="-1">切换远程仓库地址 <a class="header-anchor" href="#切换远程仓库地址" aria-label="Permalink to &quot;切换远程仓库地址&quot;">​</a></h2><ol><li>命名切换</li></ol><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#ABB2BF;">git </span><span style="color:#98C379;">remote</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">set-url</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">origin</span><span style="color:#ABB2BF;"> [url] </span><span style="color:#7F848E;font-style:italic;"># url 为修改后的远程地址</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>删除当前远程地址再添加远程地址</li></ol><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#ABB2BF;">git </span><span style="color:#98C379;">remote</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">rm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">origin</span></span>
<span class="line"><span style="color:#ABB2BF;">git </span><span style="color:#98C379;">remote</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">add</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">origin</span><span style="color:#ABB2BF;"> [url] </span><span style="color:#7F848E;font-style:italic;"># url 为修改后的远程地址</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,6),t=[o];function r(p,i,c,d,B,m){return a(),n("div",null,t)}const _=s(l,[["render",r]]);export{y as __pageData,_ as default};
