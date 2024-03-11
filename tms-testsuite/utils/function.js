


import * as utilLocators from "../utils/locator"
import { Key } from 'webdriverio'
import fs from 'fs'

async function waitAndClick(locator, time = 3000) {
    await waitForLoader();
    // Wait for locator and click on it
    await $(locator).waitForExist({ timeout: time });
    await $(locator).click();
    // await browser.pause(2000);
}

async function waitAndFill(locator, data, time = 10000, escapeBeforeValue = false, ignoreDisabled = false) {
    await waitForLoader();
    // Wait for locator and add data in input fields
    if (ignoreDisabled && !await $(locator).isEnabled()) {
        return;
    }
    await $(locator).waitForExist({ timeout: time });
    await $(locator).click();
    if (escapeBeforeValue) {
        await browser.pause(2000);
        await browser.keys([Key.Escape]);
        await browser.pause(2000);
    }
    await $(locator).setValue(data);
    await browser.pause(2000);
}

async function waitAndClear(locator, count, time = 10000, ignoreDisabled = false) {
    await waitForLoader();
    // Wait for locator and add data in input fields
    if (ignoreDisabled && !await $(locator).isEnabled()) {
        return;
    }
    await $(locator).waitForExist({ timeout: time });
    await $(locator).click();
    for (let i = 0; i < count; i++) {
        await browser.keys([Key.ArrowRight]);
    }
    for (let i = 0; i < count; i++) {
        await browser.keys(['Back space']);
    }
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
    await waitForLoader();
}

async function waitForLoader() {
    const elem = await $('.spinner-overlay')
    const timeout = 80000; // Adjust the timeout as needed
    await browser.waitUntil(
        async () => !(await elem.isExisting()),
        {
            timeout,
            timeoutMsg: 'Loading panel is still visible after waiting'
        }
    );
}

async function waitForLoaderAndClickNextField() {
    const timeout = 80000; // Adjust the timeout as needed
    await browser.waitUntil(
        () => !!!isLoadingPanelVisible(),
        {
            timeout,
            timeoutMsg: 'Loading panel is still visible after waiting'
        }
    );

    // await waitForLoaderAndClickNextField();
}



async function selectDropdown(locator, optionIndex, optionsLocator, ignoreDisabled = false) {
    await waitForLoader();
    if (ignoreDisabled && await $(`${locator}//div[contains(@class,'p-disabled')]`).isExisting()) {
        return;
    }
    await waitAndClick(locator, 4000);

    if (!optionsLocator) {
        await waitAndClick(`${locator}//p-dropdownitem[${optionIndex}]`, 4000);
    } else {
        await waitAndClick(`${optionsLocator}//p-dropdownitem[${optionIndex}]`, 4000);
    }

}
async function multiselectDropdown(locator) {
    await waitForLoader();
    const checkbox_two = $(locator);
    //await checkbox_two.scrollIntoView();
    await browser.pause(3000);
    await checkbox_two.click();
    await browser.pause(2000);
}

async function selectDate(locator, date, ignoreDisabled = false) {
    await waitForLoader();
    const datepickerTrigger = $(locator);

    if (ignoreDisabled && await $(`${locator}//span[contains(@class,'p-calendar-disabled')]`).isExisting()) {
        return;
    }
    await datepickerTrigger.click();

    //select year
    await $("//button[contains(@class,'p-datepicker-year')]").click();
    await $("//div[contains(@class,'p-yearpicker')]//span[text()=" + date.getFullYear() + "]").click();
    //select month
    await $("//div[contains(@class,'p-monthpicker')]//span[text()=' " + date.toLocaleString('default', { month: 'short' }).slice(0, 3) + " ']").click();
    //select date
    console.log('date check: ' + date.getDate())
    const dateToSelect = $(locator + '//span[text()=' + date.getDate() + '][1]');
    console.log('path for date seect : ' + dateToSelect)

    await dateToSelect.click();

    await browser.pause(4000);
}

async function verifydashboard() {

    await $(utilLocators.fields.logo).waitForExist();
    await expect(browser).toHaveUrl(utilLocators.menu.dashboard);
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

// Example usage:
//     sequentialNumbers = await generateSequentialNumber('MT200', 5);
// console.log(sequentialNumbers);


async function setUniqueValue(locator, errorLocator, isNumber = false, length = 3, type) {
    let result;
    let data;
    switch (type) {
        case "MT0":
            data = 202
            try {
                data = parseInt(fs.readFileSync("sequential.txt", { encoding: 'utf8', flag: 'r' })) + 1;
                fs.writeFileSync("sequential.txt", data.toString());
            } catch (error) {
                fs.writeFileSync("sequential.txt", "202");
            }
            result = "MT0" + data.toString()
            break;
        case "User":
            data = 1
            try {
                data = parseInt(fs.readFileSync("newuser.txt", { encoding: 'utf8', flag: 'r' })) + 1;
                fs.writeFileSync("newuser.txt", data.toString());
            } catch (error) {
                fs.writeFileSync("newuser.txt", "2");
            }
            result = "User+" + data.toString()
            break;
        case "Title":
            data = 1
            try {
                data = parseInt(fs.readFileSync("Title.txt", { encoding: 'utf8', flag: 'r' })) + 1;
                fs.writeFileSync("Title.txt", data.toString());
            } catch (error) {
                fs.writeFileSync("Title.txt", "2");
            }
            result = "Title" + data.toString()
            break;
        default:
            result = await generateRandomValue(length, isNumber);
            break;
    }
    await waitAndFill(locator, result);
    await browser.keys(['Tab']);
    const isDisplayed = await $(errorLocator).isDisplayed({ timeout: 3000 });
    console.log("---HERE---", result);
    if (isDisplayed) {
        return await setUniqueValue(locator, errorLocator, isNumber, length);
    }
    return result;
}

async function generateUniqueEmail(locator) {
    const baseEmail = 'TestUser+1'; // Base email address without the domain
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
        await waitForLoader();
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
    waitForLoaderAndClickNextField,
    waitAndFill,
    waitAndClear,
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
    generateUniqueEmail,
    waitForLoader,
};
