module.exports = {
    button: {
        login: "[data-test='login']",
    },

    fields: {
        username: "[data-test='username']",
        password: "[data-test='password'] input",        
        logo: "#layout-menu-logo",
    },

    menu: {        
        dashboard: 'https://ttms-rewrite.nginxdev.egovja.com/dashboard',
        url:"https://ttms-rewrite.nginxdev.egovja.com/login",
        configuration: '//*[span="Configuration"]',
        parish: '//*[@href="/master/parish"]',
        policeRank: '//*[@href="/master/police-rank"]',
        speedDetectingDevice: '//*[@href="/master/speed-detecting-devices"]',
        verdict: '//*[@href="/master/verdict-master"]', 
        warrantType: '//*[@href="/master/warrant-type"]',
        zone: '//*[@href="/master/zone-master"]',
        offendertype: '//*[@href="/master/offender-type"]',
        actiontype: '//*[@href="/master/action-type"]',
        country: '//*[@href="/master/country"]',
        event: '//*[@href="/master/event"]',
        courthearingtype: '//*[@href="/master/court-hear-type"]',
        driverslicense: '//*[@href="/master/driver-licence"]',     
        eventreftype: '//*[@href="/master/event-ref-type"]',     
        mechanicaldefecttype: '//*[@href="/master/mechanical-defect-type"]',
        organizationcategory: '//*[@href="/master/organization-category"]', 
        vehicleColor: '//*[@href="/master/vehicle-color"]',
        vehicleMake: '//*[@href="/master/vehicle-make"]',
        vehicleType: '//*[@href="/master/vehicle-type"]',
    }
}