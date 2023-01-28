import{_ as t,o as l,c as o,a as s,b as a,d as n,e as i,r as c}from"./app.f72270cc.js";const r={},d=s("h1",{id:"guida-alla-costruzione-di-misskey",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#guida-alla-costruzione-di-misskey","aria-hidden":"true"},"#"),n(" Guida alla costruzione di Misskey")],-1),p=s("p",null,"Questa guida spiega come installare e configurare Misskey",-1),u=s("div",{class:"custom-container danger"},[s("i",{class:"fas fa-times"}),s("p",null,"Never change the domain name (hostname) of an instance once you start using it!")],-1),m={class:"custom-container tip"},v=s("i",{class:"fas fa-info"},null,-1),k=s("p",null,"Occorre installare il seguente software",-1),b={href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"},h=n("Node.js"),g=n(" (16.x o successivo)"),f={href:"https://www.postgresql.org/",target:"_blank",rel:"noopener noreferrer"},_=n("PostgreSQL"),y=n(" (10 o successivo)"),z={href:"https://redis.io/",target:"_blank",rel:"noopener noreferrer"},x=n("Redis"),E={href:"https://www.ffmpeg.org/",target:"_blank",rel:"noopener noreferrer"},N=n("FFmpeg"),D=i(`<p>Debian/Ubuntu\u3092\u304A\u4F7F\u3044\u3067\u3042\u308C\u3070\u3001<code>build-essential</code>\u30D1\u30C3\u30B1\u30FC\u30B8\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u3066\u304A\u304F\u3068\u826F\u3044\u3067\u3059\u3002</p><p>corepack\u304C\u6709\u52B9\u5316\u3055\u308C\u3066\u3044\u308B\u3053\u3068</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> corepack <span class="token builtin class-name">enable</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),O=i(`<h2 id="creazione-utente" tabindex="-1"><a class="header-anchor" href="#creazione-utente" aria-hidden="true">#</a> Creazione utente</h2><p>Misskey non va eseguito tramite l&#39;utente amministratore <em>root</em>. Occorre creare un utente ad-hoc, esempio per Debian/Ubuntu:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>adduser --disabled-password --disabled-login misskey
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="installazione-misskey" tabindex="-1"><a class="header-anchor" href="#installazione-misskey" aria-hidden="true">#</a> Installazione Misskey</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> -iu misskey
<span class="token function">git</span> clone --recursive https://github.com/misskey-dev/misskey.git
<span class="token builtin class-name">cd</span> misskey
<span class="token function">git</span> checkout master
<span class="token function">git</span> submodule update --init
<span class="token assign-left variable">NODE_ENV</span><span class="token operator">=</span>production <span class="token function">pnpm</span> <span class="token function">install</span> --frozen-lockfile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="variabili-d-ambiente" tabindex="-1"><a class="header-anchor" href="#variabili-d-ambiente" aria-hidden="true">#</a> Variabili d&#39;ambiente</h2><p>Copia il file <code>.config/example.yml</code> in un file chiamato <code>default.yml</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cp</span> .config/example.yml .config/default.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Modifica <code>default.yml</code> seguendo le indicazioni nel file.</p><h2 id="costruzione-e-inizializzazione" tabindex="-1"><a class="header-anchor" href="#costruzione-e-inizializzazione" aria-hidden="true">#</a> Costruzione e inizializzazione</h2><p>Avvia la build e inizializza il DB, potrebbe richiedere un po&#39; di tempo.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">NODE_ENV</span><span class="token operator">=</span>production <span class="token function">pnpm</span> run build
<span class="token function">pnpm</span> run init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><i class="fas fa-info"></i><p>Chi usa Debian/Ubuntu ha bisogno del pacchetto <code>build-essential</code></p></div><h2 id="avviamento" tabindex="-1"><a class="header-anchor" href="#avviamento" aria-hidden="true">#</a> Avviamento</h2><p>Al termine avvia Misskey usando:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">NODE_ENV</span><span class="token operator">=</span>production <span class="token function">pnpm</span> run start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>:::: Configurazione di systemd</p><p>Crea il file <code>/etc/systemd/system/misskey.service</code></p><p>Incollaci questa configurazione:</p><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">Unit</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">Description</span><span class="token punctuation">=</span><span class="token value attr-value">Misskey daemon</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">Service</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">Type</span><span class="token punctuation">=</span><span class="token value attr-value">simple</span>
<span class="token key attr-name">User</span><span class="token punctuation">=</span><span class="token value attr-value">misskey</span>
<span class="token key attr-name">ExecStart</span><span class="token punctuation">=</span><span class="token value attr-value">/usr/bin/npm start</span>
<span class="token key attr-name">WorkingDirectory</span><span class="token punctuation">=</span><span class="token value attr-value">/home/misskey/misskey</span>
<span class="token key attr-name">Environment</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;<span class="token inner-value">NODE_ENV=production</span>&quot;</span>
<span class="token key attr-name">TimeoutSec</span><span class="token punctuation">=</span><span class="token value attr-value">60</span>
<span class="token key attr-name">StandardOutput</span><span class="token punctuation">=</span><span class="token value attr-value">journal</span>
<span class="token key attr-name">StandardError</span><span class="token punctuation">=</span><span class="token value attr-value">journal</span>
<span class="token key attr-name">SyslogIdentifier</span><span class="token punctuation">=</span><span class="token value attr-value">misskey</span>
<span class="token key attr-name">Restart</span><span class="token punctuation">=</span><span class="token value attr-value">always</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">Install</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">WantedBy</span><span class="token punctuation">=</span><span class="token value attr-value">multi-user.target</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><i class="fas fa-exclamation"></i><p>Se usi Misskey su CentOS e una porta inferiore a 1024, Devi configurare <code>ExecStart=/usr/bin/sudo /usr/bin/npm start</code></p></div><p>Ricarica systemd, abilita e avvia il servizio</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl daemon-reload
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> misskey
<span class="token function">sudo</span> systemctl start misskey
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><i class="fas fa-info"></i><p>Per controllare lo stato del servizio: <code>systemctl status misskey</code></p></div><p>::::</p><h2 id="aggiornamento-di-misskey" tabindex="-1"><a class="header-anchor" href="#aggiornamento-di-misskey" aria-hidden="true">#</a> Aggiornamento di Misskey</h2>`,26),S={class:"custom-container warning"},w=s("i",{class:"fas fa-exclamation"},null,-1),V=n("Leggi sempre le "),M={href:"https://github.com/misskey-dev/misskey/blob/master/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"},C=n("Note di rilascio"),A=n(" per sapere se ci siano attivit\xE0 aggiuntive da svolgere."),I=i(`<p>Ottieni il codice sorgente dal branch <code>master</code> e le migrazioni del database:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout master
<span class="token function">git</span> pull
<span class="token function">git</span> submodule update --init
<span class="token assign-left variable">NODE_ENV</span><span class="token operator">=</span>production <span class="token function">pnpm</span> <span class="token function">install</span> --frozen-lockfile
<span class="token assign-left variable">NODE_ENV</span><span class="token operator">=</span>production <span class="token function">pnpm</span> run build
<span class="token function">pnpm</span> run migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A seconda della grandezza del database e dal contenuto degli aggiornamenti, potrebbe impiegarci pi\xF9 o meno tempo.</p><p>Riavvia il servizio Misskey al termine dell&#39;aggiornamento.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl restart misskey
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><i class="fas fa-info"></i><p>Se ricevi errori in fase di compilazione, prova i seguenti comandi:</p><ul><li><code>pnpm run clean</code>\u307E\u305F\u306F<code>pnpm run clean-all</code></li><li><code>pnpm rebuild</code></li></ul></div>`,6);function B(L,U){const e=c("ExternalLinkIcon");return l(),o("div",null,[d,p,u,s("div",m,[v,k,s("ul",null,[s("li",null,[s("strong",null,[s("a",b,[h,a(e)])]),g]),s("li",null,[s("strong",null,[s("a",f,[_,a(e)])]),y]),s("li",null,[s("strong",null,[s("a",z,[x,a(e)])])]),s("li",null,[s("strong",null,[s("a",E,[N,a(e)])])])]),D]),O,s("div",S,[w,s("p",null,[V,s("a",M,[C,a(e)]),A])]),I])}var q=t(r,[["render",B],["__file","manual.html.vue"]]);export{q as default};
