import{_ as r,o as d,c,a as e,b as s,w as l,e as i,d as a,r as t}from"./app.f72270cc.js";const h={},m=i('<h1 id="mfm" tabindex="-1"><a class="header-anchor" href="#mfm" aria-hidden="true">#</a> MFM</h1><p>MFM, which stands for Misskey Flavoured Markdown, is a dedicated markup language that can be used in various places on Misskey.</p><div class="custom-container tip"><i class="fas fa-info"></i><p>Some of the syntax is compatible with Markdown.</p></div><h2 id="examples-of-where-misskey-is-allowed" tabindex="-1"><a class="header-anchor" href="#examples-of-where-misskey-is-allowed" aria-hidden="true">#</a> examples of where misskey is allowed</h2><ul><li>note body</li><li>content warnings</li><li>user name</li><li>user profile</li></ul><h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> Syntax</h2><h3 id="mentions" tabindex="-1"><a class="header-anchor" href="#mentions" aria-hidden="true">#</a> Mentions</h3>',7),u={class:"custom-container tip"},f=e("i",{class:"fas fa-info"},null,-1),p=a("For more information about Mentions, see "),x=a("here"),_=a("."),g=i(`<div class="language-text ext-text"><pre class="language-text"><code>@alice
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>@alice@example.com
</code></pre></div><h3 id="hashtags" tabindex="-1"><a class="header-anchor" href="#hashtags" aria-hidden="true">#</a> Hashtags</h3><div class="custom-container tip"><i class="fas fa-info"></i><p>For more information about hashtags, see <a href="./hashtag">here</a>.</p></div><div class="language-text ext-text"><pre class="language-text"><code>#misskey
</code></pre></div><h3 id="custom-emoji" tabindex="-1"><a class="header-anchor" href="#custom-emoji" aria-hidden="true">#</a> Custom Emoji</h3><div class="custom-container tip"><i class="fas fa-info"></i><p>For more information about custom emoji, see <a href="./custom-emoji">here</a>.</p></div><div class="language-text ext-text"><pre class="language-text"><code>:misskey:
</code></pre></div><h3 id="links" tabindex="-1"><a class="header-anchor" href="#links" aria-hidden="true">#</a> Links</h3><div class="language-text ext-text"><pre class="language-text"><code>[example link](https://example.com)
</code></pre></div><h3 id="bold" tabindex="-1"><a class="header-anchor" href="#bold" aria-hidden="true">#</a> Bold</h3><div class="language-text ext-text"><pre class="language-text"><code>**Bold**
</code></pre></div><hr><div class="custom-container tip"><i class="fas fa-info"></i><p>More available syntax can be found in the <strong>MFM cheat sheet</strong> provided by the Misskey web UI under <code>/mfm-cheat-sheet</code> on your instance.</p></div><h2 id="information-for-developers" tabindex="-1"><a class="header-anchor" href="#information-for-developers" aria-hidden="true">#</a> Information for Developers</h2><p>The parser implementation of MFM is available as a library, making it easier to embed MFM in your clients.</p>`,16),v={href:"https://github.com/misskey-dev/mfm.js",target:"_blank",rel:"noopener noreferrer"},b=a("misskey-dev/mfm.js"),k=a(" - parser implementation in JavaScript");function y(M,w){const o=t("RouterLink"),n=t("ExternalLinkIcon");return d(),c("div",null,[m,e("div",u,[f,e("p",null,[p,s(o,{to:"/en/docs/features/mention.html"},{default:l(()=>[x]),_:1}),_])]),g,e("ul",null,[e("li",null,[e("a",v,[b,s(n)]),k])])])}var j=r(h,[["render",y],["__file","mfm.html.vue"]]);export{j as default};
