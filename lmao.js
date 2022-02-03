const fetch = require("node-fetch");
const fs = require("fs");
const colors = require("colors/safe");
const readline = require("readline-sync");



async function genAccounts(numb){


    for(var f=0;f<numb;f++){
        const xde = await fetch(`https://test.restapiv1.it/genChart?numb=${6}`, {
            method: "GET"
        })
        const nick = await xde.text();
        const ded = await fetch(`https://test.restapiv1.it/genChart?numb=${10}`, {
        method: "GET"
       })
        const pwd = await ded.text();
        const daa = await fetch(`https://test.restapiv1.it/genChart?numb=${8}`, {
        method: "GET"
        })
        const ee = await daa.text();
        const email = ee+"@gmail.com";

  const createSpotifyAccount = await fetch("https://spclient.wg.spotify.com/signup/public/v1/account", {
        method: "POST",
        headers: {
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "it-IT,it;q=0.9",
            "content-length": "357",
            "content-type": "application/x-www-form-urlencoded",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",
            "accept": "*/*",
            "origin": "https://www.spotify.com"
        },
        body: `birth_day=6&birth_month=07&birth_year=1992&collect_personal_info=undefined&creation_flow=&creation_point=https%3A%2F%2Fwww.spotify.com%2Fuk%2F&displayname=${nick}&gender=male&iagree=1&key=a1e486e2729f46d6bb368d6b2bcda326&platform=www&referrer=&send-email=1&thirdpartyemail=0&email=${email}&password=${pwd}&password_repeat=${pwd}&fb=0`

    })
    const ciccionimorti = await createSpotifyAccount.json();
    if(ciccionimorti.status == 1){
        console.log("")
        console.log(colors.green(`[+] Email : ${email}`));
        console.log(colors.green(`[+] Password : ${pwd}`));
        console.log("")
    } else  {
        console.log(colors.red(`[-] idk contact bobakabona#6969`));
    }
    const saveFile = fs.createWriteStream('accounts.txt', {
        flags: "a"
    })
    saveFile.write(`Email : ${email}`);
    saveFile.write("");
    saveFile.write(` Password : ${pwd}\n`);
    saveFile.write("");

    }
   
    
}
console.log(colors.yellow("[+] Thanks for using this gen made by https://github.com/bobakabona"))
console.log("")
const cc = readline.question("[?] How many accounts you want to gen ? ");
genAccounts(cc)

