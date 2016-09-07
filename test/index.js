'use strict';


let baraja = require('../lib'),
    should = require('should');

it('Two strings', done => {

    let string = baraja.fromArray([
        'hello',
        'developer'
    ]);

    should(string).equal('hdeelvleoloper');
    done();
});

it('Three strings', done => {

    let string = baraja.fromArray([
        'hello',
        'developer',
        'friends'
    ]);

    should(string).equal('hdfeerlvileeolnopders');
    done();
});

it('Three strings, with ascending sort', done => {

    let string = baraja.fromArray([
        'hello',
        'developer',
        'friends'
    ], 'asc');

    should(string).equal('hfderelivleeonldsoper');
    done();
});

it('Three strings, with descending sort', done => {

    let string = baraja.fromArray([
        'hello',
        'developer',
        'friends'
    ], 'desc');

    should(string).equal('dfherevileellnoodpser');
    done();
});