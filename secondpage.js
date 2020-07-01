class secondpage {
    constructor(){
        this.schoolwork=createButton("School work")
        this.officework=createButton("Office work")
        this.others=createButton("Others")
        
    }
    displaysp2(){
        this.others.position(175,300)
        this.officework.position(165,200)
        this.schoolwork.position(165,100)

        this.schoolwork.mousePressed(()=>{
             this.officework.hide();
             this.others.hide();
             this.schoolwork.hide(); 
             var tp = new thirdpage(); tp.displaytp();
  
         })
        
    }


    
    
    
}