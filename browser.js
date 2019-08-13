
function getUrls() {
    lst = []
    for (i=1; i <= 10; i++) { 
        el = document.querySelector("#code_search_results > div.code-list > div:nth-child(" + i + ") > div.d-flex > div > a:nth-child(2)");
        if (el) {
            lst.push(el.href);
        }
    }
    return lst;
}

delay = ms => new Promise(res => setTimeout(res, ms));

var final = [];
var urls;
go = async(times) => {
    for (x=0; x<times; x++) {
        // console.log("WAITING....")
        await delay(4000 + Math.random()*2000);
        urls = getUrls();
        // console.log(urls);
        urls.forEach(url => final.push(url));
        document.querySelector("#code_search_results > div.paginate-container.codesearch-pagination-container > div > a.next_page").click();
    }
}

var alldata = {};
var word;
runall = async(start,stop) => {
    for (v=start; v<stop; v++) {
        document.querySelector("#js-pjax-container > div > div.col-12.col-md-3.float-left.px-md-2 > nav.menu.border.d-none.d-md-block > a:nth-child(4)").href = searchurls[v];
        document.querySelector("#js-pjax-container > div > div.col-12.col-md-3.float-left.px-md-2 > nav.menu.border.d-none.d-md-block > a:nth-child(4)").click();
        word = searchurls[v].split("%3Afile%20")[1].split("%20filename")[0];
        try {
            final = [];
            await go(200);
        } catch (err) {
            // console.log(err);
            alldata[word] = [];
            final.forEach(url => alldata[word].push(url));
            // console.log(v);
        }
    }
}