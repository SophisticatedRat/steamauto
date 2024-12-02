import { expect } from '@wdio/globals'
import Testauto1 from '../pageobjects/valve.links.js'
import Testauto2 from '../pageobjects/policies.info.js'
import Testauto3 from '../pageobjects/pws.details.js'
import Testauto4 from '../pageobjects/pws.media.js'
import Page from '../pageobjects/sitenav.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await Testauto1.web('')

        await Testauto1.test1()

        await Testauto1.web('')
        
        await Testauto2.test2()

        await Testauto3.web('/app/1290000/PowerWash_Simulator/')

        await Testauto3.test3()

        await Testauto3.web('/app/1290000/PowerWash_Simulator/')

        await Testauto4.test4()
        
    })
})