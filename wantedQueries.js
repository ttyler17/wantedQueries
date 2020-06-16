var wanted = {}
module.exports = {
    beforeEach: browser => {
        wanted = browser.page.wantedPage()
        wanted
            .navigate()
    },
    after: browser => {
        wanted
            .end()
    },
    'First Test': browser => {
        var wantedSearch = (wantedQueries, data) => {
            wantedQueries
            .setValue('input[name="hdrInput"]',data.hdr)
            .setValue('input[name="mkeInput"]',data.mke)
            .setValue('input[name="oriInput"]',data.ori)
            .setValue('input[name="namInput"]',data.nam)
            .click('[id="sexInput"] option[value="M"]')
            .click('[id="racInput"] option[value="W"]')
            .setValue('input[name="hgtInput"]',data.hgt)
            .setValue('input[name="wgtInput"]',data.wgt)
            .setValue('input[name="haiInput"]',data.hai)
            .setValue('input[name="offInput"]',data.off)
            .setValue('input[name="dowInput"]',data.dow)
            .setValue('input[name="olnInput"]',data.oln)
            .click('#saveBtn')
            .pause(15000)
        }
        wantedSearch(wanted, {
            hdr: '1234567890', 
            mke: 'ABC',
            ori: 'OAI123456', 
            nam: 'Harry Dresden', 
            hgt: '607',
            wgt: '225',
            hai: 'Brown',
            off: 'Arson',
            dow: '10312010'
        })
    }
}