/* Copyright (C) YOOtheme GmbH, http://www.gnu.org/licenses/gpl.html GNU/GPL */

!function(e){var t=function(){};e.extend(t.prototype,{name:"ElementRepeatableTextarea",initialize:function(t){var i=t.find("ul.repeatable-list");i.find("li.hidden").each(function(){e(this).find("*").each(function(){e(this).attr("name")&&(e(this).data("name",e(this).attr("name")),e(this).attr("name",""))})}),t.delegate("span.delete","click",function(){e(this).closest("li.repeatable-element").fadeOut(200,function(){e(this).addClass("hidden"),e(this).find("*").each(function(){e(this).attr("name")&&e(this).attr("name","")})})}),t.find("p.add a").bind("click",function(){var t=e(i.find("li.hidden").get(0)).removeClass("hidden");t.find("*").each(function(){e(this).data("name")&&e(this).attr("name",e(this).data("name"))}),t.find("div.repeatable-content").effect("highlight",{},1e3),0==i.find("li.hidden").length&&e(this).parent().hide()})}}),e.fn[t.prototype.name]=function(){var i=arguments,a=i[0]?i[0]:null;return this.each(function(){var n=e(this);if(t.prototype[a]&&n.data(t.prototype.name)&&"initialize"!=a)n.data(t.prototype.name)[a].apply(n.data(t.prototype.name),Array.prototype.slice.call(i,1));else if(!a||e.isPlainObject(a)){var d=new t;t.prototype.initialize&&d.initialize.apply(d,e.merge([n],i)),n.data(t.prototype.name,d)}else e.error("Method "+a+" does not exist on jQuery."+t.name)})}}(jQuery);