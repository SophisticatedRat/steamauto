import { expect } from '@wdio/globals'
import valveLinks from '../pageobjects/valve.links.js'
import policies from '../pageobjects/policies.info.js'
import details from '../pageobjects/pws.details.js'
import carousel from '../pageobjects/pws.media.js'
import site from '../pageobjects/sitenav.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await valveLinks.web('')

        await valveLinks.linkrun()

        await valveLinks.web('')
        
        await policies.policyRun()

        await details.web('/app/1290000/PowerWash_Simulator/')

        await details.detailCheck()

        await details.web('/app/1290000/PowerWash_Simulator/')

        await carousel.carouselCheck()
        
    })
})