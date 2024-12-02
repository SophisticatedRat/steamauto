import { $ } from '@wdio/globals'
import Page from './sitenav.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Testauto4 extends Page {

    get arrowright(){
        return $('//div[@class="slider_right"]')
    }
    get arrowleft(){
        return $('//div[@class="slider_left"]')
    }
    get vid1(){
        return $('//div[@id="thumb_movie_257068043"]/div[@class="highlight_movie_marker"]')
    }
    get vid2(){
        return $('//div[@id="thumb_movie_257041994"]/div[@class="highlight_movie_marker"]')
    }
    get pic1(){
        return $('//img[@src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1290000/ss_8782c713c59761ebaacabb214672655a1599ce79.116x65.jpg?t=1732735488"]')
    }
    get pic2(){
        return $('//img[@src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1290000/ss_29593230c1bbcd6a6f3e371311d21b663679ccaf.116x65.jpg?t=1732735488"]')
    }
    get pic3(){
        return $('//img[@src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1290000/ss_fdb99469c33092c9eeb564f8c00e05f7dbc298c8.116x65.jpg?t=1732735488"]')
    }
    get pic4(){
        return $('//img[@src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1290000/ss_49aeb7a5528416c4e830740f0258206ec04510e2.116x65.jpg?t=1732735488"]')
    }
    get pic5(){
        return $('//img[@src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1290000/ss_4598c670e3a988145425d3097aa1ce0571b81229.116x65.jpg?t=1732735488"]')
    }
    get pic6(){
        return $('//img[@src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1290000/ss_16730364e49ea4e3eb4c5913aa64c1392443dffb.116x65.jpg?t=1732735488"]')
    }
    get pic7(){
        return $('//img[@src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1290000/ss_d2bb76f204d3bc7bc499c5816b942a333001b210.116x65.jpg?t=1732735488"]')
    }
    get vid3(){
        return $('//div[@id="thumb_movie_257063666"]/div[@class="highlight_movie_marker"]')
    }
    get vid4(){
        return $('//div[@id="thumb_movie_257032363"]/div[@class="highlight_movie_marker"]')
    }
    get vid5(){
        return $('//div[@id="thumb_movie_257042574"]/div[@class="highlight_movie_marker"]')
    }
    get vid6(){
        return $('//div[@id="thumb_movie_257004058"]/div[@class="highlight_movie_marker"]')
    }
    get vid7(){
        return $('//div[@id="thumb_movie_256988421"]/div[@class="highlight_movie_marker"]')
    }
    get vid8(){
        return $('//div[@id="thumb_movie_256976657"]/div[@class="highlight_movie_marker"]')
    }
    get vid9(){
        return $('//div[@id="thumb_movie_256953376"]/div[@class="highlight_movie_marker"]')
    }
    get vid10(){
        return $('//div[@id="thumb_movie_256941906"]/div[@class="highlight_movie_marker"]')
    }
    get vid11(){
        return $('//div[@id="thumb_movie_256927868"]/div[@class="highlight_movie_marker"]')
    }
    get vid12(){
        return $('//div[@id="thumb_movie_256895946"]/div[@class="highlight_movie_marker"]')
    }
    get vid13(){
        return $('//div[@id="thumb_movie_256871146"]/div[@class="highlight_movie_marker"]')
    }
    get scrlbr(){
        return $('//div[@id="highlight_slider"]')
    }


    async test4(){
        await browser.setWindowSize(2000,1000)
        await expect(browser).toHaveUrl('https://store.steampowered.com/app/1290000/PowerWash_Simulator/')
        await browser.scroll(0,100)
        await this.vid2.click()
        await this.vid1.click()
        await this.pic1.click()
        await this.pic2.click()
        await this.pic3.click()
        await this.arrowright.click()
        await this.arrowright.click()
        await this.arrowleft.click()
        await this.pic4.click()
        await this.pic5.click()
        await this.pic6.click()
        await this.pic7.click()
        await this.vid3.click()
        await this.arrowright.click()
        await this.vid5.click()
        await this.vid4.click()
        await this.vid6.click()
        await this.vid7.click()
        await this.vid8.click()
        await this.arrowright.click()
        await this.vid10.click()
        await this.vid9.click()
        await this.vid11.click()
        await this.vid12.click()
        await this.vid13.click()
        await this.scrlbr.click()
    }

    web () {
        return super.web('app/1290000/PowerWash_Simulator/');
    }
}

export default new Testauto4();
