function makeTheButtons() {
    nextIconButton = new NextIconButton(width / 2 - 20, height / 2 + 100);
    nextIconButton.createButton();
    nextIconButton.hide();

    const buttonWidth = 40;
    const buttonHeight = 40;

    const central = width / 2;

    buttonFive = new WordAmountButton('5', central - 125, 285, buttonWidth, buttonHeight, () => { maxWords = 4}, 1.3);
    buttonFive.createButton();
    buttonTen = new WordAmountButton('10', central - 50, 285, buttonWidth, buttonHeight, () => { maxWords = 9}, 1.3);
    buttonTen.createButton();
    buttonFifteen = new WordAmountButton('15', central + 25, 285, buttonWidth, buttonHeight, () => { maxWords = 14}, 1.7);
    buttonFifteen.createButton();
    buttonTwentyFive = new WordAmountButton('25', central + 100, 285, buttonWidth, buttonHeight, () => { maxWords = 99}, 2.0);
    buttonTwentyFive.createButton();
}

function wordButtonHide() {
    buttonFive.hide();
    buttonTen.hide();
    buttonFifteen.hide();
    buttonTwentyFive.hide();
}

function wordButtonShow() {
    buttonFive.show();
    buttonTen.show();
    buttonFifteen.show();
    buttonTwentyFive.show();
}