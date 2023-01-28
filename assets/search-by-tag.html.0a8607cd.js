import{_ as p,o as u,c as m,b as t,w as a,a as e,d as s,r as i}from"./app.f72270cc.js";const f={},y=e("h1",{id:"notes-search-by-tag",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#notes-search-by-tag","aria-hidden":"true"},"#"),s(),e("code",null,"notes/search-by-tag")],-1),b=e("p",null,"\u6307\u5B9A\u3055\u308C\u305F\u30CF\u30C3\u30B7\u30E5\u30BF\u30B0\u304C\u4ED8\u3051\u3089\u308C\u305F\u30CE\u30FC\u30C8\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002\u8907\u6570\u306E\u30CF\u30C3\u30B7\u30E5\u30BF\u30B0\u3092\u7D44\u307F\u5408\u308F\u305B\u305F\u691C\u7D22\u6761\u4EF6\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002",-1),h=e("h2",{id:"\u30CF\u309A\u30E9\u30E1\u30FC\u30BF",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u30CF\u309A\u30E9\u30E1\u30FC\u30BF","aria-hidden":"true"},"#"),s(" \u30D1\u30E9\u30E1\u30FC\u30BF")],-1),_=e("h2",{id:"\u30EC\u30B9\u30DB\u309A\u30F3\u30B9",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u30EC\u30B9\u30DB\u309A\u30F3\u30B9","aria-hidden":"true"},"#"),s(" \u30EC\u30B9\u30DD\u30F3\u30B9")],-1),g=e("h2",{id:"\u30A8\u30E9\u30FC",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u30A8\u30E9\u30FC","aria-hidden":"true"},"#"),s(" \u30A8\u30E9\u30FC")],-1),k=e("h2",{id:"\u30EA\u30BD\u30FC\u30B9",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u30EA\u30BD\u30FC\u30B9","aria-hidden":"true"},"#"),s(" \u30EA\u30BD\u30FC\u30B9")],-1);function I(R,E){const n=i("MkApiConsole"),r=i("ClientOnly"),o=i("MkSchemaViewerItemObject"),l=i("MkSchemaViewer"),d=i("MkApiErrors"),c=i("MkApiResources");return u(),m("div",null,[y,b,t(r,null,{default:a(()=>[t(n,{name:"notes/search-by-tag",def:{summary:"\u6307\u5B9A\u3055\u308C\u305F\u30CF\u30C3\u30B7\u30E5\u30BF\u30B0\u304C\u4ED8\u3051\u3089\u308C\u305F\u30CE\u30FC\u30C8\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002",description:"\u6307\u5B9A\u3055\u308C\u305F\u30CF\u30C3\u30B7\u30E5\u30BF\u30B0\u304C\u4ED8\u3051\u3089\u308C\u305F\u30CE\u30FC\u30C8\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002\u8907\u6570\u306E\u30CF\u30C3\u30B7\u30E5\u30BF\u30B0\u3092\u7D44\u307F\u5408\u308F\u305B\u305F\u691C\u7D22\u6761\u4EF6\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002",tags:["notes"],requireCredential:!1,req:{type:"object",properties:{reply:{type:"boolean",nullable:!0,default:null,description:"true\u306B\u3059\u308B\u3068\u8FD4\u4FE1\u3060\u3051\u3092\u3001false\u306B\u3059\u308B\u3068\u8FD4\u4FE1\u4EE5\u5916\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002\u5024\u3092\u8A2D\u5B9A\u3057\u306A\u3051\u308C\u3070\u8FD4\u4FE1\u3067\u3042\u308B\u304B\u305D\u3046\u3067\u306A\u3044\u304B\u306B\u95A2\u4FC2\u306A\u304F\u30CE\u30FC\u30C8\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},renote:{type:"boolean",nullable:!0,default:null,description:"true\u306B\u3059\u308B\u3068Renote\u3060\u3051\u3092\u3001false\u306B\u3059\u308B\u3068Renote\u4EE5\u5916\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002\u5024\u3092\u8A2D\u5B9A\u3057\u306A\u3051\u308C\u3070Renote\u3067\u3042\u308B\u304B\u305D\u3046\u3067\u306A\u3044\u304B\u306B\u95A2\u4FC2\u306A\u304F\u30CE\u30FC\u30C8\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},withFiles:{type:"boolean",default:!1,description:"true\u306B\u3059\u308B\u3068\u3001\u30D5\u30A1\u30A4\u30EB\u304C\u6DFB\u4ED8\u3055\u308C\u305F\u30CE\u30FC\u30C8\u306E\u307F\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},poll:{type:"boolean",nullable:!0,default:null,description:"true\u306B\u3059\u308B\u3068\u6295\u7968\u3092\u542B\u3080\u30CE\u30FC\u30C8\u3060\u3051\u3092\u3001false\u306B\u3059\u308B\u3068\u542B\u307E\u306A\u3044\u30CE\u30FC\u30C8\u3060\u3051\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002\u5024\u3092\u8A2D\u5B9A\u3057\u306A\u3051\u308C\u3070\u6295\u7968\u306E\u6709\u7121\u306B\u304B\u304B\u308F\u3089\u305A\u30CE\u30FC\u30C8\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},sinceId:{type:"string",format:"misskey:id",description:"\u6307\u5B9A\u3059\u308B\u3068\u3001id\u304C\u305D\u306E\u5024\u3088\u308A\u3082\u5927\u304D\u3044\u30CE\u30FC\u30C8\u3092\u8FD4\u3057\u307E\u3059\u3002"},untilId:{type:"string",format:"misskey:id",description:"\u6307\u5B9A\u3059\u308B\u3068\u3001id\u304C\u305D\u306E\u5024\u3088\u308A\u3082\u5C0F\u3055\u3044\u30CE\u30FC\u30C8\u3092\u8FD4\u3057\u307E\u3059\u3002"},limit:{type:"integer",minimum:1,maximum:100,default:10,description:"\u53D6\u5F97\u3059\u308B\u30CE\u30FC\u30C8\u306E\u6700\u5927\u6570\u3002"}},anyOf:[{properties:{tag:{type:"string",minLength:1,description:"\u691C\u7D22\u5BFE\u8C61\u306E\u30CF\u30C3\u30B7\u30E5\u30BF\u30B0\u3002\u30CF\u30C3\u30B7\u30E5\uFF08#\uFF09\u81EA\u8EAB\u306F\u542B\u3081\u307E\u305B\u3093\u3002"}},required:["tag"]},{properties:{query:{type:"array",description:"\u691C\u7D22\u306E\u6761\u4EF6\u5F0F\u3002\u4E8C\u6B21\u5143\u914D\u5217\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u5916\u5074\u306E\u914D\u5217\u306E\u8981\u7D20\u306FOR\u3067\u3001\u5185\u5074\u306E\u914D\u5217\u306E\u8981\u7D20\u306FAND\u3067\u7D50\u5408\u3055\u308C\u307E\u3059\u3002\u305F\u3068\u3048\u3070\u3001[['fediverse'], ['misskey', 'ai']] \u3068\u6307\u5B9A\u3059\u308B\u3068\u3001 #fediverse \u306E\u307F\u3092\u542B\u3080\u30CE\u30FC\u30C8\u3068\u3001 #misskey \u3068 #ai \u3092\u4E21\u65B9\u542B\u3080\u30CE\u30FC\u30C8\u304C\u8FD4\u3055\u308C\u307E\u3059\u304C\u3001 #misskey \u3092\u542B\u307F #ai \u3092\u542B\u307E\u306A\u3044\u30CE\u30FC\u30C8\u306F\u8FD4\u3055\u308C\u307E\u305B\u3093\u3002",items:{type:"array",items:{type:"string",minLength:1},minItems:1},minItems:1}},required:["query"]}]},res:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"Note",$ref:"misskey://Note"}},errors:{}}})]),_:1}),h,t(r,null,{default:a(()=>[t(o,{schema:{type:"object",properties:{reply:{type:"boolean",nullable:!0,default:null,description:"true\u306B\u3059\u308B\u3068\u8FD4\u4FE1\u3060\u3051\u3092\u3001false\u306B\u3059\u308B\u3068\u8FD4\u4FE1\u4EE5\u5916\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002\u5024\u3092\u8A2D\u5B9A\u3057\u306A\u3051\u308C\u3070\u8FD4\u4FE1\u3067\u3042\u308B\u304B\u305D\u3046\u3067\u306A\u3044\u304B\u306B\u95A2\u4FC2\u306A\u304F\u30CE\u30FC\u30C8\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},renote:{type:"boolean",nullable:!0,default:null,description:"true\u306B\u3059\u308B\u3068Renote\u3060\u3051\u3092\u3001false\u306B\u3059\u308B\u3068Renote\u4EE5\u5916\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002\u5024\u3092\u8A2D\u5B9A\u3057\u306A\u3051\u308C\u3070Renote\u3067\u3042\u308B\u304B\u305D\u3046\u3067\u306A\u3044\u304B\u306B\u95A2\u4FC2\u306A\u304F\u30CE\u30FC\u30C8\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},withFiles:{type:"boolean",default:!1,description:"true\u306B\u3059\u308B\u3068\u3001\u30D5\u30A1\u30A4\u30EB\u304C\u6DFB\u4ED8\u3055\u308C\u305F\u30CE\u30FC\u30C8\u306E\u307F\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},poll:{type:"boolean",nullable:!0,default:null,description:"true\u306B\u3059\u308B\u3068\u6295\u7968\u3092\u542B\u3080\u30CE\u30FC\u30C8\u3060\u3051\u3092\u3001false\u306B\u3059\u308B\u3068\u542B\u307E\u306A\u3044\u30CE\u30FC\u30C8\u3060\u3051\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002\u5024\u3092\u8A2D\u5B9A\u3057\u306A\u3051\u308C\u3070\u6295\u7968\u306E\u6709\u7121\u306B\u304B\u304B\u308F\u3089\u305A\u30CE\u30FC\u30C8\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},sinceId:{type:"string",format:"misskey:id",description:"\u6307\u5B9A\u3059\u308B\u3068\u3001id\u304C\u305D\u306E\u5024\u3088\u308A\u3082\u5927\u304D\u3044\u30CE\u30FC\u30C8\u3092\u8FD4\u3057\u307E\u3059\u3002"},untilId:{type:"string",format:"misskey:id",description:"\u6307\u5B9A\u3059\u308B\u3068\u3001id\u304C\u305D\u306E\u5024\u3088\u308A\u3082\u5C0F\u3055\u3044\u30CE\u30FC\u30C8\u3092\u8FD4\u3057\u307E\u3059\u3002"},limit:{type:"integer",minimum:1,maximum:100,default:10,description:"\u53D6\u5F97\u3059\u308B\u30CE\u30FC\u30C8\u306E\u6700\u5927\u6570\u3002"}},anyOf:[{properties:{tag:{type:"string",minLength:1,description:"\u691C\u7D22\u5BFE\u8C61\u306E\u30CF\u30C3\u30B7\u30E5\u30BF\u30B0\u3002\u30CF\u30C3\u30B7\u30E5\uFF08#\uFF09\u81EA\u8EAB\u306F\u542B\u3081\u307E\u305B\u3093\u3002"}},required:["tag"]},{properties:{query:{type:"array",description:"\u691C\u7D22\u306E\u6761\u4EF6\u5F0F\u3002\u4E8C\u6B21\u5143\u914D\u5217\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u5916\u5074\u306E\u914D\u5217\u306E\u8981\u7D20\u306FOR\u3067\u3001\u5185\u5074\u306E\u914D\u5217\u306E\u8981\u7D20\u306FAND\u3067\u7D50\u5408\u3055\u308C\u307E\u3059\u3002\u305F\u3068\u3048\u3070\u3001[['fediverse'], ['misskey', 'ai']] \u3068\u6307\u5B9A\u3059\u308B\u3068\u3001 #fediverse \u306E\u307F\u3092\u542B\u3080\u30CE\u30FC\u30C8\u3068\u3001 #misskey \u3068 #ai \u3092\u4E21\u65B9\u542B\u3080\u30CE\u30FC\u30C8\u304C\u8FD4\u3055\u308C\u307E\u3059\u304C\u3001 #misskey \u3092\u542B\u307F #ai \u3092\u542B\u307E\u306A\u3044\u30CE\u30FC\u30C8\u306F\u8FD4\u3055\u308C\u307E\u305B\u3093\u3002",items:{type:"array",items:{type:"string",minLength:1},minItems:1},minItems:1}},required:["query"]}]}})]),_:1}),_,t(r,null,{default:a(()=>[t(l,{schema:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"Note",$ref:"misskey://Note"}}})]),_:1}),g,t(r,null,{default:a(()=>[t(d,{errors:{},"common-errors":{"1384574d-a912-4b81-8601-c7b1c4085df1":{id:"1384574d-a912-4b81-8601-c7b1c4085df1",code:"CREDENTIAL_REQUIRED",description:"\u30AF\u30EC\u30C7\u30F3\u30B7\u30E3\u30EB\u5FC5\u9808\u306E\u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8\u306B\u30AF\u30EC\u30C7\u30F3\u30B7\u30E3\u30EB\u7121\u3057\u3067\u30EA\u30AF\u30A8\u30B9\u30C8\u3055\u308C\u307E\u3057\u305F\u3002"},"d5826d14-3982-4d2e-8011-b9e9f02499ef":{id:"d5826d14-3982-4d2e-8011-b9e9f02499ef",code:"RATE_LIMIT_EXCEEDED",description:"\u30EC\u30FC\u30C8\u30EA\u30DF\u30C3\u30C8\u306B\u3088\u308B\u5236\u9650\u306E\u305F\u3081\u4E00\u6642\u7684\u306B\u5229\u7528\u3067\u304D\u307E\u305B\u3093\u3002"},"56f35758-7dd5-468b-8439-5d6fb8ec9b8e":{id:"56f35758-7dd5-468b-8439-5d6fb8ec9b8e",code:"ACCESS_DENIED",description:"\u30A2\u30AF\u30BB\u30B9\u6A29\u9650\u304C\u3042\u308A\u307E\u305B\u3093\u3002"},"1370e5b7-d4eb-4566-bb1d-7748ee6a1838":{id:"1370e5b7-d4eb-4566-bb1d-7748ee6a1838",code:"PERMISSION_DENIED",description:"\u4E0E\u3048\u3089\u308C\u305F\u30AF\u30EC\u30C7\u30F3\u30B7\u30E3\u30EB\u306B\u306F\u5FC5\u8981\u306A\u30D1\u30FC\u30DF\u30C3\u30B7\u30E7\u30F3\u304C\u3042\u308A\u307E\u305B\u3093\u3002"},"a8c724b3-6e9c-4b46-b1a8-bc3ed6258370":{id:"a8c724b3-6e9c-4b46-b1a8-bc3ed6258370",code:"YOUR_ACCOUNT_SUSPENDED",description:"\u30A2\u30AB\u30A6\u30F3\u30C8\u304C\u51CD\u7D50\u3055\u308C\u3066\u3044\u308B\u305F\u3081\u5229\u7528\u3067\u304D\u307E\u305B\u3093\u3002"},"3d81ceae-475f-4600-b2a8-2bc116157532":{id:"3d81ceae-475f-4600-b2a8-2bc116157532",code:"INVALID_PARAM",description:"\u30EA\u30AF\u30A8\u30B9\u30C8\u30D1\u30E9\u30E1\u30FC\u30BF\u306B\u8AA4\u308A\u304C\u3042\u308A\u307E\u3059\u3002"},"5d37dbcb-891e-41ca-a3d6-e690c97775ac":{id:"5d37dbcb-891e-41ca-a3d6-e690c97775ac",code:"INTERNAL_ERROR",description:"\u30B5\u30FC\u30D0\u30FC\u5185\u90E8\u3067\u554F\u984C\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002\u5F15\u304D\u7D9A\u304D\u554F\u984C\u304C\u767A\u751F\u3059\u308B\u5834\u5408\u306F\u7BA1\u7406\u8005\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044\u3002"}}})]),_:1}),k,t(r,null,{default:a(()=>[t(c,{def:{summary:"\u6307\u5B9A\u3055\u308C\u305F\u30CF\u30C3\u30B7\u30E5\u30BF\u30B0\u304C\u4ED8\u3051\u3089\u308C\u305F\u30CE\u30FC\u30C8\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002",description:"\u6307\u5B9A\u3055\u308C\u305F\u30CF\u30C3\u30B7\u30E5\u30BF\u30B0\u304C\u4ED8\u3051\u3089\u308C\u305F\u30CE\u30FC\u30C8\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002\u8907\u6570\u306E\u30CF\u30C3\u30B7\u30E5\u30BF\u30B0\u3092\u7D44\u307F\u5408\u308F\u305B\u305F\u691C\u7D22\u6761\u4EF6\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002",tags:["notes"],requireCredential:!1,req:{type:"object",properties:{reply:{type:"boolean",nullable:!0,default:null,description:"true\u306B\u3059\u308B\u3068\u8FD4\u4FE1\u3060\u3051\u3092\u3001false\u306B\u3059\u308B\u3068\u8FD4\u4FE1\u4EE5\u5916\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002\u5024\u3092\u8A2D\u5B9A\u3057\u306A\u3051\u308C\u3070\u8FD4\u4FE1\u3067\u3042\u308B\u304B\u305D\u3046\u3067\u306A\u3044\u304B\u306B\u95A2\u4FC2\u306A\u304F\u30CE\u30FC\u30C8\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},renote:{type:"boolean",nullable:!0,default:null,description:"true\u306B\u3059\u308B\u3068Renote\u3060\u3051\u3092\u3001false\u306B\u3059\u308B\u3068Renote\u4EE5\u5916\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002\u5024\u3092\u8A2D\u5B9A\u3057\u306A\u3051\u308C\u3070Renote\u3067\u3042\u308B\u304B\u305D\u3046\u3067\u306A\u3044\u304B\u306B\u95A2\u4FC2\u306A\u304F\u30CE\u30FC\u30C8\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},withFiles:{type:"boolean",default:!1,description:"true\u306B\u3059\u308B\u3068\u3001\u30D5\u30A1\u30A4\u30EB\u304C\u6DFB\u4ED8\u3055\u308C\u305F\u30CE\u30FC\u30C8\u306E\u307F\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},poll:{type:"boolean",nullable:!0,default:null,description:"true\u306B\u3059\u308B\u3068\u6295\u7968\u3092\u542B\u3080\u30CE\u30FC\u30C8\u3060\u3051\u3092\u3001false\u306B\u3059\u308B\u3068\u542B\u307E\u306A\u3044\u30CE\u30FC\u30C8\u3060\u3051\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002\u5024\u3092\u8A2D\u5B9A\u3057\u306A\u3051\u308C\u3070\u6295\u7968\u306E\u6709\u7121\u306B\u304B\u304B\u308F\u3089\u305A\u30CE\u30FC\u30C8\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},sinceId:{type:"string",format:"misskey:id",description:"\u6307\u5B9A\u3059\u308B\u3068\u3001id\u304C\u305D\u306E\u5024\u3088\u308A\u3082\u5927\u304D\u3044\u30CE\u30FC\u30C8\u3092\u8FD4\u3057\u307E\u3059\u3002"},untilId:{type:"string",format:"misskey:id",description:"\u6307\u5B9A\u3059\u308B\u3068\u3001id\u304C\u305D\u306E\u5024\u3088\u308A\u3082\u5C0F\u3055\u3044\u30CE\u30FC\u30C8\u3092\u8FD4\u3057\u307E\u3059\u3002"},limit:{type:"integer",minimum:1,maximum:100,default:10,description:"\u53D6\u5F97\u3059\u308B\u30CE\u30FC\u30C8\u306E\u6700\u5927\u6570\u3002"}},anyOf:[{properties:{tag:{type:"string",minLength:1,description:"\u691C\u7D22\u5BFE\u8C61\u306E\u30CF\u30C3\u30B7\u30E5\u30BF\u30B0\u3002\u30CF\u30C3\u30B7\u30E5\uFF08#\uFF09\u81EA\u8EAB\u306F\u542B\u3081\u307E\u305B\u3093\u3002"}},required:["tag"]},{properties:{query:{type:"array",description:"\u691C\u7D22\u306E\u6761\u4EF6\u5F0F\u3002\u4E8C\u6B21\u5143\u914D\u5217\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u5916\u5074\u306E\u914D\u5217\u306E\u8981\u7D20\u306FOR\u3067\u3001\u5185\u5074\u306E\u914D\u5217\u306E\u8981\u7D20\u306FAND\u3067\u7D50\u5408\u3055\u308C\u307E\u3059\u3002\u305F\u3068\u3048\u3070\u3001[['fediverse'], ['misskey', 'ai']] \u3068\u6307\u5B9A\u3059\u308B\u3068\u3001 #fediverse \u306E\u307F\u3092\u542B\u3080\u30CE\u30FC\u30C8\u3068\u3001 #misskey \u3068 #ai \u3092\u4E21\u65B9\u542B\u3080\u30CE\u30FC\u30C8\u304C\u8FD4\u3055\u308C\u307E\u3059\u304C\u3001 #misskey \u3092\u542B\u307F #ai \u3092\u542B\u307E\u306A\u3044\u30CE\u30FC\u30C8\u306F\u8FD4\u3055\u308C\u307E\u305B\u3093\u3002",items:{type:"array",items:{type:"string",minLength:1},minItems:1},minItems:1}},required:["query"]}]},res:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"Note",$ref:"misskey://Note"}},errors:{}}})]),_:1})])}var A=p(f,[["render",I],["__file","search-by-tag.html.vue"]]);export{A as default};
