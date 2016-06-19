var select = require("twixt-select");

module.exports = {
    document: require("twixt-document"),
    handle: select.into(require("twixt-handle")),
    select: select
};
