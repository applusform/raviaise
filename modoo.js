function hideElementById(id) {
    var element = document.getElementById(id);

    if (element)
        element.style.display = 'none';
}

function hideElementByTag(tag) {
    var tags = document.getElementsByTagName(tag);

    for (i = 0; i < tags.length; ++i) {
        var element = tags[i];
        element.style.display = 'none';
    }
}

function hideElementByClass(className) {
    var tags = document.getElementsByClassName(className);

    for (i = 0; i < tags.length; ++i) {
        var element = tags[i];
        element.style.display = 'none';
    }
}

function css(selector, property, value) {
    for (var i=0; i < document.styleSheets.length; ++i) {
        try { 
        	document.styleSheets[i].insertRule(selector+ ' {'+property+':'+value+'}', document.styleSheets[i].cssRules.length);
        } catch(err) {
        }
    }
}

function css2(selector, property_value) {
    for (var i=0; i < document.styleSheets.length; ++i) {
        try { 
            document.styleSheets[i].insertRule(selector+ ' {'+property_value+'}', document.styleSheets[i].cssRules.length);
        } catch(err) {
        }
    }
}

function cssAddFont(name, url) {

	var rule = "@font-face{font-family: '" + name + "'; src: url('" + url+ "')}";
    for (var i=0; i < document.styleSheets.length; ++i) {
	    try { 
			document.styleSheets[i].insertRule(rule, 0);
		} catch(err) {
		}
	}
}

function getFileName(path)
{
	var i = path.lastIndexOf('/');
	if (i >= 0)
		path = path.substring(i + 1);
	
	i = path.lastIndexOf('.');

	if (i >= 0)
		path = path.substring(0, i);
	
	return path;
}

function addMomlFont(url) {
    var fontUrl = agate.runScript("file.pathToUrl('" + url + "')");
    var fontName = getFileName(url); // 전체 파일 path 중에 파일명만 글꼴 이름으로 사용하도록 한다.

    cssAddFont(fontName, fontUrl);
}


function initMomlMenu() {
    // 메뉴 이동 함수 등록

    window.navigateMenu = function (index) {
        var tags = document.getElementsByClassName("s_m");
        if (tags.length > 0) {
            var lis = tags[0].getElementsByTagName("li");
            var a = lis[index].getElementsByTagName("a")[0];
            var evt = document.createEvent("MouseEvents");
            evt.initMouseEvent("click", true, true, window, 1, 0, 0, 0, 0,
            false, false, false, false, 0, null);
            a.dispatchEvent(evt);
        }
    };

    var tags = document.getElementsByClassName("s_m");
    if (tags.length > 0) {
        var lis = tags[0].getElementsByTagName("li");
        var menuCount = Math.min(lis.length, 7); // 최대 7개까지만 허용
        agate.runScript('userVariable.menuCount = ' + menuCount);

        if (lis.length > 0) {
            var i;
            for (i = 0; i < lis.length && i < 7; ++i) {
                var a = lis[i].getElementsByTagName("a")[0];
                var text = a.innerText.trim();
                agate.runScript("menuText" + (7 - menuCount + i) + ".text = '" + text + "'");
            }
        }
    }
}


function _initModoo() {
	
    // 좌측 상단 메뉴 버튼 감추기
    hideElementByClass("fc_btn aside");
    
    

    // 메뉴 초기화
    initMomlMenu();

    // 글꼴 변경
    addMomlFont("/res/UnGraphic.ttf");

    css("body", "font-family", "UnGraphic");
    css("p", "font-family", "UnGraphic");
    css(".txt_box .txt_component p", "font-family", "UnGraphic");


	// 타이틀 배경
    css2(".fc_header", "  background-image: url('http://yooic.com/test/raviaise/res/titleBg.png'); background-size: 100% 100%;");

    // 색생 변경
    css(".btn_set1 [class*=\"btn_theme\"] li", "background-color", "#4f7ce6");
    //css(".btn_set1 .main.adr_area", "background-color", "#D2691E");
    css(".btn_set1 .main.adr_area", "background-color", "#1444c0");

    // 버튼 배경을 이미지로 설정
    css(".btn_theme li .btn", "background", "url('http://yooic.com/test/modoo/res/button-wide4.png')");
    css(".btn_theme li .btn", "background-size", "100% 100%");

    // 버튼 크기 줄이기
    css(".btn_theme li .btn", "height", "60px");
    css(".btn_theme li [class*=btn_] .ic", "top", "3px");
    css(".btn_theme li .in", "padding-top", "40px");
    
	css2("._image_view_btn[data-img-src*=mosa4CmYUI]", "border:double 3px #eee; border-radius: 15px;  box-shadow: 10px 10px 10px #888888;  margin: 5px 20px 20px 5px;");
	css2("._image_view_btn[data-img-src*=mosaQirtoj]",  "border:double 3px #eee; border-radius: 15px;  box-shadow: 10px 10px 10px #888888;  margin: 5px 20px 20px 5px;");
	css2("._image_view_btn[data-img-src*=mosaFrVbeI]", "border:double 3px #eee; border-radius: 15px;  box-shadow: 10px 10px 10px #888888;  margin: 5px 20px 20px 5px;");
	css2("._image_view_btn[data-img-src*=mosaiS1xy2]", "border:double 3px #eee; border-radius: 15px;  box-shadow: 10px 10px 10px #888888;  margin: 5px 20px 20px 5px;");
	css2("._image_view_btn[data-img-src*=mosaOIoxXk]", "border:double 3px #eee; border-radius: 15px;  box-shadow: 10px 10px 10px #888888;  margin: 5px 20px 20px 5px;");
	css2("._image_view_btn[data-img-src*=mosaT9jgKd]", "border:double 3px #eee; border-radius: 15px;  box-shadow: 10px 10px 10px #888888;  margin: 5px 20px 20px 5px;");
	
}

try {
    window.setTimeout("_initModoo();", 1);
} catch (e) {
    alert(e);
}

