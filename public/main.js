getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/1.css"); // readyState = 1
    request.send(); // readyState = 2
    request.onreadystatechange = () => {
        // 下载完成，但不知道是成功 2xx 还是失败 4xx 5xx
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                // 创建 style 标签
                const style = document.createElement("style");
                // 填写 style 内容
                style.innerHTML = request.response;
                // 插到head里面
                document.head.appendChild(style);
            } else {
                alert("加载 CSS 失败");
            }
        }
    };
};

getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/2.js");
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                // 创建 script 标签
                const script = document.createElement("script");
                // 填写 script 内容
                script.innerHTML = request.response;
                // 插到body里
                document.body.appendChild(script);
            } else {
                alert("加载 JS 失败");
            }
        }
    };
    request.send();
};

getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/3.html");
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const div = document.createElement("div");
                const h1 = document.querySelector('h1')
                div.innerHTML = request.response;

                document.body.insertBefore(div, h1);
            } else {
                alert("加载 HTML 失败");
            }
        }
    };
    request.send();
};

getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/4.xml");
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML;
            const text = dom.getElementsByTagName("warning")[0].textContent;
            console.log(text.trim());
        }
    };
    request.send();
};

getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/5.json");
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(typeof request.response); //true是字符串
            console.log(request.response);
            //将字符串true解析为布尔值true
            const bool = JSON.parse(request.response);
            console.log(typeof bool);//true是布尔值
            console.log(bool);
        }
    };
    request.send();
};

let n = 1;
getPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", `/page${n + 1}`);
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response);
            array.forEach(item => {
                const li = document.createElement("li");
                li.textContent = item.id;
                xxx.appendChild(li);
            });
            n += 1
        }
    };
    request.send();
};

