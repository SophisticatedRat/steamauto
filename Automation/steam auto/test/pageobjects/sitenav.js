import { browser } from '@wdio/globals'

export default class site {
    web (path) {
        return browser.url(`https://store.steampowered.com/${path}`)
    }
}
