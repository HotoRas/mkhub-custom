import{_ as r,o as t,c as d,a as e,b as i,w as n,d as s,e as o,r as l}from"./app.3b6b0e21.js";const c={},h=e("h1",{id:"misskey-install-shell-script-v3-0-0",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#misskey-install-shell-script-v3-0-0","aria-hidden":"true"},"#"),s(" Misskey install shell script v3.0.0")],-1),u=e("p",null,"Install Misskey with one shell script!",-1),p=e("p",null,"You can install misskey on an Ubuntu server just by answering some questions.",-1),m=e("p",null,"There is also an update script.",-1),b=s("For v12"),v=e("br",null,null,-1),k=s("For older versions of Misskey"),g=o(`<h2 id="license" tabindex="-1"><a class="header-anchor" href="#license" aria-hidden="true">#</a> License</h2><p><a href="./LICENSE">MIT License</a></p><h2 id="ingredients" tabindex="-1"><a class="header-anchor" href="#ingredients" aria-hidden="true">#</a> Ingredients</h2><ol><li>A Domain</li><li>An Ubuntu Server</li><li>A Cloudflare Account (recommended)</li></ol><h2 id="configure-cloudflare" tabindex="-1"><a class="header-anchor" href="#configure-cloudflare" aria-hidden="true">#</a> Configure Cloudflare</h2><p>If you are using nginx and Cloudflare, you must configure Cloudflare:</p><ul><li>Set DNS.</li><li>On SSL/TLS setting tab, switch the encryption mode to &quot;Full&quot;.</li></ul><h2 id="procedures" tabindex="-1"><a class="header-anchor" href="#procedures" aria-hidden="true">#</a> Procedures</h2><h3 id="_1-ssh" tabindex="-1"><a class="header-anchor" href="#_1-ssh" aria-hidden="true">#</a> 1. SSH</h3><p>Connect to the server via SSH.<br> (If you have the server&#39;s desktop open, open the shell.)</p><h3 id="_2-clean-up" tabindex="-1"><a class="header-anchor" href="#_2-clean-up" aria-hidden="true">#</a> 2. Clean up</h3><p>Make sure all packages are up to date and reboot.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo apt update; sudo apt full-upgrade -y; sudo reboot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-start-the-installation" tabindex="-1"><a class="header-anchor" href="#_3-start-the-installation" aria-hidden="true">#</a> 3. Start the installation</h3><p>Reconnect SSH and let&#39;s start installing Misskey.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">wget</span> https://raw.githubusercontent.com/joinmisskey/bash-install/main/ubuntu.sh -O ubuntu.sh<span class="token punctuation">;</span> <span class="token function">sudo</span> <span class="token function">bash</span> ubuntu.sh
</code></pre></div><h3 id="_4-to-update" tabindex="-1"><a class="header-anchor" href="#_4-to-update" aria-hidden="true">#</a> 4. To update</h3><p>There is also an update script.</p><p>The update script does not update the environment.<br> Please refer to CHANGELOG (Japanese) and <a href="https://github.com/joinmisskey/bash-install/releases" target="_blank" rel="noopener noreferrer">GitHub release list (English)</a> and perform migration operations accordingly.</p><p>First, download the script.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">wget</span> https://raw.githubusercontent.com/joinmisskey/bash-install/main/update.ubuntu.sh -O update.sh
</code></pre></div><p>Run it when you want to update Misskey.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">bash</span> update.sh
</code></pre></div><ul><li>In the systemd environment, the <code>-r</code> option can be used to update and reboot the system.</li><li>In the docker environment, you can specify repository:tag as an argument.</li></ul><h2 id="environments-in-which-the-operation-was-tested" tabindex="-1"><a class="header-anchor" href="#environments-in-which-the-operation-was-tested" aria-hidden="true">#</a> Environments in which the operation was tested</h2><h3 id="oracle-cloud-infrastructure" tabindex="-1"><a class="header-anchor" href="#oracle-cloud-infrastructure" aria-hidden="true">#</a> Oracle Cloud Infrastructure</h3><p>This script runs well on following compute shapes complemented by Oracle Cloud Infrastructure Always Free services.</p><ul><li>VM.Standard.E2.1.Micro (AMD)</li><li>VM.Standard.A1.Flex (ARM) [1OCPU RAM6GB or greater]</li></ul><p>Answer to use iptables.</p><h2 id="issues-prs-welcome" tabindex="-1"><a class="header-anchor" href="#issues-prs-welcome" aria-hidden="true">#</a> Issues &amp; PRs Welcome</h2><p>If it does not work in the above environment, it may be a bug. We would appreciate it if you could report it as an issue, with the specified requirements you entered to the script.</p><p>It is difficult to provide assistance for environments other than the above, but we may be able to solve your problem if you provide us with details of your environment.</p><p>Suggestions for features are also welcome.</p><h1 id="tips" tabindex="-1"><a class="header-anchor" href="#tips" aria-hidden="true">#</a> Tips</h1><p>\u9078\u629E\u80A2\u306E\u9078\u3073\u65B9\u3084\u4ED5\u69D8\u306B\u3064\u3044\u3066\u306A\u3069\u3002</p><h2 id="systemd-or-docker" tabindex="-1"><a class="header-anchor" href="#systemd-or-docker" aria-hidden="true">#</a> Systemd or Docker?</h2><p>v1\u304B\u3089\u3001\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u30E1\u30BD\u30C3\u30C9\u306Bsystemd\u3068Docker\u3068\u3092\u9078\u3079\u308B\u3088\u3046\u306B\u3057\u307E\u3057\u305F\u3002</p><p>Docker\u3068\u8A00\u3063\u3066\u3082\u3001<strong>Misskey\u3060\u3051\u3092Docker\u3067\u5B9F\u884C</strong>\u3057\u3001Redis\u3084Postgres\u306A\u3069\u306F\u30DB\u30B9\u30C8\u3067\u76F4\u63A5\u5B9F\u884C\u3057\u307E\u3059\u3002<br><a href="https://gist.github.com/mamemomonga/5549bb69cad8e5618e5527593d4890e0" target="_blank" rel="noopener noreferrer">docker-compose\u3067\u3059\u3079\u3066\u306E\u6A5F\u80FD\u3092\u52D5\u304B\u3059\u65B9\u6CD5\u306B\u3064\u3044\u3066\u306F\u3001mamemononga\u3055\u3093\u304C\u4F5C\u6210\u3057\u305F\u3053\u3061\u3089\u306E\u8A18\u4E8B\u304C\u304A\u3059\u3059\u3081\u3067\u3059\u3002</a></p><p>Docker Hub\u30A4\u30E1\u30FC\u30B8\u3092\u4F7F\u3046\u8A2D\u5B9A\u3067\u3042\u308C\u3070\u3001Misskey\u306E\u30D3\u30EB\u30C9\u304C\u4E0D\u8981\u306B\u306A\u308B\u305F\u3081\u3001<strong>\u4E00\u756A\u304A\u52E7\u3081\u3067\u3059</strong>\u3002<br> \u305F\u3060\u3057\u3001\u30DE\u30A4\u30B0\u30EC\u30FC\u30B7\u30E7\u30F3\u306F\u5FC5\u8981\u306A\u306E\u3067\u3001\u30A2\u30C3\u30D7\u30C7\u30FC\u30C8\u6642\u306BMisskey\u3092\u4F7F\u3048\u306A\u3044\u6642\u9593\u304C\u30BC\u30ED\u306B\u306A\u308B\u308F\u3051\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002<br> \u307E\u305F\u3001Misskey\u306E\u30D3\u30EB\u30C9\u74B0\u5883\u3092\u6E96\u5099\u3057\u306A\u3044(git pull\u3057\u306A\u3044)\u306E\u3067\u3001\u30D5\u30A9\u30FC\u30AF\u3092\u52D5\u304B\u3057\u305F\u304F\u306A\u3063\u305F\u6642\u306B\u8A2D\u5B9A\u304C\u9762\u5012\u306B\u306A\u308A\u307E\u3059\u3002</p><p>\u30ED\u30FC\u30AB\u30EB\u3067Docker\u3092\u30D3\u30EB\u30C9\u3059\u308B\u65B9\u5F0F\u306F\u3001\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u9762\u3067\u975E\u63A8\u5968\u3067\u3059\u3002</p><p>systemd\u306F\u3001Docker Hub\u306B\u30A4\u30E1\u30FC\u30B8\u3092\u4E0A\u3052\u308B\u307E\u3067\u3082\u306A\u3044\u3082\u306E\u306E\u3001\u30D5\u30A9\u30FC\u30AF\u3092\u4F7F\u3044\u305F\u3044\u5834\u5408\u306B\u304A\u52E7\u3081\u3067\u3059\u3002</p><p>\u304A\u52E7\u3081\u3059\u308B\u9806\u756A\u306F\u6B21\u306E\u901A\u308A\u3067\u3059\u3002</p><ol><li>Docker Hub</li><li>systemd</li><li>Docker\u30D3\u30EB\u30C9</li></ol><h2 id="nginx\u3092\u4F7F\u3046\u304B\u3068\u3099\u3046\u304B" tabindex="-1"><a class="header-anchor" href="#nginx\u3092\u4F7F\u3046\u304B\u3068\u3099\u3046\u304B" aria-hidden="true">#</a> nginx\u3092\u4F7F\u3046\u304B\u3069\u3046\u304B</h2><p>\u30B5\u30FC\u30D0\u30FC1\u53F0\u3067Misskey\u3092\u69CB\u7BC9\u3059\u308B\u5834\u5408\u306F\u3001nginx\u306E\u4F7F\u7528\u3092\u304A\u52E7\u3081\u3057\u307E\u3059\u3002</p><p>\u30ED\u30FC\u30C9\u30D0\u30E9\u30F3\u30B5\u30FC\u3092\u8A2D\u7F6E\u3059\u308B\u5834\u5408\u306B\u306Fnginx\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u305B\u305A\u3001<a href="https://github.com/misskey-dev/misskey/blob/develop/docs/examples/misskey.nginx" target="_blank" rel="noopener noreferrer">Misskey\u306Enginx\u8A2D\u5B9A</a>\u3092\u53C2\u8003\u306B\u30ED\u30FC\u30C9\u30D0\u30E9\u30F3\u30B5\u30FC\u3092\u8A2D\u5B9A\u3059\u308B\u306E\u304C\u3088\u3044\u3068\u601D\u3044\u307E\u3059\u3002</p><h2 id="add-more-swaps" tabindex="-1"><a class="header-anchor" href="#add-more-swaps" aria-hidden="true">#</a> Add more swaps!</h2><p>\u30B9\u30EF\u30C3\u30D7\u3092\u8A2D\u5B9A\u3057\u3066\u3044\u308B\u5834\u5408\u3001\u30E1\u30E2\u30EA\u304C\u5408\u8A08\u30673GB\u4EE5\u4E0A\u3067\u306A\u3051\u308C\u3070\u30B9\u30AF\u30EA\u30D7\u30C8\u304C\u52D5\u4F5C\u3057\u306A\u3044\u3088\u3046\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002</p><h2 id="\u9014\u4E2D\u3066\u3099\u5931\u6557\u3057\u3066\u307E\u305F\u30B9\u30AF\u30EA\u30D5\u309A\u30C8\u3092\u5B9F\u884C\u3059\u308B\u5834\u5408" tabindex="-1"><a class="header-anchor" href="#\u9014\u4E2D\u3066\u3099\u5931\u6557\u3057\u3066\u307E\u305F\u30B9\u30AF\u30EA\u30D5\u309A\u30C8\u3092\u5B9F\u884C\u3059\u308B\u5834\u5408" aria-hidden="true">#</a> \u9014\u4E2D\u3067\u5931\u6557\u3057\u3066\u307E\u305F\u30B9\u30AF\u30EA\u30D7\u30C8\u3092\u5B9F\u884C\u3059\u308B\u5834\u5408</h2><p>\u4E07\u304C\u4E00\u9014\u4E2D\u3067\u5931\u6557\u3057\u3066\u3082\u3046\u4E00\u5EA6\u30B9\u30AF\u30EA\u30D7\u30C8\u3092\u52D5\u4F5C\u3055\u305B\u308B\u5834\u5408\u3001\u6B21\u306E\u3053\u3068\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002</p><ul><li>Redis\u3084Postgres\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u304C\u7D42\u308F\u3063\u3066\u3044\u308B\u5834\u5408\u3001\u300Cinstall locally\u300D\u306FNo\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002<br> host\u30FBport\u8A2D\u5B9A\u306F\u305D\u306E\u307E\u307EEnter\u3092\u62BC\u3057\u307E\u3059\u3002 \u30E6\u30FC\u30B6\u30FC\u540D\u3084\u30D1\u30B9\u30EF\u30FC\u30C9\u306F\u3001\u524D\u56DE\u5B9F\u884C\u3057\u305F\u969B\u306B\u6307\u5B9A\u3057\u305F\u3082\u306E\u3092\u5165\u529B\u3057\u307E\u3059\u3002</li></ul><h2 id="env\u30D5\u30A1\u30A4\u30EB\u306B\u3064\u3044\u3066" tabindex="-1"><a class="header-anchor" href="#env\u30D5\u30A1\u30A4\u30EB\u306B\u3064\u3044\u3066" aria-hidden="true">#</a> .env\u30D5\u30A1\u30A4\u30EB\u306B\u3064\u3044\u3066</h2><p>\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u30B9\u30AF\u30EA\u30D7\u30C8\u306F\u30012\u3064\u306E.env\u30D5\u30A1\u30A4\u30EB\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002<br> \u30A2\u30C3\u30D7\u30C7\u30FC\u30C8\u306E\u969B\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002</p><h3 id="root-misskey-env" tabindex="-1"><a class="header-anchor" href="#root-misskey-env" aria-hidden="true">#</a> /root/.misskey.env</h3><p>misskey\u3092\u5B9F\u884C\u3059\u308B\u30E6\u30FC\u30B6\u30FC\u3092\u899A\u3048\u3066\u304A\u304F\u305F\u3081\u306B\u5FC5\u8981\u3067\u3059\u3002</p><h3 id="home-misskey\u30E6\u30FC\u30B5\u3099\u30FC-misskey-env" tabindex="-1"><a class="header-anchor" href="#home-misskey\u30E6\u30FC\u30B5\u3099\u30FC-misskey-env" aria-hidden="true">#</a> /home/(misskey\u30E6\u30FC\u30B6\u30FC)/.misskey.env</h3><p>systemd\u306E\u5834\u5408\u306B\u751F\u6210\u3055\u308C\u307E\u3059\u3002<br> \u4E3B\u306B\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u3092\u899A\u3048\u3066\u304A\u304F\u306E\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002</p><h3 id="home-misskey\u30E6\u30FC\u30B5\u3099\u30FC-misskey-docker-env" tabindex="-1"><a class="header-anchor" href="#home-misskey\u30E6\u30FC\u30B5\u3099\u30FC-misskey-docker-env" aria-hidden="true">#</a> /home/(misskey\u30E6\u30FC\u30B6\u30FC)/.misskey-docker.env</h3><p>Docker\u306E\u5834\u5408\u306B\u751F\u6210\u3055\u308C\u307E\u3059\u3002<br> \u5B9F\u884C\u3055\u308C\u3066\u3044\u308B\u30B3\u30F3\u30C6\u30CA\u3068\u30A4\u30E1\u30FC\u30B8\u306E\u756A\u53F7\u3092\u4FDD\u5B58\u3057\u3066\u3044\u307E\u3059\u3002<br> \u30B3\u30F3\u30C6\u30CA\u306E\u756A\u53F7\u306F\u30A2\u30C3\u30D7\u30C7\u30FC\u30C8\u306E\u969B\u306B\u66F4\u65B0\u3055\u308C\u307E\u3059\u3002\u53E4\u3044\u30A4\u30E1\u30FC\u30B8\u306F\u524A\u9664\u3055\u308C\u307E\u3059\u3002</p><h2 id="\u81EA\u5206\u3066\u3099\u7BA1\u7406\u3059\u308B" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5206\u3066\u3099\u7BA1\u7406\u3059\u308B" aria-hidden="true">#</a> \u81EA\u5206\u3067\u7BA1\u7406\u3059\u308B</h2><p>\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u5F8C\u3001\u69CB\u6210\u3092\u5909\u66F4\u3059\u308B\u969B\u306B\u5F79\u7ACB\u3064\u304B\u3082\u3057\u308C\u306A\u3044\u30E1\u30E2\u3067\u3059\u3002</p><p>&quot;example.com&quot;\u3092\u81EA\u5206\u306E\u30C9\u30E1\u30A4\u30F3\u306B\u7F6E\u304D\u63DB\u3048\u3066\u8AAD\u3093\u3067\u304F\u3060\u3055\u3044\u3002</p><h3 id="misskey\u30C6\u3099\u30A3\u30EC\u30AF\u30C8\u30EA" tabindex="-1"><a class="header-anchor" href="#misskey\u30C6\u3099\u30A3\u30EC\u30AF\u30C8\u30EA" aria-hidden="true">#</a> Misskey\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA</h3><p>Misskey\u306E\u30BD\u30FC\u30B9\u306F<code>/home/\u30E6\u30FC\u30B6\u30FC/\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA</code>\u3068\u3057\u3066clone\u3055\u308C\u307E\u3059\u3002<br> \uFF08\u30E6\u30FC\u30B6\u30FC\u3001\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306E\u521D\u671F\u5024\u306F\u3068\u3082\u306Bmisskey\u3067\u3059\u3002\uFF09</p><p>Misskey\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u3078\u306F\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u79FB\u52D5\u3059\u308B\u3068\u3088\u3044\u3067\u3057\u3087\u3046\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo -iu \u30E6\u30FC\u30B6\u30FC
cd \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u3082\u3068\u306E\u30E6\u30FC\u30B6\u30FC\u306B\u623B\u308B\u306B\u306Fexit\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>exit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="systemd" tabindex="-1"><a class="header-anchor" href="#systemd" aria-hidden="true">#</a> systemd</h3><p>systemd\u306E\u30D7\u30ED\u30BB\u30B9\u540D\u306Fexample.com\u3067\u3059\u3002<br> \u305F\u3068\u3048\u3070\u518D\u8D77\u52D5\u3059\u308B\u306B\u306F\u6B21\u306E\u3088\u3046\u306B\u3057\u307E\u3059\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo systemctl restart example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>journalctl\u3067\u30ED\u30B0\u3092\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>journalctl -t example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8A2D\u5B9A\u30D5\u30A1\u30A4\u30EB\u306F<code>/etc/systemd/system/example.com.service</code>\u3068\u3057\u3066\u4FDD\u5B58\u3055\u308C\u3066\u3044\u307E\u3059\u3002</p><h3 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h3><p>Docker\u306FMisskey\u30E6\u30FC\u30B6\u30FC\u3067rootless\u5B9F\u884C\u3055\u308C\u3066\u3044\u307E\u3059\u3002</p><p>sudo \u3067Misskey\u30E6\u30FC\u30B6\u30FC\u306B\u5165\u308B\u3068\u304D\u306F\u3001<code>XDG_RUNTIME_DIR</code>\u3068<code>DOCKER_HOST</code>\u3092\u5909\u66F4\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo -iu \u30E6\u30FC\u30B6\u30FC
export XDG_RUNTIME_DIR=/run/user/$UID
export DOCKER_HOST=unix://$XDG_RUNTIME_DIR/docker.sock

# \u30D7\u30ED\u30BB\u30B9\u4E00\u89A7\u3092\u8868\u793A
docker ps

# \u30D3\u30EB\u30C9 (\u30EA\u30DD\u30B8\u30C8\u30EA: local/misskey:latest)
docker build -t local/misskey:latest ./misskey

# docker run
docker run -d -p 3000:3000 --add-host=docker_host:10.0.0.1 -v /home/misskey/misskey/files:/misskey/files -v &quot;/home/misskey/misskey/.config/default.yml&quot;:/misskey/.config/default.yml:ro --restart unless-stopped -t &quot;local/misskey:latest&quot;

# \u30ED\u30B0\u3092\u8868\u793A
docker logs --tail 50 -f \u30B3\u30F3\u30C6\u30CAID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u30EF\u30F3\u30E9\u30A4\u30CA\u30FC\u306A\u3089\u6B21\u306E\u3088\u3046\u306B\u3057\u307E\u3059\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo -u \u30E6\u30FC\u30B6\u30FC XDG_RUNTIME_DIR=/run/user/$(id -u \u30E6\u30FC\u30B6\u30FC) DOCKER_HOST=unix:///run/user/$(id -u \u30E6\u30FC\u30B6\u30FC)/docker.sock docker ps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> nginx</h3><p>nginx\u306E\u8A2D\u5B9A\u306F<code>/etc/nginx/conf.d/example.com.conf</code>\u3068\u3057\u3066\u4FDD\u5B58\u3055\u308C\u3066\u3044\u307E\u3059\u3002</p><h3 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> Redis</h3><p>requirepass\u3068bind\u3092<code>/etc/redis/misskey.conf</code>\u3067\u8A2D\u5B9A\u3057\u3066\u3044\u307E\u3059\u3002</p><h2 id="q-\u30A2\u30C3\u30D5\u309A\u30C6\u3099\u30FC\u30C8\u5F8C\u306B502\u3066\u3099\u30A2\u30AF\u30BB\u30B9\u3066\u3099\u304D\u306A\u3044" tabindex="-1"><a class="header-anchor" href="#q-\u30A2\u30C3\u30D5\u309A\u30C6\u3099\u30FC\u30C8\u5F8C\u306B502\u3066\u3099\u30A2\u30AF\u30BB\u30B9\u3066\u3099\u304D\u306A\u3044" aria-hidden="true">#</a> Q. \u30A2\u30C3\u30D7\u30C7\u30FC\u30C8\u5F8C\u306B502\u3067\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u306A\u3044</h2><p>Docker\u3067\u306F\u3001\u8D77\u52D5\u5F8C\u306B\u30DE\u30A4\u30B0\u30EC\u30FC\u30B7\u30E7\u30F3\u3092\u3059\u308B\u305F\u3081\u3001\u3059\u3050\u306B\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u307E\u305B\u3093\u3002<br> \u30DE\u30A4\u30B0\u30EC\u30FC\u30B7\u30E7\u30F3\u304C\u7D42\u308F\u3063\u3066\u3044\u308B\u304B\u3069\u3046\u304B\u78BA\u8A8D\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002</p><p>systemd\u306E\u5834\u5408\u3067\u306F\u3001pnpm install\u306B\u5931\u6557\u3057\u3066\u3044\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002</p><p>Misskey\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u3067\u6B21\u306E\u5185\u5BB9\u3092\u5B9F\u884C\u3057\u3001\u3082\u3046\u4E00\u5EA6\u30A2\u30C3\u30D7\u30C7\u30FC\u30C8\u3092\u5B9F\u884C\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>pnpm run clean-all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>journalctl\u3067\u30ED\u30B0\u3092\u78BA\u8A8D\u3059\u308B\u3068\u3001\u305F\u3044\u3066\u3044re2\u304C\u4E91\u3005\u3068\u3044\u3046\u8A18\u8FF0\u304C\u898B\u5F53\u305F\u308A\u307E\u3059\u3002</p><h2 id="q-\u540C\u3057\u3099\u30B5\u30FC\u30CF\u3099\u30FC\u306B\u3082\u30461\u3064misskey\u3092\u5EFA\u3066\u305F\u3044" tabindex="-1"><a class="header-anchor" href="#q-\u540C\u3057\u3099\u30B5\u30FC\u30CF\u3099\u30FC\u306B\u3082\u30461\u3064misskey\u3092\u5EFA\u3066\u305F\u3044" aria-hidden="true">#</a> Q. \u540C\u3058\u30B5\u30FC\u30D0\u30FC\u306B\u3082\u30461\u3064Misskey\u3092\u5EFA\u3066\u305F\u3044</h2><p>\u30B9\u30AF\u30EA\u30D7\u30C8\u306F\u540C\u3058\u30B5\u30FC\u30D0\u30FC\u306B\u8FFD\u52A0\u3067Misskey\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B\u3053\u3068\u306F\u60F3\u5B9A\u3057\u3066\u3044\u307E\u305B\u3093\u3002<br> \u5E7E\u3064\u304B\u306E\u8A2D\u5B9A\u304C\u4E0A\u66F8\u304D\u3055\u308C\u308B\u304B\u3001\u9014\u4E2D\u3067\u30A8\u30E9\u30FC\u306B\u306A\u3063\u3066\u3057\u307E\u3046\u3067\u3057\u3087\u3046\u3002</p>`,92);function y(x,f){const a=l("RouterLink");return t(),d("div",null,[h,u,p,m,e("p",null,[i(a,{to:"/ko/docs/install/bash-v165.html"},{default:n(()=>[b]),_:1}),v,i(a,{to:"/ko/docs/install/bash-v140.html"},{default:n(()=>[k]),_:1})]),g])}var w=r(c,[["render",y],["__file","bash.html.vue"]]);export{w as default};
