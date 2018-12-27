const ccxt = require('ccxt');
const EmailService = require('./EmailService');
const log = require('./logger');

const bitfinex = new ccxt.bitfinex();

const emailService = new EmailService('gmail', {
    user: 'nodelibotli@gmail.com',
    pass: 'nodeli2018'
})

emailService.sendMail('last update from nodeli', 'nodeli is growing even more!');

let counter = 1;

const startPolling = async () => {
    try {
        let bitfinex_prices = await bitfinex.fetchTicker('BTC/USD');
        log.info(`--> REQUEST ${counter}: `, bitfinex_prices);
    } catch(err) {
        log.error(`--> REQUEST ${counter}: `, err);
    }
    counter++;
};

setInterval(startPolling, 300000);

export default counter;
