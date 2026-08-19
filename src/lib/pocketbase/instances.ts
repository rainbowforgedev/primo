import PocketBase from 'pocketbase'
const marketplace_url = import.meta.env.VITE_MARKETPLACE_URL || 'https://main.marketplace.primo.page'
const getPBUrl = () => {
  if (typeof location === 'undefined') return 'http://127.0.0.1:3000'                                   
  if (location.port === '5173') {                                             
    return 'http://localhost:8090' //                                                                   
  }                                                                  
  return location.origin                                                                           
}                                                                             
export const self = new PocketBase(getPBUrl())                                                       
export const marketplace = new PocketBase(marketplace_url)
                                            
