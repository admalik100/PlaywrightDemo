const {Given, When, Then, setDefaultTimeout} = require ('cucumber')
const {LoginPage} = require('/Users/ahmadamir/Playwright/Page/Login.page.js')

const loginpage = new LoginPage();
var flag =0;

Given('User launches page', async()=>{
    await loginpage.navigate();
    
 });

 Given('User navigates to login', async()=>{
    await loginpage.loginClick();
 })

When('User logged in using the invalid emailid {string}',async(username) =>{
    if (username == ""){
        await loginpage.LoginWithoutEmail();
        flag = 1;
    }
    else{
        await loginpage.loginEmailOnly(username);
        flag = 0;
    }
    
});

Then('Error Message should be displayed', async()=>{
    if (flag == 1){
        await loginpage.loginFailedNoEmail();
    }
    else{
        await loginpage.loginFailed();
    }
    
});

Given('User launches website', async()=>{
    await loginpage.navigate();
});
Given('Clicks login', async()=>{
    await loginpage.loginClick();
});
Given('User enters username {string}', async(username)=>{
    await loginpage.loginEmailOnly(username);
});
Given('User enters password {string}', async(password)=>{
    await loginpage.Loginpassword(password);
});
When('User searches for Jobs {string}', async(Job)=>{
    await loginpage.loginJobSearch(Job);
});
Then('Job listing is opened', async()=>{
    await loginpage.JobDetails();
});

// helo