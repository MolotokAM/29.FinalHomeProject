class CarePage { 
get label(){                      
    return $('//*[text()[contains(.,"stems")]]')}                      
        clabel(){                  
          this.label.getHTML(false);}  
        
 get exploregh(){                      
        return $('[href="/explore"]')}                      
            clickgh(){                  
                    this.exploregh.click()}
 get topic(){                      
        return $('[class*="js-selected-navigation-item d-inline"][href*="/top"]')}                      
            topickclick(){                  
                 this.topic.click()}
get bigtopic(){
    return $('[class="h0-mktg"]')}

get free(){
    return $('//*[contains(text(),"Join for free") and @href="/join?plan=free&source=pricing-card-free"]')}                       
     freeclick(){
         this.free.click()}
         
     
get carduser(){
        return $('[id="user_login"]')}                       
        type1(){                  
            this.carduser.addValue("githubtestss")}  
             

get cardemail(){
            return $('[id="user_email"]')}                       
            type2(){                  
                this.cardemail.addValue("githubtest123@protonmail.com")}  
                

get cardpass(){
         return $('[id="user_password"')}                       
         type3(){                  
              this.cardpass.addValue("zjjzshqin1")}  
                


     
    
     
     

                 }



    module.exports = new CarePage()
