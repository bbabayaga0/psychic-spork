function changeColorBack(){
    const colorBack = document.getElementById('changeScreen');
    const colorBackInput = document.getElementById('changeScreen');

    document.body.style.backgroundColor = colorBack.value;
    colorBackInput.value = colorBack.value;
}

function changeColorText(){
    const colorText = document.getElementById('changeText');
    const colorTextInput = document.getElementById('changeText');


    document.body.style.color = colorText.value;
    colorTextInput.value = colorText.value;
}
