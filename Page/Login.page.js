const { expect } = require("chai");
const playwright = require('playwright');

class LoginPage {

    async navigate() {
        await page.goto('https://www.upwork.com/');

        
    }
    async loginClick() {
        await page.waitForSelector('#nav-main > div > a.nav-item.login-link.d-none.d-lg-block.px-20');
        await page.click('#nav-main > div > a.nav-item.login-link.d-none.d-lg-block.px-20');
    }
    async loginEmailOnly(username) {
        await page.fill('#login_username',username);
        await page.click('text="Continue with Email"');
    }
    async Loginpassword(password){
        await page.fill('#login_password',password);
        await page.click('text="Log in"')
    }
    async LoginWithoutEmail(){
        await page.click('text="Continue with Email"');
    }
    async loginFailed(){
        await page.waitForSelector('[id="username-message"]');
        let error = await page.$eval('[id="username-message"]', (errortext) => errortext.textContent);
        expect (error).to.include("Oops! Username is incorrect.")
    }
    async loginFailedNoEmail(){
        await page.waitForSelector('#main > div > div:nth-child(2) > div > div.up-alert-content.break > div.d-none.d-md-block > span');
        await page.waitForSelector('#username-message > span');
        let error = await page.$eval('#main > div > div:nth-child(2) > div > div.up-alert-content.break > div.d-none.d-md-block > span', (errortext) => errortext.textContent);
        let error1 = await page.$eval('#username-message > span', (errortext) => errortext.textContent);
        expect (error).to.include("Please fix the errors below.");
        expect (error1).to.include("This field is required");
    }
    async loginJobSearch(Job){
        await page.waitForSelector('#nav-main > div > div > form > input.nav-search-catalog-input.is-clear');
        await page.fill('#nav-main > div > div > form > input.nav-search-catalog-input.is-clear',Job);
        await page.keyboard.press("Enter");
    }
    async JobDetails(){
        await page.waitForNavigation();
        const JobUrl = await page.url();
        expect (JobUrl).to.equal("https://www.upwork.com/ab/jobs/search/?q=QA%20Automation&sort=recency"); 
    }
  }
  module.exports = { LoginPage };