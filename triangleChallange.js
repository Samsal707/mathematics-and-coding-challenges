//a triangle whose coordinates (x1, y1), (x2, y2), and (x3, y3) are integers between 0 and 3000 inclusive.
//its perimeter is an integer between 1 and 1 000 inclusive.
//and the area is an integers between 1 and 1, 000, 000 inclusive.

function triangleChallange(x1, y1, x2, y2, x3, y3) {
    var a = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    var b = Math.sqrt(Math.pow(x2 - x3, 2) + Math.pow(y2 - y3, 2));
    var c = Math.sqrt(Math.pow(x3 - x1, 2) + Math.pow(y3 - y1, 2));
    var perimeter = a + b + c;
    var s = perimeter / 2;
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return [perimeter, area];
}