//使用es6模块化语法导入jquery
import $ from "jQuery"
import "./css/index.css"

//实现隔行变色效果
$(function(){
    $('li:odd').css('backgroundColor','red')
    $('li:even').css('backgroundColor','cyan')
})




