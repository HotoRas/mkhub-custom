import{_ as a,o as e,c as i,e as n}from"./app.cc7269d1.js";const r={},t=n('<h1 id="referensi-api-plugin" tabindex="-1"><a class="header-anchor" href="#referensi-api-plugin" aria-hidden="true">#</a> Referensi API Plugin</h1><h2 id="mk-dialog-title-text-type" tabindex="-1"><a class="header-anchor" href="#mk-dialog-title-text-type" aria-hidden="true">#</a> Mk:dialog(title text type)</h2><p>Menampilkan dialog. <code>type</code> dapat memiliki nilai berikut.<br> info success warn error question<br> Apabila nilai dihilangkan secara bawaan akan menjadi <code>info</code>.</p><h2 id="mk-confirm-title-text-type" tabindex="-1"><a class="header-anchor" href="#mk-confirm-title-text-type" aria-hidden="true">#</a> Mk:confirm(title text type)</h2><p>Menampilkan dialog konfirmasi. <code>type</code> dapat memiliki nilai berikut.<br> info success warn error question<br> Apabila nilai dihilangkan secara bawaan akan menjadi <code>question</code>.<br> Akan mengeluarkan output <code>true</code> bila pengguna memilih &quot;OK&quot; atau <code>false</code> bila pengguna memilih &quot;Cancel&quot;</p><h2 id="mk-api-endpoint-params" tabindex="-1"><a class="header-anchor" href="#mk-api-endpoint-params" aria-hidden="true">#</a> Mk:api(endpoint params)</h2><p>Permintaan ke Misskey API. Argumen pertama adalah nama endpoint dan argumen kedua adalah parameter objek.</p><h2 id="mk-save-key-value" tabindex="-1"><a class="header-anchor" href="#mk-save-key-value" aria-hidden="true">#</a> Mk:save(key value)</h2><p>Menyimpan nilai arbitrer dengan nama arbitrer. Nilai yang tersimpan tetap ada setelah konteks AiScript diakhiri dan dapat dibaca oleh Mk:load.</p><h2 id="mk-load-key" tabindex="-1"><a class="header-anchor" href="#mk-load-key" aria-hidden="true">#</a> Mk:load(key)</h2><p>Membaca nilai dari nama yang ditentukan tersimpan dibuat oleh Mk:save.</p><h2 id="plugin-register-post-form-action-title-fn" tabindex="-1"><a class="header-anchor" href="#plugin-register-post-form-action-title-fn" aria-hidden="true">#</a> Plugin:register_post_form_action(title fn)</h2><p>Menambahkan aksi ke form postingan. Argumen pertama merupakan nama dari aksi dan argumen kedua merupakan fungsi panggilan balik ketika item dipilih.<br> Fungsi panggilan balik meneruskan objek target pengguna sebagai argumen pertama.</p><h2 id="plugin-register-note-action-title-fn" tabindex="-1"><a class="header-anchor" href="#plugin-register-note-action-title-fn" aria-hidden="true">#</a> Plugin:register_note_action(title fn)</h2><p>Menambahkan item ke menu catatan. Argumen pertama merupakan nama dari item dan argumen kedua merupakan fungsi panggilan balik ketika item dipilih.<br> Fungsi panggilan balik meneruskan objek target catatan sebagai argumen pertama.</p><h2 id="plugin-register-user-action-title-fn" tabindex="-1"><a class="header-anchor" href="#plugin-register-user-action-title-fn" aria-hidden="true">#</a> Plugin:register_user_action(title fn)</h2><p>Menambahkan item ke menu pengguna. Argumen pertama merupakan nama dari item dan argumen kedua merupakan fungsi panggilan balik ketika item dipilih.<br> Fungsi panggilan balik meneruskan objek target pengguna sebagai argumen pertama.</p><h2 id="plugin-register-note-view-interruptor-fn" tabindex="-1"><a class="header-anchor" href="#plugin-register-note-view-interruptor-fn" aria-hidden="true">#</a> Plugin:register_note_view_interruptor(fn)</h2><p>Menulis ulang informasi catatan yang ditampilkan di antarmuka.<br> Fungsi panggilan balik meneruskan objek target catatan sebagai argumen pertama.<br> Catatan ditulis ulang pada nilai keluaran dari fungsi panggilan balik.</p><h2 id="plugin-register-note-post-interruptor-fn" tabindex="-1"><a class="header-anchor" href="#plugin-register-note-post-interruptor-fn" aria-hidden="true">#</a> Plugin:register_note_post_interruptor(fn)</h2><p>Menulis ulang informasi catatan ketika catatan telah dipost.<br> Fungsi panggilan balik meneruskan objek target catatan sebagai argumen pertama.<br> Catatan ditulis ulang pada nilai keluaran dari fungsi panggilan balik.</p><h2 id="plugin-open-url-url" tabindex="-1"><a class="header-anchor" href="#plugin-open-url-url" aria-hidden="true">#</a> Plugin:open_url(url)</h2><p>Membuka URL yang diteruskan sebagai argumen pertama ke dalam tab baru peramban.</p><h2 id="plugin-config" tabindex="-1"><a class="header-anchor" href="#plugin-config" aria-hidden="true">#</a> Plugin:config</h2><p>Objek dimana konfigurasi plugin disimpan. Nilai dimasukkan dengan aturan key dalam config pada definisi plugin.</p>',25),l=[t];function d(u,p){return e(),i("div",null,l)}var s=a(r,[["render",d],["__file","plugin-api-reference.html.vue"]]);export{s as default};
