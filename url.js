

let urldecipher = (code) => {
    let domainName = url
    let domain = ''
    
    if (domainName.includes("https://")){
       domainName = domainName.replace("https://", "")
    }

    if (domainName.includes("http://")){
        domainName = domainName.replace("http://", "")
    }

    if (domainName.includes("www.")){
        domainName = domainName.replace("www.", "")
    }
    
    for (i = 0; i < domainName.length; i++){
        
        if(domainName[i] === "."){
            return console.log(domain)
        }
        domain += domainName[i]
    }

    return console.log(domainName)

}


urldecipher("http://google.co.jp")
urldecipher("http://www.b1zdro1.fr/warez/")