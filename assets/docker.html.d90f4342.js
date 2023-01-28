import{_ as i,o,c as t,a as e,b as c,e as s,d as n,r as d}from"./app.f72270cc.js";const l={},r=s(`<h1 id="create-misskey-instance-with-docker-compose" tabindex="-1"><a class="header-anchor" href="#create-misskey-instance-with-docker-compose" aria-hidden="true">#</a> Create Misskey instance with Docker Compose</h1><p>This guide describes how to install and setup Misskey with Docker Compose.</p><div class="custom-container danger"><i class="fas fa-times"></i><p>Never change the domain name (hostname) of an instance once you start using it!</p></div><div class="custom-container tip"><i class="fas fa-info"></i><p class="custom-container-title">Requirement</p><ul><li>docker and dockercompose installed</li></ul></div><h2 id="get-the-repository" tabindex="-1"><a class="header-anchor" href="#get-the-repository" aria-hidden="true">#</a> Get the repository</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone -b master https://github.com/misskey-dev/misskey.git
<span class="token builtin class-name">cd</span> misskey
<span class="token function">git</span> checkout master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="configure" tabindex="-1"><a class="header-anchor" href="#configure" aria-hidden="true">#</a> Configure</h2><p>Copy example configuration files with following:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cp</span> .config/example.yml .config/default.yml
<span class="token function">cp</span> .config/docker_example.env .config/docker.env
<span class="token function">cp</span> ./docker-compose.yml.example ./docker-compose.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Edit <code>default.yml</code> and <code>docker.env</code> according to the instructions in the files.</p><p>Edit <code>docker-compose.yml</code> if necessary. (e.g. if you want to change the port).</p><h2 id="build-and-initialize" tabindex="-1"><a class="header-anchor" href="#build-and-initialize" aria-hidden="true">#</a> Build and initialize</h2><p>The following command will build Misskey and initialize the database. This will take some time.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> compose build
<span class="token function">sudo</span> <span class="token function">docker</span> compose run --rm web <span class="token function">pnpm</span> run init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="launch" tabindex="-1"><a class="header-anchor" href="#launch" aria-hidden="true">#</a> Launch</h2><p>Well done! You can start Misskey with the following command.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> compose up -d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>GLHF\u2728</p><h2 id="how-to-update-your-misskey-server" tabindex="-1"><a class="header-anchor" href="#how-to-update-your-misskey-server" aria-hidden="true">#</a> How to update your Misskey server</h2>`,19),u={class:"custom-container warning"},p=e("i",{class:"fas fa-exclamation"},null,-1),h=n("When updating, be sure to check the "),m={href:"https://github.com/misskey-dev/misskey/blob/master/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"},k=n("release notes"),v=n(" to know in advance the changes and whether or not additional work is required (in most cases, it is not)."),b=s(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> stash
<span class="token function">git</span> checkout master
<span class="token function">git</span> pull
<span class="token function">git</span> submodule update --init
<span class="token function">git</span> stash pop
<span class="token function">sudo</span> <span class="token function">docker</span> compose build
<span class="token function">sudo</span> <span class="token function">docker</span> compose stop <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> <span class="token function">docker</span> compose up -d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>It may take some time depending on the contents of the update and the size of the database.</p><h2 id="how-to-execute-cli-command" tabindex="-1"><a class="header-anchor" href="#how-to-execute-cli-command" aria-hidden="true">#</a> How to execute CLI command</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> compose run --rm web <span class="token function">node</span> packages/backend/built/tools/foo bar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4);function f(g,_){const a=d("ExternalLinkIcon");return o(),t("div",null,[r,e("div",u,[p,e("p",null,[h,e("a",m,[k,c(a)]),v])]),b])}var x=i(l,[["render",f],["__file","docker.html.vue"]]);export{x as default};
