const dayOfWeek = "월";

switch(dayOfWeek) {
    case "월":
    case "화":
    case "수":
    case "목":
        console.log("6시 퇴근");
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