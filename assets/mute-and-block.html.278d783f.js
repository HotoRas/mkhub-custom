import{_ as e,o as t,c as o,e as i}from"./app.cc7269d1.js";const n={},a=i('<h1 id="muting-and-blocking" tabindex="-1"><a class="header-anchor" href="#muting-and-blocking" aria-hidden="true">#</a> Muting and Blocking</h1><p>If you don&#39;t like a user, you can mute them to make them disappear from your timelines. Alternatively, you can block a user to prevent them from seeing your content or engaging with you in any way. People won&#39;t know that you have muted them, but they will know that you have blocked them. It is up to you to decide which option you prefer.</p><div class="custom-container tip"><i class="fas fa-info"></i><p>Mute and block can be used together.</p></div><div class="custom-container warning"><i class="fas fa-exclamation"></i><p>Please consider reporting any users who violate the Terms of Service to the moderators.</p></div><p>In Misskey Web, you can see the list of users you have muted or blocked by going to Settings &gt; Mute &amp; Block.</p><h2 id="muting" tabindex="-1"><a class="header-anchor" href="#muting" aria-hidden="true">#</a> Muting</h2><p>If you mute a user, the following content about that user will no longer appear in Misskey:</p><ul><li>the user&#39;s posts (and replies and Renotes to those posts) in the timeline and post search results</li><li>notifications from that user</li><li>message history with the user in Misskey chat</li><li>etc.</li><li></li></ul><p>To mute a user in Misskey Web, open the menu on the user&#39;s profile page and press the &quot;Mute&quot; button. To mute an instance, or a list of instances in Misskey Web, open your Settings page, and you should see an &quot;Instance Mutes&quot; section, right above the Mutes and Blocks section. In this page, you can enter a list of instances you want to mute, separated with a new line.</p><div class="custom-container tip"><i class="fas fa-info"></i><p>Users and instances will not be notified that you have muted them, and they will not know that you have muted them.</p></div><div class="custom-container warning"><i class="fas fa-exclamation"></i><p>If you mute an instance, any notes / renotes from the instances on the list will be hidden / muted, including those of users replying to an user of a muted instance.</p></div><h2 id="blocking" tabindex="-1"><a class="header-anchor" href="#blocking" aria-hidden="true">#</a> Blocking</h2><p>If you block a user, they will not be able to see your content and they will not be able to do any the following actions:</p><ul><li>follow you</li><li>add you to a user list</li><li>reply or renote you</li><li>react or vote in one of your polls</li><li>send a message to you</li><li>etc.</li></ul><p>Also,</p><ul><li>if the user is already following you when you block them, they will unfollow you</li><li>if the user has you in their user lists when you block them, you will be removed from those lists</li></ul><p>To block a user on Misskey Web, open the menu on the user&#39;s profile page and press the &quot;Block&quot; button.</p><div class="custom-container warning"><i class="fas fa-exclamation"></i><p>You will not be notified that you have been blocked by someone, but you will know indirectly that you have been blocked because you will not be able to take any of the above actions, such as following someone.</p></div><div class="custom-container warning"><i class="fas fa-exclamation"></i><p>The other person will not be able to see your content, but they will be able to see it if they switch accounts or log out. Blocking is only a simple, but useful feature. You can change your privacy settings in Settings &gt; Privacy to make it more difficult for blocked users to view your content by requiring approval for follow requests and setting your default note visibility to &quot;Followers&quot;.</p></div>',19),s=[a];function l(u,r){return t(),o("div",null,s)}var h=e(n,[["render",l],["__file","mute-and-block.html.vue"]]);export{h as default};
