function makeTheButtons() {
    nextIconButton = new NextIconButton(width / 2 - 20, height / 2 + 100);
    nextIconButton.createButton();
    nextIconButton.hide();

    const buttonWidth = 40;
    const buttonHeight = 40;

    const central = width / 2;

    buttonTen = new WordAmountButton('10', central - 125, 285, buttonWidth, buttonHeight, () => { maxWords = 9}, 1.3);
    buttonTen.createButton();
    buttonTwenty = new WordAmountButton('20', central - 50, 285, buttonWidth, buttonHeight, () => { maxWords = 19}, 1.3);
    buttonTwenty.createButton();
    buttonFifty = new WordAmountButton('50', central + 25, 285, buttonWidth, buttonHeight, () => { maxWords = 49}, 1.7);
    buttonFifty.createButton();
    buttonHundred = new WordAmountButton('100', central + 100, 285, buttonWidth, buttonHeight, () => { maxWords = 99}, 2.0);
    buttonHundred.createButton();
}

function wordButtonHide() {
    buttonTen.hide();
    buttonTwenty.hide();
    buttonFifty.hide();
    buttonHundred.hide();
}

function wordButtonShow() {
    buttonTen.show();
    buttonTwenty.show();
    buttonFifty.show();
    buttonHundred.show();
}