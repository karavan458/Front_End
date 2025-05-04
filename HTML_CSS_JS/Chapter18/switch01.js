const firePower = 1;

switch(firePower) {
    case 1: 
        console.log("레어");
    case 2:
        console.log("미디움");
    case 3:
        console.log("웰던");
    default:
        console.log("오류");
}

console.log("---------------------");

switch(firePower) {
    case 1: 
        console.log("레어");
        break;
    case 2:
        console.log("미디움");
        break;
    case 3:
        console.log("웰던");
        break;
    default:
        console.log("오류");
}