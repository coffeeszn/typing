class CustomButton {
    constructor(imagePath, altText, x, y, width, height) {
        this.imagePath = imagePath;
        this.altText = altText;
        this.x = x;
        this.y = y;
        this.defaultWidth = width;
        this.defaultHeight = height;
        this.currentWidth = width;
        this.currentHeight = height;
        this.targetWidth = width;
        this.targetHeight = height;
        this.button = null;
    }

    createButton() {
        this.button = createImg(this.imagePath, this.altText);
        this.button.position(this.x, this.y);
        this.button.size(this.defaultWidth, this.defaultHeight);
        this.button.style('border', 'none');
        this.setEventListeners();
    }

    setEventListeners() {
        this.button.mouseOver(() => this.onMouseOver());
        this.button.mouseOut(() => this.onMouseOut());
    }

    onMouseOver() {
        this.targetWidth = this.defaultWidth * 1.5;
        this.targetHeight = this.defaultHeight * 1.5;
    }

    onMouseOut() {
        this.targetWidth = this.defaultWidth;
        this.targetHeight = this.defaultHeight;
    }

    updateSize() {
        this.currentWidth = lerp(this.currentWidth, this.targetWidth, 0.1);
        this.currentHeight = lerp(this.currentHeight, this.targetHeight, 0.1);

        const offsetX = (this.defaultWidth - this.currentWidth) / 2;
        const offsetY = (this.defaultHeight - this.currentHeight) / 2;
        this.button.position(this.x + offsetX, this.y + offsetY);

        this.button.size(this.currentWidth, this.currentHeight);
    }
}

class NextIconButton extends CustomButton {
    constructor(x, y) {
        super('nextButton.png', 'Next Button', x, y, 40, 40);
    }

    setEventListeners() {
        super.setEventListeners();
        this.button.mousePressed(() => this.onMousePressed());
    }

    hide() {
        this.button.hide();
    }
    
    show() {
        this.button.show();
    }

    onMousePressed() {
        resetTest();
    }
}