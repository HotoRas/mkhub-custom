import{_ as c,o as y,c as f,b as e,w as o,a as l,d as n,r as t}from"./app.f72270cc.js";const g={},d=l("h1",{id:"admin-meta",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#admin-meta","aria-hidden":"true"},"#"),n(),l("code",null,"admin/meta")],-1),m=l("h2",{id:"\u30CF\u309A\u30E9\u30E1\u30FC\u30BF",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#\u30CF\u309A\u30E9\u30E1\u30FC\u30BF","aria-hidden":"true"},"#"),n(" \u30D1\u30E9\u30E1\u30FC\u30BF")],-1),h=l("h2",{id:"\u30EC\u30B9\u30DB\u309A\u30F3\u30B9",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#\u30EC\u30B9\u30DB\u309A\u30F3\u30B9","aria-hidden":"true"},"#"),n(" \u30EC\u30B9\u30DD\u30F3\u30B9")],-1),S=l("h2",{id:"\u30A8\u30E9\u30FC",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#\u30A8\u30E9\u30FC","aria-hidden":"true"},"#"),n(" \u30A8\u30E9\u30FC")],-1),U=l("h2",{id:"\u30EA\u30BD\u30FC\u30B9",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#\u30EA\u30BD\u30FC\u30B9","aria-hidden":"true"},"#"),n(" \u30EA\u30BD\u30FC\u30B9")],-1);function j(I,_){const r=t("el-alert"),i=t("MkApiConsole"),a=t("ClientOnly"),s=t("MkSchemaViewerItemObject"),p=t("MkSchemaViewer"),u=t("MkApiErrors"),b=t("MkApiResources");return y(),f("div",null,[d,e(r,{title:"\u30AF\u30EC\u30C7\u30F3\u30B7\u30E3\u30EB\u5FC5\u9808",type:"success",closable:!1}),e(a,null,{default:o(()=>[e(i,{name:"admin/meta",def:{summary:"",description:"",tags:["meta"],requireCredential:!0,req:{type:"object",properties:{},required:[]},res:{type:"object",optional:!1,nullable:!1,properties:{driveCapacityPerLocalUserMb:{type:"number",optional:!1,nullable:!1},driveCapacityPerRemoteUserMb:{type:"number",optional:!1,nullable:!1},cacheRemoteFiles:{type:"boolean",optional:!1,nullable:!1},emailRequiredForSignup:{type:"boolean",optional:!1,nullable:!1},enableHcaptcha:{type:"boolean",optional:!1,nullable:!1},hcaptchaSiteKey:{type:"string",optional:!1,nullable:!0},enableRecaptcha:{type:"boolean",optional:!1,nullable:!1},recaptchaSiteKey:{type:"string",optional:!1,nullable:!0},swPublickey:{type:"string",optional:!1,nullable:!0},mascotImageUrl:{type:"string",optional:!1,nullable:!1,default:"/assets/ai.png"},bannerUrl:{type:"string",optional:!1,nullable:!1},errorImageUrl:{type:"string",optional:!1,nullable:!1,default:"https://xn--931a.moe/aiart/yubitun.png"},iconUrl:{type:"string",optional:!1,nullable:!0},maxNoteTextLength:{type:"number",optional:!1,nullable:!1},emojis:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,properties:{id:{type:"string",optional:!1,nullable:!1,format:"id"},aliases:{type:"array",optional:!1,nullable:!1,items:{type:"string",optional:!1,nullable:!1}},category:{type:"string",optional:!1,nullable:!0},host:{type:"string",optional:!1,nullable:!0},url:{type:"string",optional:!1,nullable:!1,format:"url"}},required:["id","aliases","category","host","url"]}},ads:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,properties:{place:{type:"string",optional:!1,nullable:!1},url:{type:"string",optional:!1,nullable:!1,format:"url"},imageUrl:{type:"string",optional:!1,nullable:!1,format:"url"}},required:["place","url","imageUrl"]}},enableEmail:{type:"boolean",optional:!1,nullable:!1},enableTwitterIntegration:{type:"boolean",optional:!1,nullable:!1},enableGithubIntegration:{type:"boolean",optional:!1,nullable:!1},enableDiscordIntegration:{type:"boolean",optional:!1,nullable:!1},enableServiceWorker:{type:"boolean",optional:!1,nullable:!1},translatorAvailable:{type:"boolean",optional:!1,nullable:!1},proxyAccountName:{type:"string",optional:!1,nullable:!0},userStarForReactionFallback:{type:"boolean",optional:!0,nullable:!1},pinnedUsers:{type:"array",optional:!0,nullable:!1,items:{type:"string",optional:!1,nullable:!1}},hiddenTags:{type:"array",optional:!0,nullable:!1,items:{type:"string",optional:!1,nullable:!1}},blockedHosts:{type:"array",optional:!0,nullable:!1,items:{type:"string",optional:!1,nullable:!1}},hcaptchaSecretKey:{type:"string",optional:!0,nullable:!0},recaptchaSecretKey:{type:"string",optional:!0,nullable:!0},sensitiveMediaDetection:{type:"string",optional:!0,nullable:!1},sensitiveMediaDetectionSensitivity:{type:"string",optional:!0,nullable:!1},setSensitiveFlagAutomatically:{type:"boolean",optional:!0,nullable:!1},enableSensitiveMediaDetectionForVideos:{type:"boolean",optional:!0,nullable:!1},proxyAccountId:{type:"string",optional:!0,nullable:!0,format:"id"},twitterConsumerKey:{type:"string",optional:!0,nullable:!0},twitterConsumerSecret:{type:"string",optional:!0,nullable:!0},githubClientId:{type:"string",optional:!0,nullable:!0},githubClientSecret:{type:"string",optional:!0,nullable:!0},discordClientId:{type:"string",optional:!0,nullable:!0},discordClientSecret:{type:"string",optional:!0,nullable:!0},summaryProxy:{type:"string",optional:!0,nullable:!0},email:{type:"string",optional:!0,nullable:!0},smtpSecure:{type:"boolean",optional:!0,nullable:!1},smtpHost:{type:"string",optional:!0,nullable:!0},smtpPort:{type:"string",optional:!0,nullable:!0},smtpUser:{type:"string",optional:!0,nullable:!0},smtpPass:{type:"string",optional:!0,nullable:!0},swPrivateKey:{type:"string",optional:!0,nullable:!0},useObjectStorage:{type:"boolean",optional:!0,nullable:!1},objectStorageBaseUrl:{type:"string",optional:!0,nullable:!0},objectStorageBucket:{type:"string",optional:!0,nullable:!0},objectStoragePrefix:{type:"string",optional:!0,nullable:!0},objectStorageEndpoint:{type:"string",optional:!0,nullable:!0},objectStorageRegion:{type:"string",optional:!0,nullable:!0},objectStoragePort:{type:"number",optional:!0,nullable:!0},objectStorageAccessKey:{type:"string",optional:!0,nullable:!0},objectStorageSecretKey:{type:"string",optional:!0,nullable:!0},objectStorageUseSSL:{type:"boolean",optional:!0,nullable:!1},objectStorageUseProxy:{type:"boolean",optional:!0,nullable:!1},objectStorageSetPublicRead:{type:"boolean",optional:!0,nullable:!1},enableIpLogging:{type:"boolean",optional:!0,nullable:!1},enableActiveEmailValidation:{type:"boolean",optional:!0,nullable:!1}},required:["driveCapacityPerLocalUserMb","driveCapacityPerRemoteUserMb","cacheRemoteFiles","emailRequiredForSignup","enableHcaptcha","hcaptchaSiteKey","enableRecaptcha","recaptchaSiteKey","swPublickey","mascotImageUrl","bannerUrl","errorImageUrl","iconUrl","maxNoteTextLength","emojis","ads","enableEmail","enableTwitterIntegration","enableGithubIntegration","enableDiscordIntegration","enableServiceWorker","translatorAvailable","proxyAccountName"]},errors:{}}},null,8,["def"])]),_:1}),m,e(a,null,{default:o(()=>[e(s,{schema:{type:"object",properties:{},required:[]}})]),_:1}),h,e(a,null,{default:o(()=>[e(p,{schema:{type:"object",optional:!1,nullable:!1,properties:{driveCapacityPerLocalUserMb:{type:"number",optional:!1,nullable:!1},driveCapacityPerRemoteUserMb:{type:"number",optional:!1,nullable:!1},cacheRemoteFiles:{type:"boolean",optional:!1,nullable:!1},emailRequiredForSignup:{type:"boolean",optional:!1,nullable:!1},enableHcaptcha:{type:"boolean",optional:!1,nullable:!1},hcaptchaSiteKey:{type:"string",optional:!1,nullable:!0},enableRecaptcha:{type:"boolean",optional:!1,nullable:!1},recaptchaSiteKey:{type:"string",optional:!1,nullable:!0},swPublickey:{type:"string",optional:!1,nullable:!0},mascotImageUrl:{type:"string",optional:!1,nullable:!1,default:"/assets/ai.png"},bannerUrl:{type:"string",optional:!1,nullable:!1},errorImageUrl:{type:"string",optional:!1,nullable:!1,default:"https://xn--931a.moe/aiart/yubitun.png"},iconUrl:{type:"string",optional:!1,nullable:!0},maxNoteTextLength:{type:"number",optional:!1,nullable:!1},emojis:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,properties:{id:{type:"string",optional:!1,nullable:!1,format:"id"},aliases:{type:"array",optional:!1,nullable:!1,items:{type:"string",optional:!1,nullable:!1}},category:{type:"string",optional:!1,nullable:!0},host:{type:"string",optional:!1,nullable:!0},url:{type:"string",optional:!1,nullable:!1,format:"url"}},required:["id","aliases","category","host","url"]}},ads:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,properties:{place:{type:"string",optional:!1,nullable:!1},url:{type:"string",optional:!1,nullable:!1,format:"url"},imageUrl:{type:"string",optional:!1,nullable:!1,format:"url"}},required:["place","url","imageUrl"]}},enableEmail:{type:"boolean",optional:!1,nullable:!1},enableTwitterIntegration:{type:"boolean",optional:!1,nullable:!1},enableGithubIntegration:{type:"boolean",optional:!1,nullable:!1},enableDiscordIntegration:{type:"boolean",optional:!1,nullable:!1},enableServiceWorker:{type:"boolean",optional:!1,nullable:!1},translatorAvailable:{type:"boolean",optional:!1,nullable:!1},proxyAccountName:{type:"string",optional:!1,nullable:!0},userStarForReactionFallback:{type:"boolean",optional:!0,nullable:!1},pinnedUsers:{type:"array",optional:!0,nullable:!1,items:{type:"string",optional:!1,nullable:!1}},hiddenTags:{type:"array",optional:!0,nullable:!1,items:{type:"string",optional:!1,nullable:!1}},blockedHosts:{type:"array",optional:!0,nullable:!1,items:{type:"string",optional:!1,nullable:!1}},hcaptchaSecretKey:{type:"string",optional:!0,nullable:!0},recaptchaSecretKey:{type:"string",optional:!0,nullable:!0},sensitiveMediaDetection:{type:"string",optional:!0,nullable:!1},sensitiveMediaDetectionSensitivity:{type:"string",optional:!0,nullable:!1},setSensitiveFlagAutomatically:{type:"boolean",optional:!0,nullable:!1},enableSensitiveMediaDetectionForVideos:{type:"boolean",optional:!0,nullable:!1},proxyAccountId:{type:"string",optional:!0,nullable:!0,format:"id"},twitterConsumerKey:{type:"string",optional:!0,nullable:!0},twitterConsumerSecret:{type:"string",optional:!0,nullable:!0},githubClientId:{type:"string",optional:!0,nullable:!0},githubClientSecret:{type:"string",optional:!0,nullable:!0},discordClientId:{type:"string",optional:!0,nullable:!0},discordClientSecret:{type:"string",optional:!0,nullable:!0},summaryProxy:{type:"string",optional:!0,nullable:!0},email:{type:"string",optional:!0,nullable:!0},smtpSecure:{type:"boolean",optional:!0,nullable:!1},smtpHost:{type:"string",optional:!0,nullable:!0},smtpPort:{type:"string",optional:!0,nullable:!0},smtpUser:{type:"string",optional:!0,nullable:!0},smtpPass:{type:"string",optional:!0,nullable:!0},swPrivateKey:{type:"string",optional:!0,nullable:!0},useObjectStorage:{type:"boolean",optional:!0,nullable:!1},objectStorageBaseUrl:{type:"string",optional:!0,nullable:!0},objectStorageBucket:{type:"string",optional:!0,nullable:!0},objectStoragePrefix:{type:"string",optional:!0,nullable:!0},objectStorageEndpoint:{type:"string",optional:!0,nullable:!0},objectStorageRegion:{type:"string",optional:!0,nullable:!0},objectStoragePort:{type:"number",optional:!0,nullable:!0},objectStorageAccessKey:{type:"string",optional:!0,nullable:!0},objectStorageSecretKey:{type:"string",optional:!0,nullable:!0},objectStorageUseSSL:{type:"boolean",optional:!0,nullable:!1},objectStorageUseProxy:{type:"boolean",optional:!0,nullable:!1},objectStorageSetPublicRead:{type:"boolean",optional:!0,nullable:!1},enableIpLogging:{type:"boolean",optional:!0,nullable:!1},enableActiveEmailValidation:{type:"boolean",optional:!0,nullable:!1}},required:["driveCapacityPerLocalUserMb","driveCapacityPerRemoteUserMb","cacheRemoteFiles","emailRequiredForSignup","enableHcaptcha","hcaptchaSiteKey","enableRecaptcha","recaptchaSiteKey","swPublickey","mascotImageUrl","bannerUrl","errorImageUrl","iconUrl","maxNoteTextLength","emojis","ads","enableEmail","enableTwitterIntegration","enableGithubIntegration","enableDiscordIntegration","enableServiceWorker","translatorAvailable","proxyAccountName"]}},null,8,["schema"])]),_:1}),S,e(a,null,{default:o(()=>[e(u,{errors:{},"common-errors":{"1384574d-a912-4b81-8601-c7b1c4085df1":{id:"1384574d-a912-4b81-8601-c7b1c4085df1",code:"CREDENTIAL_REQUIRED",description:"\u30AF\u30EC\u30C7\u30F3\u30B7\u30E3\u30EB\u5FC5\u9808\u306E\u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8\u306B\u30AF\u30EC\u30C7\u30F3\u30B7\u30E3\u30EB\u7121\u3057\u3067\u30EA\u30AF\u30A8\u30B9\u30C8\u3055\u308C\u307E\u3057\u305F\u3002"},"d5826d14-3982-4d2e-8011-b9e9f02499ef":{id:"d5826d14-3982-4d2e-8011-b9e9f02499ef",code:"RATE_LIMIT_EXCEEDED",description:"\u30EC\u30FC\u30C8\u30EA\u30DF\u30C3\u30C8\u306B\u3088\u308B\u5236\u9650\u306E\u305F\u3081\u4E00\u6642\u7684\u306B\u5229\u7528\u3067\u304D\u307E\u305B\u3093\u3002"},"56f35758-7dd5-468b-8439-5d6fb8ec9b8e":{id:"56f35758-7dd5-468b-8439-5d6fb8ec9b8e",code:"ACCESS_DENIED",description:"\u30A2\u30AF\u30BB\u30B9\u6A29\u9650\u304C\u3042\u308A\u307E\u305B\u3093\u3002"},"1370e5b7-d4eb-4566-bb1d-7748ee6a1838":{id:"1370e5b7-d4eb-4566-bb1d-7748ee6a1838",code:"PERMISSION_DENIED",description:"\u4E0E\u3048\u3089\u308C\u305F\u30AF\u30EC\u30C7\u30F3\u30B7\u30E3\u30EB\u306B\u306F\u5FC5\u8981\u306A\u30D1\u30FC\u30DF\u30C3\u30B7\u30E7\u30F3\u304C\u3042\u308A\u307E\u305B\u3093\u3002"},"a8c724b3-6e9c-4b46-b1a8-bc3ed6258370":{id:"a8c724b3-6e9c-4b46-b1a8-bc3ed6258370",code:"YOUR_ACCOUNT_SUSPENDED",description:"\u30A2\u30AB\u30A6\u30F3\u30C8\u304C\u51CD\u7D50\u3055\u308C\u3066\u3044\u308B\u305F\u3081\u5229\u7528\u3067\u304D\u307E\u305B\u3093\u3002"},"3d81ceae-475f-4600-b2a8-2bc116157532":{id:"3d81ceae-475f-4600-b2a8-2bc116157532",code:"INVALID_PARAM",description:"\u30EA\u30AF\u30A8\u30B9\u30C8\u30D1\u30E9\u30E1\u30FC\u30BF\u306B\u8AA4\u308A\u304C\u3042\u308A\u307E\u3059\u3002"},"5d37dbcb-891e-41ca-a3d6-e690c97775ac":{id:"5d37dbcb-891e-41ca-a3d6-e690c97775ac",code:"INTERNAL_ERROR",description:"\u30B5\u30FC\u30D0\u30FC\u5185\u90E8\u3067\u554F\u984C\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002\u5F15\u304D\u7D9A\u304D\u554F\u984C\u304C\u767A\u751F\u3059\u308B\u5834\u5408\u306F\u7BA1\u7406\u8005\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044\u3002"}}})]),_:1}),U,e(a,null,{default:o(()=>[e(b,{def:{summary:"",description:"",tags:["meta"],requireCredential:!0,req:{type:"object",properties:{},required:[]},res:{type:"object",optional:!1,nullable:!1,properties:{driveCapacityPerLocalUserMb:{type:"number",optional:!1,nullable:!1},driveCapacityPerRemoteUserMb:{type:"number",optional:!1,nullable:!1},cacheRemoteFiles:{type:"boolean",optional:!1,nullable:!1},emailRequiredForSignup:{type:"boolean",optional:!1,nullable:!1},enableHcaptcha:{type:"boolean",optional:!1,nullable:!1},hcaptchaSiteKey:{type:"string",optional:!1,nullable:!0},enableRecaptcha:{type:"boolean",optional:!1,nullable:!1},recaptchaSiteKey:{type:"string",optional:!1,nullable:!0},swPublickey:{type:"string",optional:!1,nullable:!0},mascotImageUrl:{type:"string",optional:!1,nullable:!1,default:"/assets/ai.png"},bannerUrl:{type:"string",optional:!1,nullable:!1},errorImageUrl:{type:"string",optional:!1,nullable:!1,default:"https://xn--931a.moe/aiart/yubitun.png"},iconUrl:{type:"string",optional:!1,nullable:!0},maxNoteTextLength:{type:"number",optional:!1,nullable:!1},emojis:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,properties:{id:{type:"string",optional:!1,nullable:!1,format:"id"},aliases:{type:"array",optional:!1,nullable:!1,items:{type:"string",optional:!1,nullable:!1}},category:{type:"string",optional:!1,nullable:!0},host:{type:"string",optional:!1,nullable:!0},url:{type:"string",optional:!1,nullable:!1,format:"url"}},required:["id","aliases","category","host","url"]}},ads:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,properties:{place:{type:"string",optional:!1,nullable:!1},url:{type:"string",optional:!1,nullable:!1,format:"url"},imageUrl:{type:"string",optional:!1,nullable:!1,format:"url"}},required:["place","url","imageUrl"]}},enableEmail:{type:"boolean",optional:!1,nullable:!1},enableTwitterIntegration:{type:"boolean",optional:!1,nullable:!1},enableGithubIntegration:{type:"boolean",optional:!1,nullable:!1},enableDiscordIntegration:{type:"boolean",optional:!1,nullable:!1},enableServiceWorker:{type:"boolean",optional:!1,nullable:!1},translatorAvailable:{type:"boolean",optional:!1,nullable:!1},proxyAccountName:{type:"string",optional:!1,nullable:!0},userStarForReactionFallback:{type:"boolean",optional:!0,nullable:!1},pinnedUsers:{type:"array",optional:!0,nullable:!1,items:{type:"string",optional:!1,nullable:!1}},hiddenTags:{type:"array",optional:!0,nullable:!1,items:{type:"string",optional:!1,nullable:!1}},blockedHosts:{type:"array",optional:!0,nullable:!1,items:{type:"string",optional:!1,nullable:!1}},hcaptchaSecretKey:{type:"string",optional:!0,nullable:!0},recaptchaSecretKey:{type:"string",optional:!0,nullable:!0},sensitiveMediaDetection:{type:"string",optional:!0,nullable:!1},sensitiveMediaDetectionSensitivity:{type:"string",optional:!0,nullable:!1},setSensitiveFlagAutomatically:{type:"boolean",optional:!0,nullable:!1},enableSensitiveMediaDetectionForVideos:{type:"boolean",optional:!0,nullable:!1},proxyAccountId:{type:"string",optional:!0,nullable:!0,format:"id"},twitterConsumerKey:{type:"string",optional:!0,nullable:!0},twitterConsumerSecret:{type:"string",optional:!0,nullable:!0},githubClientId:{type:"string",optional:!0,nullable:!0},githubClientSecret:{type:"string",optional:!0,nullable:!0},discordClientId:{type:"string",optional:!0,nullable:!0},discordClientSecret:{type:"string",optional:!0,nullable:!0},summaryProxy:{type:"string",optional:!0,nullable:!0},email:{type:"string",optional:!0,nullable:!0},smtpSecure:{type:"boolean",optional:!0,nullable:!1},smtpHost:{type:"string",optional:!0,nullable:!0},smtpPort:{type:"string",optional:!0,nullable:!0},smtpUser:{type:"string",optional:!0,nullable:!0},smtpPass:{type:"string",optional:!0,nullable:!0},swPrivateKey:{type:"string",optional:!0,nullable:!0},useObjectStorage:{type:"boolean",optional:!0,nullable:!1},objectStorageBaseUrl:{type:"string",optional:!0,nullable:!0},objectStorageBucket:{type:"string",optional:!0,nullable:!0},objectStoragePrefix:{type:"string",optional:!0,nullable:!0},objectStorageEndpoint:{type:"string",optional:!0,nullable:!0},objectStorageRegion:{type:"string",optional:!0,nullable:!0},objectStoragePort:{type:"number",optional:!0,nullable:!0},objectStorageAccessKey:{type:"string",optional:!0,nullable:!0},objectStorageSecretKey:{type:"string",optional:!0,nullable:!0},objectStorageUseSSL:{type:"boolean",optional:!0,nullable:!1},objectStorageUseProxy:{type:"boolean",optional:!0,nullable:!1},objectStorageSetPublicRead:{type:"boolean",optional:!0,nullable:!1},enableIpLogging:{type:"boolean",optional:!0,nullable:!1},enableActiveEmailValidation:{type:"boolean",optional:!0,nullable:!1}},required:["driveCapacityPerLocalUserMb","driveCapacityPerRemoteUserMb","cacheRemoteFiles","emailRequiredForSignup","enableHcaptcha","hcaptchaSiteKey","enableRecaptcha","recaptchaSiteKey","swPublickey","mascotImageUrl","bannerUrl","errorImageUrl","iconUrl","maxNoteTextLength","emojis","ads","enableEmail","enableTwitterIntegration","enableGithubIntegration","enableDiscordIntegration","enableServiceWorker","translatorAvailable","proxyAccountName"]},errors:{}}},null,8,["def"])]),_:1})])}var R=c(g,[["render",j],["__file","meta.html.vue"]]);export{R as default};
