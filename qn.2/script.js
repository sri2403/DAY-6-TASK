class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    getRadius(){
        return this.radius;
    }
    setRadius(newRadius){
        this.radius=newRadius;
        return this.radius;
    }
    getColor(){
        return this.color;
    }
    setColor(newColor){
        this.color=newColor;
        return this.color;
    }
    toString(){
        return `Circle[radius=${this.radius},color=${this.color}]`;
    }
    getArea(){
        return Math.PI*Math.pow(this.radius,2);
    }
    getCircumference(){
        return 2*Math.PI*this.radius;
    }
}
let circle=new Circle(1.0,"red");
console.log(circle.toString());
console.log(circle.getArea());
console.log(circle.getCircumference());
