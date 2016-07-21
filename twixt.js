var select = require("twixt-select");

module.exports = {
    chain: require("twixt-chain"),
    class: require("twixt-class"),
    click: select.into(require("twixt-click")),
    document: require("twixt-document"),
    EventTarget: require("twixt-event-target"),
    handle: select.into(require("twixt-handle")),
    Mutant: require("twixt-mutant"),
    mutation: require("twixt-mutation"),
    MutationEvent: require("twixt-mutation-event"),
    select: select,
    submit: select.into(require("twixt-submit"))
};
