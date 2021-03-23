const containers = {
    overlay :'ContentWallHardsell',
    PageContent:'PageContent',
    login:'HardsellOverlay'
}
try{
    document.getElementById(containers.login).style.display = "none"
}catch(err){
    console.log("NOT LOGIN PAGE")
}

try{
    document.getElementById(containers.overlay).style.display = "none"
}catch(err){
    console.log("NOT OVERLAY PAGE")
}

document.getElementById(containers.PageContent).style.height = "70vh"
document.getElementById(containers.PageContent).style['overflow-y'] = "scroll"