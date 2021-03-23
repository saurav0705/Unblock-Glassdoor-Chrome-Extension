let contextMenus = {}

contextMenus.createContextForGlassdoor = chrome.contextMenus.create({title:'Unblock Glassdoor'}, ()=>{
    if(chrome.runtime.lastError){
        console.error(chrome.runtime.lastError.message)
    }
})

const contextMenuHandler = (info,tab) => {
    console.log({info})
    if(info.menuItemId ===  contextMenus.createContextForGlassdoor){
        console.log('YOU HVAE UNBLOCKED GLASSDOOR');
        chrome.tabs.executeScript({
            file:'scripts/unblockGlassdoor.js'
        })
    }
}
chrome.contextMenus.onClicked.addListener(contextMenuHandler)
