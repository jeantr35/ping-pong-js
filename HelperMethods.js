
export default function draw(ctx, element){
    if (element !== null && element.hasOwnProperty("kind")) {
        switch (element.kind) {
            case "square":
                ctx.fillRect(element.xPosition, element.yPosition, element.width, element.height);
                break;

            case "rectangle":
                ctx.fillRect(element.xPosition, element.yPosition, element.width, element.height);
                break;

            default:
                break;
        }
    }    
}