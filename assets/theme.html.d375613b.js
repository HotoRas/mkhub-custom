import{_ as a,o as n,c as e,e as s}from"./app.cc7269d1.js";const i={},t=s(`<h1 id="tema" tabindex="-1"><a class="header-anchor" href="#tema" aria-hidden="true">#</a> Tema</h1><p>Kamu dapat mengubah tampilan dan nuansa dari klien Misskey dengan menerapkan tema.</p><h2 id="pengaturan-tema" tabindex="-1"><a class="header-anchor" href="#pengaturan-tema" aria-hidden="true">#</a> Pengaturan Tema</h2><p>Pengaturan &gt; Tema</p><h2 id="membuat-tema" tabindex="-1"><a class="header-anchor" href="#membuat-tema" aria-hidden="true">#</a> Membuat Tema</h2><p>Kode objek tema ditulis menggunakan JSON5. Tema memiliki tibe objek seperti yang ditunjukkan di bawah.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;17587283-dd92-4a2c-a22c-be0637c9e22a&#39;</span><span class="token punctuation">,</span>

	<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Danboard&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">author</span><span class="token operator">:</span> <span class="token string">&#39;syuilo&#39;</span><span class="token punctuation">,</span>

	<span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;light&#39;</span><span class="token punctuation">,</span>

	<span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">accent</span><span class="token operator">:</span> <span class="token string">&#39;rgb(218, 141, 49)&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">bg</span><span class="token operator">:</span> <span class="token string">&#39;rgb(218, 212, 190)&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">fg</span><span class="token operator">:</span> <span class="token string">&#39;rgb(115, 108, 92)&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">panel</span><span class="token operator">:</span> <span class="token string">&#39;rgb(236, 232, 220)&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">renote</span><span class="token operator">:</span> <span class="token string">&#39;rgb(100, 152, 106)&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;rgb(100, 152, 106)&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">mention</span><span class="token operator">:</span> <span class="token string">&#39;@accent&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">hashtag</span><span class="token operator">:</span> <span class="token string">&#39;rgb(100, 152, 106)&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">header</span><span class="token operator">:</span> <span class="token string">&#39;rgba(239, 227, 213, 0.75)&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">navBg</span><span class="token operator">:</span> <span class="token string">&#39;rgb(216, 206, 182)&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">inputBorder</span><span class="token operator">:</span> <span class="token string">&#39;rgba(0, 0, 0, 0.1)&#39;</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>id</code> ... ID unik tema. UUID lebih direkomendasikan.</li><li><code>name</code> ... Nama tema</li><li><code>author</code> ... Pembuat tema</li><li><code>desc</code> ... Deskripsi tema (Objek)</li><li><code>base</code> ... tema gelap atau terang <ul><li>Gunakan <code>light</code> untuk tema terang dan <code>dark</code> untuk tema gelap.</li><li>Tema mewarisi tema dasar yang diatur di sini.</li></ul></li><li><code>props</code> ... Definisi gaya tema. Dijelaskan dalam seksi berikut.</li></ul><h3 id="definisi-gaya-tema" tabindex="-1"><a class="header-anchor" href="#definisi-gaya-tema" aria-hidden="true">#</a> Definisi Gaya Tema</h3><p>Definisikan gaya tema di dalam <code>props</code>. Kunci merupakan nama dari variabel, dan nilai menentukan konten. Selanjutnya, objek <code>props</code> ini mewariskan dari tema dasar. Tema dasarnya adalah <a href="https://github.com/misskey-dev/misskey/blob/develop/packages/frontend/src/themes/_light.json5" target="_blank" rel="noopener noreferrer">_light.json5</a> jika <code>base</code> dari tema ini adalah <code>light</code> dan <a href="https://github.com/misskey-dev/misskey/blob/develop/packages/frontend/src/themes/_dark.json5" target="_blank" rel="noopener noreferrer">_dark.json5</a> jika <code>dark</code>. Artinya, jika tidak ada kunci <code>props</code> yang bernama <code>panel</code> dalam tema ini, maka nilai <code>panel</code> akan diatur menggunakan nilai dari tema dasar.</p><h4 id="sintaks-nilai" tabindex="-1"><a class="header-anchor" href="#sintaks-nilai" aria-hidden="true">#</a> Sintaks Nilai</h4><ul><li>Warna diekspresikan dengan heksadesimal <ul><li>contoh: <code>#00ff00</code></li></ul></li><li>Warna diekspresikan dengan format <code>rgb(r, g, b)</code><ul><li>contoh: <code>rgb(0, 255, 0)</code></li></ul></li><li>Warna yang memiliki nilai alfa/transparansi diekspresikan dengan format <code>rgb(r, g, b, a)</code><ul><li>contoh: <code>rgba(0, 255, 0, 0.5)</code></li></ul></li><li>Referensi nilai kunci lain <ul><li><code>@{key name}</code> merupakan referensi ke nilai dari kuncil lain. Ganti <code>{key name}</code> dengan nama dari kunci yang ingin kamu referensikan.</li><li>contoh: <code>@panel</code></li></ul></li><li>Referensi konstan (didiskusikan di bawah) <ul><li><code>\${constant name}</code> merupakan referensi ke konstan.is a reference to a constant. Ganti <code>{constant name}</code> dengan nama dari konstan yang ingin kamu referensikan.</li><li>contoh: <code>$main</code></li></ul></li><li>Fungso (didiskusikan di bawah) <ul><li><code>:{\u95A2\u6570\u540D}&lt;{\u5F15\u6570}&lt;{\u8272}</code></li></ul></li></ul><h4 id="konstan" tabindex="-1"><a class="header-anchor" href="#konstan" aria-hidden="true">#</a> Konstan</h4><p>Konstan berguna ketika kamu memiliki nilai yang tidak ingin kamu keluarkan sebagai variabel CSS namun ingin kamu gunakan sebagai nilai untuk variabel CSS yang lain. &quot;Aku tidak ingin mengeluarkannya sebagai variabel CSS, tapi aku ingin menggunakannya sebagai nilai untuk variabel CSS&quot;.</p><h4 id="fungsi" tabindex="-1"><a class="header-anchor" href="#fungsi" aria-hidden="true">#</a> Fungsi</h4><p>WIP</p>`,16),r=[t];function o(p,l){return n(),e("div",null,r)}var d=a(i,[["render",o],["__file","theme.html.vue"]]);export{d as default};
