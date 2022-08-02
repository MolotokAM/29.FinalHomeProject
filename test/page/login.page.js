class LoginPage {             
                             
    get login(){                      
            return $('[id="login_field"]')}
        type1(){                  
            this.login.addValue("githubtest123@protonmail.com")}     


    get pass(){                      
            return $('[id="password"]')}
        type2(){                  
            this.pass.addValue("zjjzshqin1")}     


    get sigh(){                      
            return $('[class="btn btn-primary btn-block"]')}
        cli(){                  
            this.sigh.click()}              
    get sighfail(){                      
            return $('[class="label-link"]')}
        forgot(){                  
            this.sighfail.click()}          
    
    get sighfail2(){                      
            return $('[class="btn btn-primary btn-block"]')}  
        cli2(){                  
            this.sighfail2.click()}
            

    get sighfail3(){                      
            return $('[id="email_field"]')}  
        type3(){                  
            this.sighfail3.addValue("gfdfg")}    
        type4(){                  
            this.sighfail3.addValue("githubtest123@protonmail.com")}             
    get show(){
            return $('[class="container-lg px-2"]')}   
    get show2(){
            return $('[class="mt-0"]')}



githubtestss
}
module.exports = new LoginPage()

