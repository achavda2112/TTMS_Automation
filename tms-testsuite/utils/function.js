


import * as utilLocators from "../utils/locator"



async function waitAndClick(locator, time = 3000) {
    // Wait for locator and click on it
    await $(locator).waitForExist({ timeout: time });
    await $(locator).click();
    await browser.pause(2000);
}

async function waitAndFill(locator, data, time = 10000, ignoreDisabled = false) {
    // Wait for locator and add data in input fields
    if(ignoreDisabled && !await $(locator).isEnabled()){
        return;
    }
    await $(locator).waitForExist({ timeout: time });    
    await $(locator).click();
    await $(locator).setValue(data);    
    await browser.pause(2000);
}    

async function verifyText(locator, text) {
    await $(locator).waitForExist();
    await expect($(locator)).toHaveTextContaining(text);
    await browser.pause(2000);
}

async function verifySearch(locator, data) {
    await $(locator).waitForExist();
    await $(locator).setValue(data);
    await browser.pause(2000);
}


async function login(url, username, password) {
    await browser.url(url)
    await browser.maximizeWindow()
    await browser.pause(2000)
    await $(utilLocators.fields.username).waitForExist();
    await $(utilLocators.fields.username).setValue(username)
    await browser.pause(2000)
    await $(utilLocators.fields.password).setValue(password)
    await $(utilLocators.button.login).waitForExist();
    await $(utilLocators.button.login).click()
    await browser.pause(2000);
}


async function selectDropdown(locator, optionIndex, optionsLocator) {
    await waitAndClick(locator, 4000);
    if(!optionsLocator){
        await waitAndClick(`${locator}//p-dropdownitem[${optionIndex}]`, 4000);
    }else{
        await waitAndClick(`${optionsLocator}//p-dropdownitem[${optionIndex}]`, 4000);
    }
    
}
async function multiselectDropdown(locator) {
    const checkbox_two = $(locator);
    //await checkbox_two.scrollIntoView();
    await browser.pause(3000);
    await checkbox_two.click();
    await browser.pause(4000);
}

async function selectDate(locator, date) {
    const datepickerTrigger = $(locator);
    await datepickerTrigger.click();
    
    //select year
    await $("//button[contains(@class,'p-datepicker-year')]").click();
    await $("//div[contains(@class,'p-yearpicker')]//span[text()=" + date.getFullYear() + "]").click();
    //select month
    await $("//div[contains(@class,'p-monthpicker')]//span[text()=' " + date.toLocaleString('default', { month: 'short' }).slice(0, 3) + " ']").click();
    //select date
    const dateToSelect = $(locator + '//span[text()=' + date.getDate() + '][1]');    
    await dateToSelect.click();
    
        await browser.pause(4000);
       // assert.equal(inputField.getValue(), valueToEnter, 'Input value should match what was entered');
} 
     


async function verifydashboard() {

    await $(utilLocators.fields.logo).waitForExist();
    await expect(browser).toHaveUrl(utilLocators.menu.dashboard)
}


async function navigateMenu(locator) {
   // await $(utilLocators.menu.configuration).waitForExist()
   // await $(utilLocators.menu.configuration).click()
    await $(locator).waitForExist();
    const elem = await $(locator);
    // scroll to specific element
    await elem.scrollIntoView();
    await elem.scrollIntoView(); // added this as vehicle color submenu was not identified
    await $(locator).click()
    await $(locator).waitForExist();
    await browser.pause(2000);
}

async function generateRandomValue(length, isNumber = false) {
    let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    if (isNumber) {
        charset = '0123456789';
    }
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        result += charset[randomIndex];
    }
    return result;
}

async function setUniqueValue(locator, errorLocator, isNumber = false, length = 3) {
    let result = await generateRandomValue(length, isNumber);    
    await waitAndFill(locator, result);
    await browser.keys(['Tab']);
    const isDisplayed = await $(errorLocator).isDisplayed({ timeout: 3000 });
    if (isDisplayed) {
        return await setUniqueValue(locator, errorLocator, isNumber, length);
    }
    return result;
}
async function generateUniqueEmail(locator)
{
    const baseEmail = 'example.email+'; // Base email address without the domain
    const domain = 'example.com'; // Domain part of the email address
    const timestamp = new Date().getTime(); // Current timestamp
    const uniqueEmail = `${baseEmail}${timestamp}@${domain}`;
    const inputField = $(locator); 
    await waitAndFill(locator, uniqueEmail);

}


async function radioButton(locator) {
    const p = $(locator)
    p.click()
    //verify if selected 
    console.log(p.isSelected())
}

async function setNumbervalue(locator, data, time = 10000) {
    try {
        await $(locator).waitForExist({ timeout: time });
        const textbox = $(locator);
        await textbox.click();
        await browser.keys(['Back space']);
        await browser.keys([data]);
    } catch (error) {
        console.error(`An error occurred: ${error}`);
    }
}

export {
    waitAndClick,
    waitAndFill,    
    verifyText,
    login,
    navigateMenu,
    verifydashboard,
    verifySearch,
    selectDropdown,
    generateRandomValue,
    setUniqueValue,
    radioButton,
    setNumbervalue,
    multiselectDropdown,
    selectDate,
    generateUniqueEmail
};
