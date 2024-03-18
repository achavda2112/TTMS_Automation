import * as courtcalenderLoctors from "../../courtcalender/courtcalenderLoctors"
import * as courtcalenderTestData from "../courtcalenderTestData"
import * as userData from "../../../utils/testData"
import * as func from "../../../utils/function"
import * as utilLocators from "../../../utils/locator"

describe('My Login application', () => {


    before(async () => {
        await func.login(utilLocators.menu.url, userData.username, userData.password);
        await $(utilLocators.menu.configuration).waitForExist();
        await $(utilLocators.menu.configuration).click();
        await browser.pause(2000);
        await func.navigateMenu(utilLocators.menu.courtCalender);
    });

    it('Add CourtCalender', async () => {
        await func.selectDropdown(courtcalenderLoctors.fields.selectCourt, 1, courtcalenderLoctors.fields.valueSelect);
        await func.selectDropdown(courtcalenderLoctors.fields.selectYear, 1, courtcalenderLoctors.fields.valueSelect);
        await func.waitAndClick(courtcalenderLoctors.fields.monday, 100);
        await func.waitAndClick(courtcalenderLoctors.fields.tuesday, 100);
        await func.waitAndClick(courtcalenderLoctors.fields.wednesday, 100);
        await func.waitAndClick(courtcalenderLoctors.fields.thursday, 100);
        await func.waitAndClick(courtcalenderLoctors.fields.friday, 100);
        await func.waitAndClick(courtcalenderLoctors.fields.slotConfigure, 100);
        await func.waitAndClear(courtcalenderLoctors.fields.startTime, 8, 1000);
        await func.waitAndFill(courtcalenderLoctors.fields.startTime, courtcalenderTestData.startSlot, 1000);
        await func.waitAndClear(courtcalenderLoctors.fields.endTime, 8, 1000);
        await func.waitAndFill(courtcalenderLoctors.fields.endTime, courtcalenderTestData.endSlot, 1000);
        await func.waitAndClick(courtcalenderLoctors.button.saveConfiguration, 1000);
        await func.waitAndClick(courtcalenderLoctors.button.saveCountry, 1000);

    })
    it('Edit CourtCalender', async () => {
        await func.selectDropdown(courtcalenderLoctors.fields.selectCourt, 1, courtcalenderLoctors.fields.valueSelect);
        await func.selectDropdown(courtcalenderLoctors.fields.selectYear, 1, courtcalenderLoctors.fields.valueSelect);
        await func.waitAndClick(courtcalenderLoctors.button.clearAll, 1000);
        await func.waitAndClick(courtcalenderLoctors.button.saveCountry, 1000);
    })
})