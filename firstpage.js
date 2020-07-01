class firstpage{
    constructor(){
     this.input=createInput("Name")
     this.getstarted=createButton(" Get Started")
     this.title=createElement("h1")
    }
display (){
    this.title.html("Study organiser")
    this.title.position(100,1)
    this.getstarted.position(150,300)
    this.input.position(125,150)

    this.getstarted.mousePressed(()=>{
    this.input.hide();
    this.getstarted.hide();
    var db1 = new db();
    db1.getUserName();
    db1.Name = this.input.value();
    db1.update();
    var sp = new secondpage();
    sp.displaysp2();

    


    })
}
}
