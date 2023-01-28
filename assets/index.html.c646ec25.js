import{_ as a,o,c as i,a as e,b as n,w as r,e as c,d as t,r as d}from"./app.f72270cc.js";const h={},l=c(`<h1 id="misskey-api" tabindex="-1"><a class="header-anchor" href="#misskey-api" aria-hidden="true">#</a> Misskey API</h1><p>Misskey exposes an API that you can use to develop Misskey clients, Misskey-connected web services, bots, etc. (&quot;Applications&quot;). We also have a streaming API, so you can create applications with real-time capabilities.</p><div class="custom-container tip"><i class="fas fa-info"></i><p>By using the official Misskey SDK or third party libraries, you can use the API more conveniently, for example by simplifying some of the steps described in this document. See <a href="TODO">here</a> for more information about libraries.</p></div><p>To start using the API, you will need to obtain an <strong>access token</strong> associated with the account you wish to use the API with. This document will walk you through the process of obtaining an access token and then show you how to use the API in a basic way.</p><h2 id="getting-an-access-token" tabindex="-1"><a class="header-anchor" href="#getting-an-access-token" aria-hidden="true">#</a> Getting an access token</h2><p>The API generally requires an access token to make a request. An access token is a set of credentials associated with a user, which identifies the user using the API and controls what operations each access token is authorised to perform.</p><div class="custom-container tip"><i class="fas fa-info"></i><p>There is a one-to-many relationship between a user and the access token associated with that user, and multiple access tokens can be issued for a given user.</p></div><p>You can easily <a href="#Manually-issue-an-access-token">obtain an access token for yourself</a>, or you can <a href="#Request-an-access-token-to-be-issued">obtain an access token for an user who will be using your application</a>.</p><h3 id="manually-issue-an-access-token" tabindex="-1"><a class="header-anchor" href="#manually-issue-an-access-token" aria-hidden="true">#</a> Manually issue an access token</h3><p>You can issue your own access token in Misskey Web under &#39;Settings &gt; API&#39;.</p><div class="custom-container danger"><i class="fas fa-times"></i><p>Please do not share your access token with anyone.</p></div><h3 id="request-an-access-token-to-be-issued" tabindex="-1"><a class="header-anchor" href="#request-an-access-token-to-be-issued" aria-hidden="true">#</a> Request an access token to be issued</h3><p>To obtain an access token for a user of the application ( simply &quot;the user&quot;), you can request it to be issued in the following way.</p><h4 id="step-1" tabindex="-1"><a class="header-anchor" href="#step-1" aria-hidden="true">#</a> Step 1</h4><p>Generate a UUID. This will be referred to as the <strong>session ID</strong> from now on.</p><div class="custom-container danger"><i class="fas fa-times"></i><p>This session ID should be generated each time and should not be reused.</p></div><h4 id="step-2" tabindex="-1"><a class="header-anchor" href="#step-2" aria-hidden="true">#</a> Step 2</h4><p>The application authentication form should be displayed in the user&#39;s browser. The authentication form can be opened with a URL similar to this:</p><div class="language-text ext-text"><pre class="language-text"><code>https://{host}/miauth/{session}
</code></pre></div><p>where</p><ul><li><code>{host}</code> is the host of the user&#39;s instance (usually this is entered by the user) and</li><li><code>{session}</code> is the session ID.</li></ul><p>You can also set a few options as query parameters to the URL:</p><table><thead><tr><th>name</th><th>description</th></tr></thead><tbody><tr><td><code>name</code></td><td>application name</td></tr><tr><td><code>icon</code></td><td>application icon image URL\u3002</td></tr><tr><td><code>callback</code></td><td>The URL to which the user will be redirected after authentication, with the session ID added to the redirect with the query parameter <code>session</code>.</td></tr><tr><td><code>permission</code></td><td>The permissions that the application requires. <br>List the permissions to be requested, separated by <code>,</code>. The list of permissions can be found <a href="TODO">here</a>.</td></tr></tbody></table><div class="custom-container tip"><i class="fas fa-info"></i><p class="custom-container-title">Example</p><div class="language-text ext-text"><pre class="language-text"><code>https://misskey.io/miauth/c1f6d42b-468b-4fd2-8274-e58abdedef6f?name=MyApp&amp;callback=https%3A%2F%2Fmyapp.example.com%2Fcallback&amp;permisson=write:notes,write:following,read:drive
</code></pre></div></div><h4 id="step-3" tabindex="-1"><a class="header-anchor" href="#step-3" aria-hidden="true">#</a> Step 3</h4><p>After the user has been granted application access, a POST request to a URL of the following form will return JSON containing the access token as a response.</p><div class="language-text ext-text"><pre class="language-text"><code>https://{host}/api/miauth/{session}/check
</code></pre></div><p>where</p><ul><li><code>{host}</code> is the host of the user&#39;s instance and</li><li><code>{session}</code> is the session ID.</li></ul><p>The properties included in the response are as follows:</p><table><thead><tr><th>name</th><th>description</th></tr></thead><tbody><tr><td><code>token</code></td><td>access token for the user</td></tr><tr><td><code>user</code></td><td>information about the user</td></tr></tbody></table><h2 id="using-the-api" tabindex="-1"><a class="header-anchor" href="#using-the-api" aria-hidden="true">#</a> Using the API</h2><p>Once you have your API access token, you can use the API by making requests to the various endpoints. <strong>All HTTP APIs are POST and both request/response are in JSON format.</strong></p><div class="custom-container warning"><i class="fas fa-exclamation"></i><p>Misskey does not use REST.</p></div><p>The access token is included in the request body JSON at the parameter <code>i</code>.</p><p>For more information on the API, see the <a href="TODO">API Reference</a>.</p>`,36),u=t("In addition to the HTTP API, Misskey also provides a streaming API. More information about the streaming API can be found "),p=t("here"),f=t("."),m=e("div",{class:"custom-container tip"},[e("i",{class:"fas fa-info"}),e("p",null,[t("Your Misskey instance also provides API documentation at "),e("code",null,"/api-doc"),t(".")])],-1);function b(y,g){const s=d("RouterLink");return o(),i("div",null,[l,e("p",null,[u,n(s,{to:"/en/docs/api/streaming/"},{default:r(()=>[p]),_:1}),f]),m])}var w=a(h,[["render",b],["__file","index.html.vue"]]);export{w as default};
