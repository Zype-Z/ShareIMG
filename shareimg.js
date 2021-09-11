import ShareImage from 'https://unpkg.com/shareimage@latest/src/index.mjs';

class ShareIMG extends HTMLElement {
    constructor() {
        super();
        const img = document.createElement('img');
        img.src = this.url;
        img.style = this.style;
        img.classList = this.classList;
        this.replaceWith(img);
    }

    get url() {
        const attr = {}
        this.getAttributeNames().map((item, i) => {
            return attr[item] = this.getAttribute(item)
        })
        const _a = attr;
        const url = ShareImage({
            title: _a.title,
            cloudName: _a.cloudname,
            imagePublicID: _a.imagepublicid,
            tagline: _a.tagline,
            cloudinaryUrlBase: _a.cloudinaryurlbase,
            titleFont: _a.titlefont,
            titleExtraConfig: _a.titleextraconfig,
            taglineFont: _a.taglinefont,
            imageWidth: _a.imagewidth,
            imageHeight: _a.imageheight,
            textAreaWidth: _a.textareawidth,
            textLeftOffset: _a.textleftoffset,
            titleGravity: _a.titlegravity,
            taglineGavity: _a.taglinegavity,
            titleLeftOffset: _a.titleleftoffset,
            taglineLeftOffset: _a.taglineleftoffset,
            titleBottomOffset: _a.titlebottomoffset,
            taglineTopOffset: _a.taglinebottomoffset,
            textColor: _a.textcolor,
            titleColor: _a.titlecolor,
            taglineColor: _a.taglinecolor,
            titleFontSize: _a.titlefontSize,
            taglineFontSize: _a.taglinefontSize
        })
        return url;
    }
}

window.customElements.define('share-img', ShareIMG);