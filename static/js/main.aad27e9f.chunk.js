(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(6),s=n.n(o),c=n(1),i=n(2),l=n(4),u=n(3),p=(n(13),n(7)),m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={isReverse:!1,sortBy:""},e.reverse=function(){e.setState((function(e){return{isReverse:!e.isReverse}}))},e.goodsSort=function(t){e.setState({sortBy:t})},e}return Object(i.a)(n,[{key:"reset",value:function(){this.setState({sortBy:"",isReverse:!1})}},{key:"render",value:function(){var e=this,t=this.state,n=t.sortBy,r=t.isReverse,o=Object(p.a)(this.props.goods);return o.sort((function(e,t){switch(n){case"name":return e.localeCompare(t);case"length":return e.length-t.length;default:return 0}})),r&&o.reverse(),a.a.createElement(a.a.Fragment,null,a.a.createElement("ul",null,o.map((function(e){return a.a.createElement("li",{key:e},e)}))),a.a.createElement("button",{type:"button",onClick:function(){e.reverse()}},"Reverse"),a.a.createElement("button",{type:"button",onClick:function(){e.goodsSort("name")}},"Sort alphabetically"),a.a.createElement("button",{type:"button",onClick:function(){e.goodsSort("length")}},"Sort by length"),a.a.createElement("button",{type:"button",onClick:function(){e.reset()}},"Reset"))}}]),n}(a.a.Component),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={isVisible:!1},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Goods"),b.length,a.a.createElement("div",{className:"wrapper"}),this.state.isVisible?a.a.createElement(m,{goods:b}):a.a.createElement("button",{type:"button",onClick:function(t){e.setState({isVisible:!0})}},"Start"))}}]),n}(a.a.Component);s.a.render(a.a.createElement(f,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.aad27e9f.chunk.js.map