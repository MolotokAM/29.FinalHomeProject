class RegPage {             
    get login(){                      
        return $('[class="form-control input py-1"][name*="login"]')}                      
        addlogin(){                  
            this.login.addValue("githubtestss123")}     

    get email(){                      
        return $('[class="form-control input py-1"][name*="email"]')}                      
        addemail(){                  
                 this.email.addValue("githubtest1234@protonmail.com ")}   
    get pass(){                      
        return $('[id="user_password"]')}                      
        addpass(){                  
                this.pass.addValue("zjjzshqin1")}                                

                get nameInput(){                      
                    return $('[id="contact_request_name"]')}
                setname (value){                  
                    this.nameInput.addValue(value)}
                    
                get companyInput(){                      
                    return $('[id="contact_request_organization_name"]')}
                setcompany (value){                  
                    this.companyInput.addValue(value)}    
            
                get passInput(){                      
                    return $('[id="contact_request_email"]')}
                setpass (value){                  
                    this.passInput.addValue(value)}               

  get radio(){
      return $('[class="js-request-type js-request-type-aws"]')
  }                  
  get yes(){
    return $('[id="questions_yes"]')}  

  get agreed(){
        return $('[id="contact_request_agreed_to_terms"]')}  

  get list(){
            return $('[id="questions-list"]')}  
        

}
module.exports = new RegPage()



