import site from './sitenav.js';

class policies extends site {

    get prpo(){
        return $('//a[@href="https://store.steampowered.com/privacy_agreement/?snr=1_44_44_"]')
    }
    get legal(){
        return $('//a[@href="https://store.steampowered.com/legal/?snr=1_44_44_"]')
    }
    get ssa(){
        return $('//a[@href="https://store.steampowered.com/subscriber_agreement/?snr=1_44_44_"]')
    }
    get refunds(){
        return $('//a[@href="https://store.steampowered.com/steam_refunds/?snr=1_44_44_"]')
    }
    get cookies(){
        return $('//a[@href="https://store.steampowered.com/account/cookiepreferences/?snr=1_44_44_"]')
    }


    async policyRun(){
        await browser.setWindowSize(2000,1000)
        await expect(browser).toHaveUrl('https://store.steampowered.com/')
        await browser.scroll(0,6000)
        await this.prpo.waitForExist()
        await this.prpo.click()
        await browser.switchWindow('https://store.steampowered.com/privacy_agreement/?snr=1_44_44_')
        await browser.switchWindow('https://store.steampowered.com/')
        await this.legal.click()
        await browser.switchWindow('https://store.steampowered.com/legal/?snr=1_44_44_')
        await browser.switchWindow('https://store.steampowered.com/')
        await this.ssa.click()
        await browser.switchWindow('https://store.steampowered.com/subscriber_agreement/?snr=1_44_44_')
        await browser.switchWindow('https://store.steampowered.com/')
        await this.refunds.click()
        await browser.switchWindow('https://store.steampowered.com/steam_refunds/?snr=1_44_44_')
        await browser.switchWindow('https://store.steampowered.com/')
        await this.cookies.click()
        await browser.switchWindow('https://store.steampowered.com/account/cookiepreferences/?snr=1_44_44_')
    }

    web () {
        return super.web('');
    }
}

export default new policies();
