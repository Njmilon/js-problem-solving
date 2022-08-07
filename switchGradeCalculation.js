
const mark = 76;

switch (true) {
    case (mark >= 80 && mark <= 100):
        console.log('you got A', mark);
        break;
    case (mark >= 70 && mark <= 79):
        console.log('you got A-', mark);
        break;
    case (mark >= 60 && mark <= 69):
        console.log('you got B', mark);
        break;
    case (mark >= 50 && mark <= 59):
        console.log('you got C', mark);
        break;
    case (mark >= 40 && mark <= 49):
        console.log('you got A', mark);
        break;

    default:
        console.log('opps! you got F', mark);
        break;
}