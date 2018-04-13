let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
export class ColorUtils {
    /*16进制颜色转为RGB格式*/
    static hex2Rgb(hex) {
        let sColor = hex.toLowerCase();
        if (sColor && reg.test(sColor)) {
            if (sColor.length === 4) {
                let sColorNew = "#";
                for (let i = 1; i < 4; i += 1) {
                    sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
                }
                sColor = sColorNew;
            }
            //处理六位的颜色值
            let sColorChange = [];
            for (let i = 1; i < 7; i += 2) {
                sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
            }
            return "rgb(" + sColorChange.join(",") + ")";
        } else {
            return sColor;
        }
    }
}