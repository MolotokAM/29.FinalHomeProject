class TestPage {             
                             
    get nameInput(){                      
        return $('auto-check [class="form-control form-control-lg input-block"]')}
    setName (value){                  
        this.nameInput.addValue(value)}
        
    get emailInput(){                      
        return $('[class="form-control form-control-lg input-block js-email-notice-trigger"]')}
    setemail (value){                  
        this.emailInput.addValue(value)}    

    get passInput(){                      
        return $('[type="password"][class="form-control form-control-lg input-block"]')}
    setpass (value){                  
        this.passInput.addValue(value)}

    get sighbutton(){                      
        return $('[class*="btn-mktg btn-primary-mktg btn-large-mktg f4"]')}
    sigh () {                  
        this.sighbutton.click()}



        get name2Input(){                      
            return $('[id="user[login]-footer"]')}
        setName2 (value){                  
            this.name2Input.addValue(value)}
            
        get email2Input(){                      
            return $('[id="user[email]-footer"]')}
        setemail2 (value){                  
            this.email2Input.addValue(value)}    
    
        get pass2Input(){                      
            return $('[id="user[password]-footer"]')}
        setpass2 (value){                  
            this.pass2Input.addValue(value)}
    
        get sigh2button(){                      
            return $('[class="btn-mktg btn-primary-mktg btn-block mt-n1"]')}
        sigh2 () {                  
            this.sigh2button.click()}

        get sighin(){
            return $('[class="HeaderMenu-link no-underline mr-3"]')}
        sigh3(){
            this.sighin.click()}    

        get pro(){
            return $('[class="btn shelf-cta mx-2 mb-3"]')}
        start(){
            this.pro.click()}    
        get more(){
                return $('[class="Header-link"][aria-label*="View"]')}
                menu(){
                    this.more.click()}
        get sightout(){
                return $('[class="dropdown-item dropdown-signout"]')}
                sighouttest(){
                    this.sightout.click()}

            

}
module.exports = new TestPage()
