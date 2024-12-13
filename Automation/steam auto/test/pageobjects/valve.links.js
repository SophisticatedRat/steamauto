import { $ } from '@wdio/globals'
import site from './sitenav.js';


class valveLinks extends site {
    get av(){
        return $('//a[@href="http://www.valvesoftware.com/about"]')
    }
    get jobs(){
        return $('//a[@href="http://www.valvesoftware.com"]')
    }
    get sw(){
        return $('//a[@href="http://www.steampowered.com/steamworks/"]')
    }
    get sds(){
        return $('//a[@href="https://partner.steamgames.com/steamdirect"]')
    }
    get support(){
        return $('//a[@href="https://help.steampowered.com/en/?snr=1_44_44_"]')
    }
    get recy(){
        return $('//a[@href="https://store.steampowered.com/hardware_recycling/?snr=1_44_44_"]')
    }
    get gc(){
        return $('//a[@href="https://store.steampowered.com/digitalgiftcards/?snr=1_44_44_"]')
    }
    get sfb(){
        return $('//a[@href="https://steamcommunity.com/linkfilter/?u=http%3A%2F%2Fwww.facebook.com%2FSteam"]')
    }
    get stpx(){
        return $('//a[@href="http://twitter.com/steam"]')
    }


    async linkrun(){
        await browser.setWindowSize(2000,1000)
        await expect(browser).toHaveUrl('https://store.steampowered.com/')
        await browser.scroll(0,6000)
        await this.av.waitForExist(true)
        await this.av.click()
        await browser.switchWindow('https://www.valvesoftware.com/en/about')
        await browser.switchWindow('https://store.steampowered.com/')
        await this.jobs.click()
        await browser.switchWindow('https://www.valvesoftware.com/en/')
        await browser.switchWindow('https://store.steampowered.com/')
        await this.sw.click()
        await browser.switchWindow('https://partner.steamgames.com/')
        await browser.switchWindow('https://store.steampowered.com/')
        await this.sds.click()
        await browser.switchWindow('https://partner.steamgames.com/steamdirect')
        await browser.switchWindow('https://store.steampowered.com/')
        await this.support.click()
        await browser.switchWindow('https://help.steampowered.com/en/?snr=1_44_44_')
        await browser.newWindow('https://store.steampowered.com/')
        await browser.switchWindow('https://store.steampowered.com/')
        await expect(browser).toHaveUrl('https://store.steampowered.com/')
        await expect(browser).toHaveUrl('https://store.steampowered.com/')
        await expect(browser).toHaveUrl('https://store.steampowered.com/')
        await browser.scroll(0,6000)
        await this.av.waitForExist()
        await this.recy.click()
        await browser.switchWindow('https://store.steampowered.com/hardware_recycling/?snr=1_44_44_')
        await browser.newWindow('https://store.steampowered.com/')
        await browser.switchWindow('https://store.steampowered.com/')
        await browser.scroll(0,2000)
        await this.av.waitForExist()
        await this.gc.click()
        await browser.switchWindow('https://store.steampowered.com/digitalgiftcards/')
        await browser.switchWindow('https://store.steampowered.com/')
        await this.sfb.click()
        await browser.switchWindow('https://www.facebook.com/Steam')
        await browser.switchWindow('https://store.steampowered.com/')
        await this.stpx.click()
        await browser.switchWindow('https://x.com/steam')
    }

    web () {
        return super.web('');
    }
}

export default new valveLinks();
