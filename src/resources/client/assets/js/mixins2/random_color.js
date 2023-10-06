function random_color() {


var arr=[
"hsla(0,80%,50%,1)",
// "hsla(530,80%,50%,1)",
"hsla(100,80%,50%,1)",
"hsla(100,0%,50%,1)",
"hsl(183,78%,55%)",
"hsla(250,80%,50%,1)",
"hsla(300,80%,50%,1)",
"hsla(350,0%,0%,1)",
"hsla(400,80%,50%,1)",
    "hsl(58,100%,45%)",
    // "hsl(68,100%,45%)",
    "hsl(262,50%,80%)",
    // "hsla(325,100%,77%,0.69)",
    "hsla(267,99%,45%,0.84)",

]
    return  arr[Math.floor(Math.random() * arr.length)];
// "hsla(" + ~~(360 * Math.random()) + "," +
//         "80%,"+
//         "50%,1)"
}



export default random_color

