function menushow(){
    document.getElementById( `menusidebar` ).classList.toggle( `active` );
}
function loginshow(){
    document.getElementById( `login` ).classList.toggle( `active` );
}
function passToggle() {
    if(document.getElementById( `password` ).type === `password`) {
        document.getElementById( `password` ).type = `text`;
        document.getElementById( `passwordeye` ).classList.add ( `fa-eye` )
        document.getElementById( `passwordeye` ).classList.remove ( `fa-eye-slash` )
    } else {
        document.getElementById( `password` ).type = `password`;
        document.getElementById( `passwordeye` ).classList.remove ( `fa-eye` )
        document.getElementById( `passwordeye` ).classList.add ( `fa-eye-slash` )
    }
}