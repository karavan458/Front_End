const a = 1;
const b = 2;

if(a < b) {
    console.log("a 는 b보다 작다.");
}
else if(a > b) {
    console.log("a 는 b보다 크다.");
}
else {
    console.log("a와 b는 같다.");
}

const yootThrow = "도";

if(yootThrow === "도") {
    console.log("1칸 전진");
}
else if(yootThrow === "개") {
    console.log("2칸 전진");
}
else if(yootThrow === "걸") {
    console.log("3칸 전진");
}
else if(yootThrow === "윷") {
    console.log("4칸 전진");
}
else  {
    console.log("5칸 전진");
}