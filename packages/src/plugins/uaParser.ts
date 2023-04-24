import { UAParser } from 'ua-parser-js'
const uaParser = new UAParser()
const ua = uaParser.getUA()
const device = uaParser.getDevice()

export const isMobile = (): boolean => {
  // iPadをモバイル判定にする
  if (ua.match(/iPad;/i)) return true
  if (ua.match(/Macintosh;/i) && 'ontouchstart' in window) return true

  return device.type === 'mobile'
}
