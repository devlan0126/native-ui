/*
 * @Date: 2024-02-20 15:47:10
 * @LastEditors: devlan0126 wyang0126@163.com
 * @LastEditTime: 2024-02-22 18:05:54
 * @FilePath: \native-ui\js\index.js
 * @Description: 文档描述
 */

function testRequest() {
    $.get("/api/demo", { name: "John", time: "2pm" },
        function (data) {
            try {
                // document.querySelector('#tabs-1').innerHTML = data.content
                document.getElementById('tabs-1').innerHTML = data.content
            } catch (error) {
                alert(error.message)
            }
        });
}

//显示文件方法，就是将文件展示到div中
function pdfShow(url) {
    $("#pdfContent").append('<iframe style="height:100%;width:100%;" src="' + url + '"></iframe>');
}



$(function () {
    var purl = '南京民生价格手册2022.pdf';//要展示的文件路径
    // 下面代码都是处理IE浏览器的情况 
    if (window.ActiveXObject || "ActiveXObject" in window) {
        //判断是否为IE浏览器，"ActiveXObject" in window判断是否为IE11
        //判断是否安装了adobe Reader
        for (x = 2; x < 10; x++) {
            try {
                oAcro = eval("new ActiveXObject('PDF.PdfCtrl." + x + "');");
                if (oAcro) {
                    flag = true;
                }
            } catch (e) {
                flag = false;
            }
        }
        try {
            oAcro4 = new ActiveXObject('PDF.PdfCtrl.1');
            if (oAcro4) {
                flag = true;
            }
        } catch (e) {
            flag = false;
        }

        try {
            oAcro7 = new ActiveXObject('AcroPDF.PDF.1');
            if (oAcro7) {
                flag = true;
            }
        } catch (e) {
            flag = false;
        }

        if (flag) {//支持
            pdfShow(purl);//调用显示的方法

        } else {//不支持
            $("#pdfContent").append("对不起,您还没有安装PDF阅读器软件呢,为了方便预览PDF文档,请选择安装！");
            alert("对不起,您还没有安装PDF阅读器软件呢,为了方便预览PDF文档,请选择安装！");
            location = "http://ardownload.adobe.com/pub/adobe/reader/win/9.x/9.3/chs/AdbeRdr930_zh_CN.exe";
            // location = "https://ardownload2.adobe.com/pub/adobe/reader/win/11.x/SHA256/AdbeRdr11000_zh_CN.exe";
        }

    } else {
        console.log('非IE浏览器...............');
        pdfShow(purl);//调用显示的方法
    }
});