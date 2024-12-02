import { $ } from '@wdio/globals'
import Page from './sitenav.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Testauto3 extends Page {

    get casual(){
        return $('//a[@href="https://store.steampowered.com/genre/Casual/?snr=1_5_9__408"]')
    }
    get indie(){
        return $('//a[@href="https://store.steampowered.com/genre/Indie/?snr=1_5_9__408"]')
    }
    get simulation(){
        return $('//a[@href="https://store.steampowered.com/genre/Simulation/?snr=1_5_9__408"]')
    }
    get fLab(){
        return $('//a[@href="https://store.steampowered.com/developer/FuturLab?snr=1_5_9__408"]')
    }
    get square(){
        return $('//a[@href="https://store.steampowered.com/publisher/squareenix?snr=1_5_9__408"]')
    }


    async test3(){
        await browser.setWindowSize(2000,1000)
        await expect(browser).toHaveUrl('https://store.steampowered.com/app/1290000/PowerWash_Simulator/')
        await browser.scroll(0,1500)
        await this.casual.click()
        await expect(browser).toHaveUrl('https://store.steampowered.com/tags/en/Casual/')
        await browser.newWindow('https://store.steampowered.com/app/1290000/PowerWash_Simulator/')
        await expect(browser).toHaveUrl('https://store.steampowered.com/app/1290000/PowerWash_Simulator/')
        await browser.scroll(0,1500)
        await this.indie.click()
        await expect(browser).toHaveUrl('https://store.steampowered.com/tags/en/Indie/')
        await browser.newWindow('https://store.steampowered.com/app/1290000/PowerWash_Simulator/')
        await expect(browser).toHaveUrl('https://store.steampowered.com/app/1290000/PowerWash_Simulator/')
        await browser.scroll(0,1500)
        await this.simulation.click()
        await expect(browser).toHaveUrl('https://store.steampowered.com/category/simulation')
        await browser.newWindow('https://store.steampowered.com/app/1290000/PowerWash_Simulator/')
        await expect(browser).toHaveUrl('https://store.steampowered.com/app/1290000/PowerWash_Simulator/')
        await browser.scroll(0,1500)
        await this.fLab.click()
        await expect(browser).toHaveUrl('https://store.steampowered.com/developer/FuturLab')
        await browser.newWindow('https://store.steampowered.com/app/1290000/PowerWash_Simulator/')
        await expect(browser).toHaveUrl('https://store.steampowered.com/app/1290000/PowerWash_Simulator/')
        await browser.scroll(0,1500)
        await this.square.click()
        await expect(browser).toHaveUrl('https://store.steampowered.com/publisher/squareenix')
    }

    web () {
        return super.web('app/1290000/PowerWash_Simulator/');
    }
}

export default new Testauto3();
