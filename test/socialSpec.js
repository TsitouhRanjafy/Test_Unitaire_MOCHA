// importation de expect 
import { assert, expect } from "chai";
// importation de l'objet social 
import social from '../lib/social.js';
// importation de sinon.js
import Sinon from "sinon";



let url = "https://grafikart.fr"

describe('Social',function(){

    // tester si on a le url
    describe('#should have url',function(){
        // test si l'objet socila avait le propriété twitter_url
        it('should have twitter_url',function(){
            // tester socail est un objet
            assert.isObject(social,'c\'est n\'est pas un objet');
            // tester si l'objet social avait le propriété test
            expect(social).to.have.property("test");
            // tester si social avait le propriété twitter_url
            expect(social).to.have.property('twitter_url');
        })

        // test si l'objet socila avait le propriété facebook_url
        it('should have facebook_url',function(){
            expect(social).to.have.property('facebook_url');
        })
    })

    // methode getTwitterCount pour compter combien de fois un lien est partager sur twitter
    describe('#getTwitterCount',function(){

        // tester permierment si social.getTwitterCount est un fonction
        it('should a function',function(){
            expect(social.getTwitterCount).to.be.a('function');
            expect(social.callAPI).to.be.a('function');
        })
        // test si la fonction callAPI est appeller un fois
        it('should call callAPI',function(){
            // Créer un espion qui va se greffer sur un methode de notre objet 
            // Nous , on espione callAPI
            Sinon.spy(social,'callAPI')
            // Maintenant, on va appeller le fonction getTwitterCount 
            social.getTwitterCount(url);
            // le getTwitterCount est un fonction qui appel callAPI
            // donc callAPI est appeller un fois, calledOnce doit être true
            expect(social.callAPI.calledOnce).to.be.true;
            // tester si la fonction callAPI était appeller avec cette paramètre
            expect(social.callAPI.calledOnceWith(social.twitter_url + url)).to.be.true

        })
        //
        it('should return count',function(done){
            // fonction promesse ne s'arrête pas si on ne dit pas fini ou done
            // les fonction asynchrone a toujours besoin de done();
            social.getTwitterCount(url).then((result) =>{
                expect(result).to.be.equal(`<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <link rel="shortcut icon" href="../images/favicon.ico">
    <link rel="stylesheet" href="../css/common.css"/>
    <link rel="stylesheet" href="../css/home.css"/>
    <script type="text/javascript" src="../lib/jquery-1.12.4.js"></script>
    <script type="text/javascript" src="../lib/json_parse.js"></script>
    <script type="text/javascript" src="../lib/json2.js"></script>
    <script type="text/javascript" src="../js/languagemanage.js"></script>
    <script type="text/javascript" src="../js/tools.js"></script>
    <script type="text/javascript" src="../js/md5.js"></script>
    <script type="text/javascript" src="../js/common.js"></script>
    <script type="text/javascript" src="../js/home.js"></script>
    <title></title>
</head>
<body>
<div class="bigDiv">
    <div id="header" class="header"></div>
    <div class="content clearfix">
        <div class="content-left">
            <div id="menu-left" class="menu-left">
                <div id="home"></div>
            </div>
        </div>
        <div class="right-title-home">
            <script type="text/javascript">getText(menu_main_home)</script>
        </div>
        <div class="content-right">
            <div class="right-content">
                <div class="inner">
                    <div>
                        <table class="switch">
                            <tr>
                                <td rowspan="2" width="210"><img id="netStatusimg" src=""  alt="" id="dataSwitch"/></td>
                                <td id="operatorName"></td>
                            </tr>
                            <tr>
                                <td id="networkStatus"valign="top"></td>
                            </tr>
                        </table>
                    </div>
                    <div class="rateDiv">
                        <table class="rate">
                            <tr>
                                <td width="170" rowspan="2" id="connectionUptime" style="background: url('../images/time.png') no-repeat center left 40px;background-size: 20px 20px;padding-left: 70px"></td>
                                <td id="transmitRate"style="background: url('../images/transmit.png') no-repeat center left 60px;background-size: 20px 20px;padding-left: 90px"></td>
                            </tr>
                            <tr>
                                <td id="receiveRate"style="background: url('../images/receive.png') no-repeat center left 60px;background-size: 20px 20px;padding-left: 90px"></td>
                            </tr>
                        </table>
                    </div>
                    <div class="modeDiv">
                        <table class="mode">
                            <tr>
                                <td width="210"><img id="signal-simg1" src="" alt="" width="60"/></td><td colspan="2" id="connectMode"></td>
                            </tr>
                        </table>
                    </div>
                    <div class="clientsDiv">
                        <table class="clients">
                            <tr>
                                <td width="210" rowspan="2"><img src="../images/clients.png" alt="" width="60"/></td>
                                <td valign="bottom"><script type="text/javascript">getText(str_home_connected)</script></td>
                            </tr>
                            <tr>
                                <td valign="top"><input type="button" class="clients_btn" id="clinetnum"/></td>
                            </tr>
                        </table>
                    </div>
                    <div class="clientsDiv">
                        <table class="mode">
                            <tr>
                                <td width="210" id="battery_img"><img src="" alt="" width="80"/></td><td colspan="2" style="font-size:26px;" id="battery_status"></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="footer" class="footer"></div>
</div>
<noscript>
    <div class="noscript_text">
        Your browser does not support JavaScript.
    </div>
</noscript>
</body>
</html>`)
                done();
            })
               
        })


    })
})