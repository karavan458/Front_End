const firePower = 1;

switch(firePower) {
    case 1 :
        console.log("레어");
    case 2 :
        console.log("미디움");
    case 3 :
        console.log("웰던");
    default :
        console.log("오류");
}

const yootThrow = "도";

switch(yootThrow) {
    case "도" :
        console.log("1칸 전진");
        break;
    case "개" :
        console.log("2칸 전진");
        break;
    case "걸" :
        console.log("3칸 전진");
        break;
    case "윷" :
        console.log("4칸 전진");
        break;
    case "모" :
        console.log("5칸 전진");
        break;
    default :
        console.log("낙");
}

const dayOfWeek = "월";

switch(dayOfWeek) {
    case "월":
    case "화":
    case "수":
    case "목":
        console.log("6시 정시 퇴근");
        break;
    case "금":
        console.log("12시 퇴근");
        break;
    case "토":
    case "일":
        console.log("휴무");
        break;
    default:
        console.log("잘못된 요일입니다.");
}