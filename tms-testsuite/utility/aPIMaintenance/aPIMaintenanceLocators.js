module.exports = {
    button: {
        add: "//*[@ng-reflect-label='Add']",
        clear: "//*[@label='Clear']",
        search: "//*[@label='Search']",
        add: "//*[@ng-reflect-label='Add']",
        generateKey: "//*[@ng-reflect-label='Generate Keys']",
        regenerateKey: "//*[@ng-reflect-label='Regenerate Keys']",
        save: "//*[@ng-reflect-label='Save']",

},
fields: {
    action: "//td[@id='action']//button",
    status: "//span[@id='status']//p-inputswitch",
    search: "//*[@placeholder='Search by Title, Description']",
    title: "//*[@data-test='name']",
    description: "//*[@data-test='description']",
    expiryDate: "//*[@formcontrolname='expiryDate']//input",
    apis: "//*[@formcontrolname='apis']",
    organization: "//*[@formcontrolname='organizations']",
    secret: "//i[@class='ng-tns-c5-165 pi ng-star-inserted pi-eye']",
    api1: "//p-multiselectitem[1]//div[@class='p-checkbox-box']",
    api2: "//p-multiselectitem[2]//div[@class='p-checkbox-box']",
    api3: "//p-multiselectitem[3]//div[@class='p-checkbox-box']",
    org1: "//p-multiselectitem[1]//div[@class='p-checkbox-box']",
    org2: "//p-multiselectitem[2]//div[@class='p-checkbox-box']",
    valueSelect: "//ul[contains(@class, 'p-dropdown-item')]",
    ok: "//*[@label='Ok']",
    statusinactive: "//*[@id='status']",
    cancel: "//*[@ng-reflect-label='Cancel']",
    errorCode: "[data-test='codeErrorRequired']"
}
}