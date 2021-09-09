
function draw(ctx, element){
    switch (element.kind) {
        case "rectangle":
            ctx.fillRect(element.xPosition, element.yPosition, element.width, element.height);
            ctx.fillStyle = "blue";
            break;

        case "circle":
            ctx.beginPath();
            ctx.fillStyle = "purple"
            ctx.arc(element.xPosition, element.yPosition, element.radius, 0, 7);
            ctx.fill();
            ctx.closePath();
            ctx.fillStyle = "red"
            break;
        }
        
    }

function hit(a, b) {
    //Revisa si a colisiona con b
    var hit = false;
    //Colisiones hirizontales
    if(b.xPosition + b.width >= a.xPosition && b.xPosition < a.xPosition + a.width){

    //Colisiona verticales
    if (b.yPosition + b.height >= a.yPosition && b.yPosition < a.yPosition + a.height) 
        hit = true;
    }

    //Colisión de a con b
    if(b.xPosition <= a.xPosition && b.xPosition + b.width >= a.xPosition + a.width){
    
    if (b.yPosition <= a.yPosition && b.yPosition + b.height >= a.yPosition + a.height) 
        hit = true;
    }

    //Colision b con a
    if(a.xPosition <= b.xPosition && a.xPosition + a.width >= b.xPosition + b.width){
    //Colisiona verticales
    if (a.yPosition <= b.yPosition && a.yPosition + a.height >= b.yPosition + b.height) 
        hit = true;
    }
    return hit;
}

export { draw, hit };