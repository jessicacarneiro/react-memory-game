(this["webpackJsonpmemory-grid-game"]=this["webpackJsonpmemory-grid-game"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),i=(n(14),n(15),n(1)),s=n(2),u=n(4),l=n(3),m=n(6),p=n(5),v=n.n(p),d=(n(18),n(19),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"cell"},r.a.createElement("span",{className:"cellId"},"row-".concat(this.props.id)))}}]),n}(r.a.Component)),h=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;Object(i.a)(this,n),(a=t.call(this,e)).matrix=a.generateGrid();var r=v.a.flatMapDeep(a.matrix,(function(e){return v.a.flatten(e.props.children)}));return a.activeCells=v.a.sampleSize(r,a.props.activeCellsCount),a}return Object(s.a)(n,[{key:"rows",value:function(){return Object(m.a)(Array(this.props.rows).keys())}},{key:"columns",value:function(){return Object(m.a)(Array(this.props.columns).keys())}},{key:"generateGrid",value:function(){var e=this;return this.rows().map((function(t){return r.a.createElement("div",{key:"".concat(t),id:"row-".concat(t)},e.columns().map((function(e){return r.a.createElement(d,{key:e,id:"".concat(t).concat(e)})})))}))}},{key:"render",value:function(){return r.a.createElement("div",{id:"grid"},this.matrix)}}]),n}(r.a.Component),f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"hint"},this.props.hints[this.props.gameState],"..."))}}]),n}(r.a.Component);f.defaultProps={hints:{ready:"Get Ready",memorize:"Memorize",recall:"Recall"}};var y=f,b=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={gameState:"ready"},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){return e.setState({gameState:"memorize"})}),2e3),setTimeout((function(){return e.setState({gameState:"recall"})}),4e3)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h,{rows:this.props.rows,columns:this.props.columns,activeCellsCount:this.props.activeCellsCount}),r.a.createElement(y,this.state))}}]),n}(r.a.Component);var j=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(b,{rows:5,columns:5,activeCellsCount:6}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.f3d785e5.chunk.js.map