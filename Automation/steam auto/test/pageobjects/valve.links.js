import { $ } from '@wdio/globals'
import Page from './sitenav.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Testauto1 extends Page {
    
    // get sd(){
    //     return $('//div[@class="gutter_header gutter_top steam_deck_ctn"]')
    // }
    // get sdva(){
    //     return $('//a[@class="uckBibUwkj9tX_NZHf6wN SaleSectionLabelLinkButton Focusable"]')
    // }
    // get sdv(){
    //     return $('//div[@class="N8w56WjrQPSB3M6hVSXDx"]')
    // }
    // get sdc(){
    //     return $('//a[@class="_2gXzKgnqPNSUzBWEYvQ4OP Focusable"]')
    // }
    // get sdccl(){
    //     return $('//div[@class="closeButton"]')
    // }
    // get login(){
    //     return $('//a[@class="global_action_link"]')
    // }
    // get tsus(){
    //     return $('//a[@href="/charts/topselling/US"]')
    // }
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


    async test1(){
        await browser.setWindowSize(2000,1000)
        await expect(browser).toHaveUrl('https://store.steampowered.com/')
        // await this.sd.click()
        // await expect(browser).toHaveUrl('https://store.steampowered.com/steamdeck')
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
        // await this.sdva.click()
        // await browser.switchWindow('https://store.steampowered.com/charts/steamdecktopplayed')
        // await this.sdv.click()
        // await expect(browser).toHaveUrl('https://store.steampowered.com/app/413150/Stardew_Valley/')
        // await  browser.scroll(0,1000)
        // await this.sdc.click()
        // await this.sdccl.click()
        // await browser.scroll(0,0)
        // await this.login.click()
        // await expect(browser).toHaveUrl('https://store.steampowered.com/login/?redir=app%2F413150%2FStardew_Valley%3Fsnr%3D1_7001_mostplayedondeck_&redir_ssl=1&snr=1_5_9__global-header')
    }

    web () {
        return super.web('');
    }
}

export default new Testauto1();
