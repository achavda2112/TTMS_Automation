module.exports = {
    button: {
        clear: "//*[@label='Clear']",
        applyfilter: "//*[@label='Apply Filter']",
        cancel: "//*[@label='Cancel']",
        save: "//*[@label='Save']"

},
fields: {
    warrantrefno: "//*[@data-test='warrantRefNo']",
    warrantIssueDateStart: "//*[@data-test='warrantCourtStartDate']//input",
    warrantIssueDateEnd: "//*[@data-test='warrantCourtEndDate']//input",
    dlNumber: "//*[@data-test='dlNumber']",
    issuingMagistrate: "//*[@id='issuingMagistrate']",
    offenderName : "//*[@data-test='offenderName']",
    courtId : "//*[@id='courtId']",
    courtIssuedBy: "//*[@id='courtIssuedBy']",
    printStatus: "//*[@inputid='printed']",
    notprinted: "//*[@inputid='notPrinted']",
    both: "//*[@inputid='both']",
    policeStation: "//*[@id='policeStation']",
    checkBox: "//*[@inputid='binary']",
    referenceNumber: "//*[@ng-reflect-ng-switch='warRefNo']//a[@href='javascript:;']",
    errorCode: "[data-test='codeErrorRequired']",
    valueSelect: "//ul[contains(@class, 'p-dropdown-item')]",
    activityTab: "//*[@id='p-tabpanel-1-label']//span[text()='Activity']",
    additionalTicket1: "//*[@ng-reflect-name='154']//input[@aria-checked='false']",
    additionalTicket2: "//*[@ng-reflect-name='155']//input[@aria-checked='false']",
    activity: "//*[@id='activity']",
    activityDate: "//*[@id='activityDate']//input",
    policeStation: "//*[@id='policeStation']",
    policeOfficer: "//*[@id='policeOfficer']",
    dispatchBy: "//*[@id='dispatchedBy']",
    comments: "//*[@id='comments']",
    receivedByOfficer: "//*[@id='receivedByOfficer']",
    assignedBy: "//*[@id='assignedBy']",
    assignedToPoliceStation: "//*[@id='assignedToPoliceStation']",
    assignedTo: "//*[@id='assignedTo']",
    executedBy: "//*[@id='executedBy']",
    location: "//*[@id='location']"
}
}