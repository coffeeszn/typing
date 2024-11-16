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


class WordAmountButton extends CustomButton {
    constructor (label, x, y, width, height, onPressAction, targetMultiplier) {
        super(null, null, x, y, width, height);
        this.label = label;
        this.onPressAction = onPressAction;

        this.defaultFontSize = 20;
        this.targetMultiplier = targetMultiplier;
        this.currentFontSize = this.defaultFontSize;
        this.targetFontSize = this.defaultFontSize;
        this.textFont = myFont;

        this.defaultColor = color(70, 70, 70);
        this.currentColor = this.defaultColor;
        this.targetColor = this.defaultColor;
        this.wordButtonAlpha = 255;
    }

    createButton() {
        this.button = createButton(this.label);
        this.button.position(this.x, this.y);
        this.button.size(this.width, this.height);
        
        this.button.attribute('tabindex', '-1');

        this.button.style('color', 'this.currentColor.toString()');
        this.button.style('background-color', 'transparent');
        this.button.style('border', 'none');
        this.button.style('padding', '0'); 
        this.button.style('display', 'flex');
        this.button.style('align-items', 'center');
        this.button.style('justify-content', 'center');
        this.button.style('font-family', '"M PLUS Rounded 1c", sans-serif');
        this.button.style('outline', 'none');
        this.button.style('box-shadow', 'none');

        this.setEventListeners();
    }

    setEventListeners() {
        this.button.mousePressed(() => {
            this.onMousePressed();
        });
        this.button.mouseOver(() => this.onMouseOver());
        this.button.mouseOut(() => this.onMouseOut());
    }

    hide() {
        this.button.hide();
    }
    
    show() {
        this.button.show();
    }

    onMouseOver() {
        this.targetFontSize = this.defaultFontSize * this.targetMultiplier;
        this.targetColor = color(220, 220, 220);
    }

    onMouseOut() {
        this.targetFontSize = this.defaultFontSize;
        this.targetColor = this.defaultColor;
    }

    updateSize() {
        if (this.currentFontSize > this.targetFontSize) {
            this.currentFontSize = lerp(this.currentFontSize, this.targetFontSize, 0.08);
        } else {
            this.currentFontSize = lerp(this.currentFontSize, this.targetFontSize, 0.3);
        }

        textSize(this.defaultFontSize);
        const defaultTextWidth = textWidth(this.label);
        textSize(this.currentFontSize);
        const currentTextWidth = textWidth(this.label);

        const offsetX = (defaultTextWidth - currentTextWidth) / 2;
        const offsetY = (this.defaultFontSize - this.currentFontSize) / 1.25;
        this.button.position(this.x + offsetX, this.y + offsetY);
        this.button.style('font-size', `${this.currentFontSize}px`);

        this.currentColor = lerpColor(this.currentColor, this.targetColor, 0.2);
        this.button.style('color', this.currentColor.toString());
    }

    onMousePressed() {
        this.onPressAction();
        resetTest();
    }
}