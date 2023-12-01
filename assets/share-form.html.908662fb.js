import{_ as n,o as i,c as r,a,b as o,w as s,e as t,d as e,r as l}from"./app.7ff36338.js";const u={},c=t('<h1 id="form-berbagi" tabindex="-1"><a class="header-anchor" href="#form-berbagi" aria-hidden="true">#</a> Form Berbagi</h1><p>Ketika kamu membuka <code>/share</code> di Misskey Web, kamu membuka form submisi berbagi. Form berbagi ini berguna jika kamu ingin pengguna membagikan konten dari halamanmu dengan Misskey dari halaman web eksternal.</p><p>Kamu dapat menentukan berbagai opsi di dalam URl, termasuk konten yang dibagikan sebagai parameter kueri.</p><h2 id="parameter-kueri" tabindex="-1"><a class="header-anchor" href="#parameter-kueri" aria-hidden="true">#</a> Parameter Kueri</h2><div class="custom-container tip"><i class="fas fa-info"></i><p>Semua parameter merupakan <strong>opsional</strong>.</p></div><table><thead><tr><th>nama</th><th>deskripsi</th></tr></thead><tbody><tr><td><code>title</code></td><td>Judul, akan dimasukkan sebelum bodi utama dalam tanda kurung</td></tr><tr><td><code>text</code></td><td>bodi utama</td></tr><tr><td><code>url</code></td><td>URL, dimasukkan setelah bodi utama</td></tr></tbody></table><h3 id="informasi-balasan" tabindex="-1"><a class="header-anchor" href="#informasi-balasan" aria-hidden="true">#</a> Informasi Balasan</h3><p>Kamu dapat membuat catatan menjadi balasan ke catatan yang diberikan dengan menentukan salah satu dari berikut.</p><table><thead><tr><th>nama</th><th>deskripsi</th></tr></thead><tbody><tr><td><code>replyId</code></td><td>ID dari catatan yang kamu balas</td></tr><tr><td><code>replyUri</code></td><td>URL untuk membalas ke (tentukan objek catatan remote)</td></tr></tbody></table><h3 id="informasi-renote" tabindex="-1"><a class="header-anchor" href="#informasi-renote" aria-hidden="true">#</a> Informasi Renote</h3><p>Kamu dapat membuat catatan menjadi renote ke catatan yang diberikan dengan menentukan salah satu dari berikut.</p><table><thead><tr><th>nama</th><th>deskripsi</th></tr></thead><tbody><tr><td><code>renoteId</code></td><td>ID dari catatan yang ingin direnote</td></tr><tr><td><code>renoteUri</code></td><td>URL dari catatan yang ingin direnote (tentukan objek catatan remote)</td></tr></tbody></table><h3 id="lingkup-publikasi" tabindex="-1"><a class="header-anchor" href="#lingkup-publikasi" aria-hidden="true">#</a> Lingkup Publikasi</h3><p>Opsi berikut memungkinkan kamu untuk memilih lingkup publikasi.</p>',14),h=a("thead",null,[a("tr",null,[a("th",null,"nama"),a("th",null,"deskripsi")])],-1),m=a("tr",null,[a("td",null,[a("code",null,"visibility")]),a("td",null,[e("salah satu dari "),a("code",null,"public"),e(", "),a("code",null,"home"),e(", "),a("code",null,"followers"),e(", "),a("code",null,"specified")])],-1),b=a("tr",null,[a("td",null,[a("code",null,"localOnly")]),a("td",null,"0(false) atau 1(true)")],-1),k=a("tr",null,[a("td",null,[a("code",null,"visibleUserIds")]),a("td",null,"ID pengguna target")],-1),p=a("td",null,[a("code",null,"visibleAccts")],-1),g=e("acct"),f=e(" pengguna target (dipisah koma)"),_=t('<div class="custom-container warning"><i class="fas fa-exclamation"></i><p>Jika <code>visibility</code> diatur ke <code>specified</code>, sebaiknya <code>visibleUserIds</code> atau <code>visibleAccts</code> harus diatur juga.</p></div><h3 id="lampiran" tabindex="-1"><a class="header-anchor" href="#lampiran" aria-hidden="true">#</a> Lampiran</h3><p>Kamu dapat menentukan lampiran dengan opsi berikut.</p><table><thead><tr><th>nama</th><th>deskripsi</th></tr></thead><tbody><tr><td><code>fileIds</code></td><td>ID dari berkas yang ingin dilampirkan (dipisah koma)</td></tr></tbody></table>',4);function y(v,x){const d=l("RouterLink");return i(),r("div",null,[c,a("table",null,[h,a("tbody",null,[m,b,k,a("tr",null,[p,a("td",null,[o(d,{to:"/id/docs/glossary.html#acct"},{default:s(()=>[g]),_:1}),f])])])]),_])}var U=n(u,[["render",y],["__file","share-form.html.vue"]]);export{U as default};