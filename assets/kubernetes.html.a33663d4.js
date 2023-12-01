import{_ as e,o as a,c as r,e as s}from"./app.7ff36338.js";const i={},n=s(`<h1 id="stworz-instancje-misskey-przy-uzyciu-kubernetesa-truenas-scale" tabindex="-1"><a class="header-anchor" href="#stworz-instancje-misskey-przy-uzyciu-kubernetesa-truenas-scale" aria-hidden="true">#</a> Stw\xF3rz instancje Misskey przy u\u017Cyciu Kubernetesa/TrueNAS Scale</h1><p>Ten poradnik opisze instalacj\u0119 i konfiguracj\u0119 Misskey przy u\u017Cyciu Kubernetesa i Helm charts.</p><div class="custom-container danger"><i class="fas fa-times"></i><p>Nigdy nie zmieniaj nazwy domeny(hostname) instancji kiedy zaczniesz z niej korzysta\u0107!!</p></div><h2 id="truecharts-i-truenas-scale" tabindex="-1"><a class="header-anchor" href="#truecharts-i-truenas-scale" aria-hidden="true">#</a> TrueCharts i TrueNAS Scale</h2><p>Helmy dla Misskey s\u0105 hostowane na TrueCharts kt\xF3re jest repozytorium zaprojektowanym z my\u015Bl\u0105 o TrueNAS Scale ale mog\u0105 one te\u017C by\u0107 zainstalowane jako normalne Helmy. <a href="https://truecharts.org/charts/incubator/misskey/" target="_blank" rel="noopener noreferrer">TrueCharts</a> ma list\u0119 wszystkich dost\u0119pnych Helm\xF3w oraz dokumentacj\u0119 na temat instalacji. <a href="https://discord.gg/Ax9ZgzKx9t" target="_blank" rel="noopener noreferrer">TrueCharts Discord</a> jest r\xF3wnie\u017C \u017Ar\xF3d\u0142em na kt\xF3rym mo\u017Cesz uzyska\u0107 pomoc. Misskey jest obecnie na <em>incubator</em>.</p><div class="custom-container tip"><i class="fas fa-info"></i><p class="custom-container-title">Wymagania</p><ul><li>TrueNAS Scale lub</li><li>Klaster Kubernetes i Helm</li></ul></div><h2 id="truenas-scale" tabindex="-1"><a class="header-anchor" href="#truenas-scale" aria-hidden="true">#</a> TrueNAS Scale</h2><p>Pod\u0105\u017Caj za instrukcjami na <a href="https://truecharts.org/manual/guides/Adding-TrueCharts/" target="_blank" rel="noopener noreferrer">TrueCharts Guide</a>. Dodaj <em>incubator</em> train i zainstaluj aplikacj\u0119 Misskey. Jedyna konfiguracja Misskey kt\xF3ra jest wymagana to URL instancji. Aplikacja r\xF3wnie\u017C u\u017Cywa reverse proxy Traefik aby udost\u0119pni\u0107 us\u0142ug\u0119 na zewn\u0105trz \u015Bwiata przez HTTPS. TrueCharts integruje si\u0119 z Traefikiem domy\u015Blnie, ale inne opcje mog\u0105 by\u0107 u\u017Cywane z r\u0119czn\u0105 konfiguracj\u0105.</p><h2 id="manualny-helm" tabindex="-1"><a class="header-anchor" href="#manualny-helm" aria-hidden="true">#</a> Manualny Helm</h2><p>Je\u017Celi nie u\u017Cywasz TrueNAS Scale to mo\u017Cesz zainstalowa\u0107 Misskey u\u017Cywaj\u0105c Helm bezpo\u015Brednio. Obiekt <code>misskey</code> w pliku values.yaml ma opcje kt\xF3re chcesz nadpisa\u0107. W\u0142a\u015Bciwo\u015B\u0107 <code>misskey.url</code> jest jedyn\u0105 wymagan\u0105 zmian\u0105. Zalecane jest u\u017Cycie reverse proxy aby zabezpieczy\u0107 dost\u0119p do serwera poniewa\u017C chart nie obs\u0142uguje w\u0142\u0105czania TLS wewn\u0105trz kontenera Misskey.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>helm repo add TrueCharts https://charts.truecharts.org
helm repo update
helm install misskey TrueCharts/misskey
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="aktualizuj-misskey" tabindex="-1"><a class="header-anchor" href="#aktualizuj-misskey" aria-hidden="true">#</a> Aktualizuj Misskey</h2><p>Aby zaktualizowa\u0107 Misskey, u\u017Cyj funkcji wbudowanej do TrueNAS Scale albo je\u017Celi u\u017Cywasz kubernetesa to manualnie u\u017Cyj <a href="https://helm.sh/docs/helm/helm_repo_update/" target="_blank" rel="noopener noreferrer">helm repo update</a> i <a href="https://helm.sh/docs/helm/helm_upgrade/" target="_blank" rel="noopener noreferrer">helm upgrade</a>. Zalecane jest utworzenie kopii danych przed aktualizacj\u0105 na wypadek gdyby co\u015B posz\u0142o nie tak i trzeba by\u0142ob by powr\xF3ci\u0107 do dzia\u0142aj\u0105cej wersji.</p>`,13),t=[n];function o(c,l){return a(),r("div",null,t)}var d=e(i,[["render",o],["__file","kubernetes.html.vue"]]);export{d as default};