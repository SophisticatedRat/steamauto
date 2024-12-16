import site from './sitenav.js';

class carousel extends site {

    arrowDirection(direction){
        return $(`//div[@class="slider_${direction}"]`)
    } 
    imgCycle(hash){
        return $(`//div[@id="thumb_screenshot_ss_${hash}.jpg"]`)
    }
    vidCycle(hash){
        return $(`//div[@id="thumb_movie_${hash}"]/div[@class="highlight_movie_marker"]`)
    }
    imgHi(hash){
        return $(`//div[@class="highlight_strip_item highlight_strip_screenshot focus"][@id="thumb_screenshot_ss_${hash}.jpg"]`)
    }
    vidHi(hash){
        return $(`//div[@class="highlight_strip_item highlight_strip_movie ttip"][@id="thumb_movie_${hash}"]`)
    }
    get rink(){
        return $('//div[@id="thumb_movie_257068043"]/div[@class="highlight_movie_marker"]')
    }
    get trailer(){
        return $('//div[@id="thumb_movie_257041994"]/div[@class="highlight_movie_marker"]')
    }
    get van(){
        return $('//div[@id="thumb_screenshot_ss_8782c713c59761ebaacabb214672655a1599ce79.jpg"]')
    }
    get slide(){
        return $('//div[@id="thumb_screenshot_ss_29593230c1bbcd6a6f3e371311d21b663679ccaf.jpg"]')
    }
    get sktprk(){
        return $('//div[@id="thumb_screenshot_ss_fdb99469c33092c9eeb564f8c00e05f7dbc298c8.jpg"]')
    }
    get train(){
        return $('//div[@id="thumb_screenshot_ss_49aeb7a5528416c4e830740f0258206ec04510e2.jpg"]')
    }
    get carnival(){
        return $('//div[@id="thumb_screenshot_ss_4598c670e3a988145425d3097aa1ce0571b81229.jpg"]')
    }
    get subway(){
        return $('//div[@id="thumb_screenshot_ss_16730364e49ea4e3eb4c5913aa64c1392443dffb.jpg"]')
    }
    get statue(){
        return $('//div[@id="thumb_screenshot_ss_d2bb76f204d3bc7bc499c5816b942a333001b210.jpg"]')
    }
    get shrek(){
        return $('//div[@id="thumb_movie_257063666"]/div[@class="highlight_movie_marker"]')
    }
    get alice(){
        return $('//div[@id="thumb_movie_257032363"]/div[@class="highlight_movie_marker"]')
    }
    get cruise(){
        return $('//div[@id="thumb_movie_257042574"]/div[@class="highlight_movie_marker"]')
    }
    get wrhmr(){
        return $('//div[@id="thumb_movie_257004058"]/div[@class="highlight_movie_marker"]')
    }
    get xmas(){
        return $('//div[@id="thumb_movie_256988421"]/div[@class="highlight_movie_marker"]')
    }
    get back2ftr(){
        return $('//div[@id="thumb_movie_256976657"]/div[@class="highlight_movie_marker"]')
    }
    get spngbob(){
        return $('//div[@id="thumb_movie_256953376"]/div[@class="highlight_movie_marker"]')
    }
    get update(){
        return $('//div[@id="thumb_movie_256941906"]/div[@class="highlight_movie_marker"]')
    }
    get tmbrdr(){
        return $('//div[@id="thumb_movie_256927868"]/div[@class="highlight_movie_marker"]')
    }
    get trailer2(){
        return $('//div[@id="thumb_movie_256895946"]/div[@class="highlight_movie_marker"]')
    }
    get coop(){
        return $('//div[@id="thumb_movie_256871146"]/div[@class="highlight_movie_marker"]')
    }
    get scrlbr(){
        return $('//div[@class="handle"]')
    }
    get scrlrt(){
        return $('//div[@style="position: absolute; left: 462px;"]')
    }
    get scrlmid(){
        return $('//div[@style="position: absolute; left: 231px;"]')
    }
    get scrlrl(){
        return $('//div[@id="highlight_slider"]')
    }


    async carouselCheck(){
        const imgs1 = ["8782c713c59761ebaacabb214672655a1599ce79", "29593230c1bbcd6a6f3e371311d21b663679ccaf", "fdb99469c33092c9eeb564f8c00e05f7dbc298c8"];
        await browser.maximizeWindow()
        await expect(browser).toHaveUrl('https://store.steampowered.com/app/1290000/PowerWash_Simulator/')
        await browser.scroll(0,400)
        await this.rink.click()
        await this.trailer.click()
        for (let i=0;i<imgs1.length;i++){
            this.imgCycle(imgs1[i]).click()
            console.log(imgs1[i])
            expect(this.imgHi(imgs1[i])).toExist()
        }
        await this.arrowDirection('right').click()
        await this.arrowDirection('right').click()
        await this.arrowDirection('left').click()
        const imgs2 = ['49aeb7a5528416c4e830740f0258206ec04510e2','4598c670e3a988145425d3097aa1ce0571b81229','16730364e49ea4e3eb4c5913aa64c1392443dffb','d2bb76f204d3bc7bc499c5816b942a333001b210']
        for (let i=0;i<imgs2.length;i++){
            this.imgCycle(imgs2[i]).click()
            console.log(imgs2[i])
            expect(this.imgHi(imgs2[i])).toExist()
        }
        await this.alice.click()
        await this.arrowDirection('right').click()
        const vids1 = ['257063666','257042574','257004058','256988421','256976657']
        for (let i=0;i<vids1.length;i++){
            this.vidCycle(vids1[i]).click()
            console.log(vids1[i])
            expect(this.vidHi(vids1[i])).toExist()
        }
        await this.arrowDirection('right').click()
        const vids2 = ['256953376','256941906','256927868','256895946','256871146']
        for (let i=0;i<vids2.length;i++){
            this.vidCycle(vids2[i]).click()
            console.log(vids2[i])
            expect(this.vidHi(vids2[i])).toExist()
        }
        await this.scrlrt.waitForExist()
        await this.scrlbr.click({skipRelease:true})
        await this.scrlrl.moveTo()
        await this.scrlrl.click()
        await expect(this.scrlmid).toExist()
    }

    web () {
        return super.web('app/1290000/PowerWash_Simulator/');
    }
}

export default new carousel();
