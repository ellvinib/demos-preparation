var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


var Dier = (function () {
    function Dier(naam) {
        this.naam = naam;
    }
    Dier.prototype.loop = function (meters) {
        if (meters === null) {
            meters = 0;
        }
        console.log(this.naam + " liep " + meters + " meter(s)");
    };
    return Dier;
}());

var Kat = (function (_dier) {
    __extends(Kat, _dier);
    function Kat(naam) {
        _dier.call(this, naam);
    }
    Kat.prototype.loop = function (meters) {
        if (meters === null) { meters = 0; }
        console.log("Miauw Miauw....");
        _dier.prototype.loop.call(this, meters);
    };
    return Kat;
}(Dier));


var kat = new Kat("Twiggy");
kat.loop(2);
