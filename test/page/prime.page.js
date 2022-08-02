class PrimePage {             
    get seatch(){                      
        return $('[class*="form-control input-sm header-search-input"]')}                      
        addsearch(){                  
            this.seatch.addValue("webdriverio")}                       
    get type(){                      
        return $('//a [text()[contains(.,"TypeScript")]]')}                      
            clicktype(){                  
                    this.type.click()}      
    get type2(){                      
         return $('[class="v-align-middle"][data-hydro-click*=":1,"]')}                      
                firstdata(){                  
                             this.type2.click()}   
    get enterprice(){                      
               return $('[class="d-none d-sm-inline"]')}                      
                clickprice(){                  
                      this.enterprice.click()}                 
    get free(){                      
               return $('[class="btn-mktg btn-large-mktg mb-2"]')}                      
                clickfree(){                  
                      this.free.click()}
     get cloud(){                      
               return $('[class="currency-container col-12 signup-plan-column js-details-container mr-sm-2 "]')}                      
                clickcloud(){                  
                      this.cloud.click()}   
     get server(){                      
            return $('[class="currency-container col-12 signup-plan-column js-details-container"]')}                      
                clickserver(){                  
                    this.server.click()}  
                    
   get careers(){                      
            return $('[href="/about/careers"]')}                      
                clickcareers(){                  
                    this.careers.click()}  
   get position(){                      
            return $('[class="f3-light d-inline-block mr-5 js-smoothscroll-anchor"]')}                      
                clickposition(){                  
                  this.position.click()}                                              
                                                

                      
    get why(){                      
              return $('//summary [text()[contains(.,"Why")]]')} 
    get explore(){                      
               return $('//summary [text()[contains(.,"Ex")]]')} 
    get pricing(){                      
               return $('//summary [text()[contains(.,"Pr")]]')} 

    get pricingplans(){                      
                return $('[class*="pb-2"]')}                      
                clickplans(){                  
                    this.pricingplans.click()}   
     
}
module.exports = new PrimePage()

