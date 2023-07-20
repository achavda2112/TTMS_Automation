module.exports = {
    button: {
        login: "[data-test='login']",
    },

    fields: {
        username: "[data-test='username']",
        password: "[data-test='password']",        
        logo: "#layout-menu-logo",
    },

    menu: {        
        dashboard: 'https://ttms-rewrite.nginxdev.egovja.com/dashboard',
        url:"https://ttms-rewrite.nginxdev.egovja.com/login",
        parish: '//*[@href="/master/parish"]',
        policeRank: '//*[@href="/master/police-rank"]',
        speedDetectingDevice: '//*[@href="/master/speed-detecting-devices"]',
        verdict: '//*[@href="/master/verdict-master"]', 
        warrantType: '//*[@href="/master/warrant-type"]',
        zone: '//*[@href="/master/zone-master"]',
        offendertype: '//*[@href="/master/offender-type"]'
    }
}