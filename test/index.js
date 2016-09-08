'use strict';


let baraja = require('../lib'),
    should = require('should');

it('Two strings', done => {

    let string = baraja.weave([
        'hello',
        'developer'
    ]);

    should(string).equal('hdeelvleoloper');
    done();
});

it('Three strings', done => {

    let string = baraja.weave([
        'hello',
        'developer',
        'friends'
    ]);

    should(string).equal('hdfeerlvileeolnopders');
    done();
});

it('Three strings, with ascending sort', done => {

    let string = baraja.weave([
        'hello',
        'developer',
        'friends'
    ], 'asc');

    should(string).equal('hfderelivleeonldsoper');
    done();
});

it('Three strings, with descending sort', done => {

    let string = baraja.weave([
        'hello',
        'developer',
        'friends'
    ], 'desc');

    should(string).equal('dfherevileellnoodpser');
    done();
});

it('Cross three names', done => {

    let cross = baraja.across([
            'peter',
            'paul',
            'merry'
        ]),
        keys = Object.keys(cross);

    should(keys[0]).equal('merry');
    should(keys[1]).equal('paul');
    should(keys[2]).equal('peter');
    done();
});