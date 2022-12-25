function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = decodeURI(top.location.search);
    r = r.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

function getIframeQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = decodeURI(document.location.search);
    r = r.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}


function getUUID() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
}

function downloadFromCanvas(ctx, name) {
    var link = document.createElement("a");
    var imgData = ctx.toDataURL({ format: 'jpg', quality: 1, width: ctx.width, height: ctx.height });
    var strDataURI = imgData.substr(22, imgData.length);
    var blob = dataURLtoBlob(imgData);
    var objurl = URL.createObjectURL(blob);
    link.download = name;
    link.href = objurl;
    link.click();
}

function dataURLtoBlob(dataurl) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
}

function downloadPdf(ctx, name) {
    var doc = new jsPDF('', "pt","a4");
    var imgData = ctx.toDataURL({ format: 'jpg', quality: 1, width: ctx.width, height: ctx.height });
    doc.addImage(imgData, 'JPEG', 40, 30, 500, 300);
    doc.save(name);
}

function downloadRemoteImage(name, url) {
    const aLink = document.createElement('a');
    aLink.download = name;
    aLink.href = url;
    aLink.click();
}

function downloadRemoteImageToPdf(img, name) {
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    downloadPdf(canvas, name);
}