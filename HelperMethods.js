
export default function draw(ctx, element){
    switch (element.kind) {
        case "rectangle":
            ctx.fillRect(element.xPosition, element.yPosition, element.width, element.height);
            break;
        case "circle":
            ctx.beginPath();
            ctx.arc(element.xPosition, element.yPosition, element.radius, 0, 7);
            ctx.fill();
            ctx.closePath();
            break;
        }
        
    }    