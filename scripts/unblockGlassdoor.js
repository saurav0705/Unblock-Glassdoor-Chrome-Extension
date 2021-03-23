const containers = {
    overlay :'ContentWallHardsell',
    PageContent:'PageContent',
    login:'HardsellOverlay'
}
try{

    document.getElementById(containers.login).style.display = "none"
    document.getElementById(containers.overlay).style.display = "none"
}catch(err){
    console.log({err})
}

document.getElementById(containers.PageContent).style.height = "70vh"
document.getElementById(containers.PageContent).style['overflow-y'] = "scroll"