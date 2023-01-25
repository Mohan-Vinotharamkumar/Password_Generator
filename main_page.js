function call_element()
{
    let range_bar = document.getElementById('rangescale');  
    let x = range_bar.value;
    
    generate_pass(x);
}

function generate_pass(x)
{
    var password = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    var charactersLength = characters.length;
    for ( var i = 0; i < x; i++ ) {
        password = password + characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    document.getElementById('pass').innerHTML = password;
}

