//const n = 100;
const DI = 70;
//size40
const OB = 86;
const VB = 18;
const OT = 60;


var height = 1000,
    width = 1000,
    margin = 100;

var svg = d3.select('body').append('svg')
    .attr('class', 'axis')
    .attr("width", width)
    .attr("height", height);


var xAxisLenght = width - 2*margin;
var yAxisLength = height - 2*margin;

var scaleX = d3.scale.linear()
    .domain([0,100])
    .range([0, xAxisLenght]);

var scaleY = d3.scale.linear()
    .domain([0,100])
    .range([0, yAxisLength]);

var xAxis = d3.svg.axis()
    .scale(scaleX)
    .orient("top");
var yAxis = d3.svg.axis()
    .scale(scaleY)
    .orient("left");

svg.append("g")
    .attr("class","x-axis")
    .attr("transform",
        "translate(100,100)")
    .call(xAxis);
svg.append("g")
    .attr("class","y-axis")
    .attr("transform",
        "translate(" + margin + "," + margin +")")
    .call(yAxis);

d3.selectAll("g.x-axis g.tick")
    .append("line")
    .classed("grid-line", true)
    .attr("x1",0)
    .attr("y1",0)
    .attr("x2",0)
    .attr("y2",yAxisLength);
d3.selectAll("g.y-axis g.tick")
    .append("line")
    .classed("grid-line", true)
    .attr("x1", 0)
    .attr("y1", 0)
    .attr("x2", xAxisLenght)
    .attr("y2", 0);



// координаты сетки
let A = {x: 0, y: 0};
let A1 = {x: 0.5*OB +1, y: 0};
let H = {x: 0, y: DI};
let H1 = {x: 0.5*OB +1, y: DI};
let A2 = {x: (0.5*OB +1)*0.5, y: 0};
let H2 = {x: (0.5*OB +1)*0.5, y: DI};
let B = {x: 0, y: VB};
let B1 = {x: 0.5*OB +1, y: VB};
let B2 = {x: (0.5*OB +1)*0.5, y: VB};

//C, C1, C2
full_additions = (OB - OT)/2;
side_additions = full_additions/2;

let C = {x: (0.5*OB +1)*0.5, y: -1};
let C1 = {x: (0.5*OB +1)*0.5-side_additions/2, y: -1};
let C2 = {x: (0.5*OB +1)*0.5+side_additions/2, y: -1};
// draw lines A2C, CC1, CC2

// Bezie draw lines B2C1, B2C2

//

rawData = [
    //{x:0, y:0}, {x:86, y:0}, {x:0, y:90}, {x:86, y:90},
   A,A2, A1,B1, H1, H2, H, B, A
],
    data =[];

//
for (i = 0; i<rawData.length;i++)
    data.push({x:scaleX(rawData[i].x)+margin, y:scaleY(rawData[i].y)+margin});

///
var line = d3.svg.line()
    .x(function(d){return d.x;})
    .y(function(d){return d.y;});

var g = svg.append("g");
g.append("path")
    .attr("d", line(data))
    .style("stroke", "steelblue")
    .style("stroke-width", 2);

// добавляем отметки к точкам
svg.selectAll(".dot")
    .data(rawData)
    .enter().append("circle")
    .attr("class", "dot")
    .attr("r", 5.5)
    .attr("cx", function(d) { return scaleX(d.x)+margin; })
    .attr("cy", function(d) { return scaleY(d.y)+margin; });


BB2B1 =[B,B2,B1]

function drawLines(coor){
    rD = coor,
        d1 = [];

    for (n = 0; n <rD.length; n++)
        d1.push({x:scaleX(rD[n].x)+margin, y:scaleY(rD[n].y)+margin});


///
    var line = d3.svg.line()
        .x(function(d){return d.x;})
        .y(function(d){return d.y;});

    var g = svg.append("g");
    g.append("path")
        .attr("d", line(d1))
        .style("stroke", "steelblue")
        .style("stroke-width", 2);

// добавляем отметки к точкам
    svg.selectAll(".dot")
        .data(rD)
        .enter().append("circle")
        .attr("class", "dot")
        .attr("r", 5.5)
        .attr("cx", function(d) { return scaleX(d.x)+margin; })
        .attr("cy", function(d) { return scaleY(d.y)+margin; });
}
drawLines(BB2B1)
A2B2H2 = [A2,B2,H2]
drawLines((A2B2H2))

A2C = [A2,C]
drawLines(A2C)
CC1 = [C,C1]
CC2 = [C,C2]
drawLines(CC1)
drawLines(CC2)




function drawCurve(coor){
    rD = coor,
        d1 = [];

    for (n = 0; n <rD.length; n++)
        d1.push({x:scaleX(rD[n].x)+margin, y:scaleY(rD[n].y)+margin});


///
    var line = d3.svg.line()
        .x(function(d){return d.x;})
        .y(function(d){return d.y;})
        .curve(d3.curveBasis);

    var g = svg.append("g");
    g.append("path")
        .attr("d", line(d1))
        .style("stroke", "steelblue")
        .style("stroke-width", 2);


}
/*
AoC1 = [A,B,C1];
drawCurve(AoC1);

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(50,20);
ctx.bezierCurveTo(230, 30, 150, 60, 50, 100);
ctx.stroke();

ctx.fillStyle = 'blue';
// начальная точка
ctx.fillRect(50, 20, 10, 10);
// конечная точка
ctx.fillRect(50, 100, 10, 10);

ctx.fillStyle = 'red';
// первая контрольная точка
ctx.fillRect(230, 30, 10, 10);
// вторая контрольная точка
ctx.fillRect(150, 70, 10, 10);


var path = d3.path();

path.moveTo(25,25);
path.lineTo(75,25);
path.lineTo(75,75);
path.closePath();
d3.select("#demoPath1")
    .append("path")
    .attr("d", path)
    .attr("stroke", "black")
    .attr("fill", "red");


*/

/*



height = DI+10
width = OB+11
A = (0;10)
AA1 = 0.5*OB +1 //ширина полотна сверху
HH1 = AA1 // ширина полотна снизу
AH = DI //длина изделия
A1H1 = DI //длина изделия
// должен получиться квадрат
A2 = 0.5*AA1 //центральная вертикальная линия
//провести перпендикулярную линию от А2 до линии НН1. На линии H поставить точку H2

AB = VB //высота бедер
// провести горизонтальную линию. Поставить точки B1, B2

A2C = 1 //провести перпендикуляр от точки А2 до С. значение может варьироваться от 0.5 до 1.5 см


//рассчет вытачек
full_additions = (OB - OT)/2
side_additions = full_additions/2
CC1 = A2C+side_additions/2
CC2 = A2C-side_additions/2
//провести плавные линии C1B2 и C2B2
//провести плавные линии AC1 и A1C2

//добавить подписи задняя и передняя половина юбки, боковой шов
backward_addition = side_additions*0.6
forward_addition = side_additions-backward_additio
*/