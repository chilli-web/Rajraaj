(this["webpackJsonpreact-chat"]=this["webpackJsonpreact-chat"]||[]).push([[0],{16:function(e,t,a){e.exports=a(30)},21:function(e,t,a){},23:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(11),o=a.n(c),i=(a(21),a(9)),l=a.n(i),s=a(12),u=a(7),m=(a(23),a(5)),p=a.n(m),d=(a(24),a(28),a(31),a(14)),h=a(15);p.a.initializeApp({apiKey: "AIzaSyDyMUaND57ZIlLsF77NHQdflCA7Iatyy9k",
    authDomain: "",
    databaseURL: "https://roomchat1-636d5-default-rtdb.firebaseio.com",
    projectId: "roomchat1-636d5",
    storageBucket: "roomchat1-636d5.appspot.com",
    messagingSenderId: "128142004369",
    appId: "1:128142004369:web:d79dc2b0a251e0007cef30"});var f=p.a.auth(),g=p.a.firestore();p.a.analytics();function b(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"sign-in",onClick:function(){var e=new p.a.auth.GoogleAuthProvider;f.signInWithPopup(e)}},"Sign in with Google"),r.a.createElement("P",null,"WELCOME"))}function v(){return f.currentUser&&r.a.createElement("button",{className:"sign-out",onClick:function(){return f.signOut()}},"Sign Out")}function E(){var e=Object(n.useRef)(),t=g.collection("messages"),a=t.orderBy("createdAt").limitToLast(30),c=Object(h.a)(a,{idField:"id"}),o=Object(u.a)(c,1)[0],i=Object(n.useState)(""),m=Object(u.a)(i,2),d=m[0],b=m[1],v=function(){var e=Object(s.a)(l.a.mark((function e(a){var n,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=f.currentUser,r=n.uid,c=n.photoURL,e.next=4,t.add({text:d,createdAt:p.a.firestore.FieldValue.serverTimestamp(),uid:r,photoURL:c});case 4:b("");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){e.current.scrollIntoView({behavior:"smooth"})}),[o]),r.a.createElement(r.a.Fragment,null,r.a.createElement("main",null,o&&o.map((function(e){return r.a.createElement(w,{key:e.id,message:e})})),r.a.createElement("span",{ref:e})),r.a.createElement("form",{onSubmit:v},r.a.createElement("input",{value:d,onChange:function(e){return b(e.target.value)},placeholder:"Text message"}),r.a.createElement("button",{type:"submit",disabled:!d},"SEND") ))}function w(e){var t=e.message,a=t.text,n=t.uid,c=t.photoURL,o=n===f.currentUser.uid?"sent":"received";return r.a.createElement(r.a.Fragment,1,r.a.createElement("div",{className:"message ".concat()},r.a.createElement("img",{src:c||"https://api.adorable.io/avatars/23/abott@adorable.png"}),r.a.createElement("p",null, a)))}var y=function(){var e=Object(d.a)(f),t=Object(u.a)(e,1)[0];return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",null,"CHILLITEN"),r.a.createElement(v,null)),r.a.createElement("section",null,t?r.a.createElement(E,null):r.a.createElement(b,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.errr(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.448b3b5a.chunk.js.map
