function generator(){
    let password = "";
    const poosChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*();:?-_.";

    for(let i = 0; i < 16; i++){
        const randomIndex = Math.floor(Math.random() * poosChar.length);
        password += poosChar.substring(randomIndex, randomIndex + 1);

    }
    return password;
}
const generatorPass = generator();
document.writeln(generatorPass);
