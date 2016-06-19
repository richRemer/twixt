var select = require("twixt-select");

module.exports = {
    click: select.into(require("twixt-click")),
    document: require("twixt-document"),
    EventTarget: require("twixt-event-target"),
    handle: select.into(require("twixt-handle")),
    select: select
};
