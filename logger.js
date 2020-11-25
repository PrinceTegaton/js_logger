let is_active = true;

const logtype = {
    "default": 1,
    "info": 2,
    "warning": 3,
    "error": 4,
    "exception": 5,
    "debug": 6,
    "table": 7
};

function log(data, type = logtype.default) {
    if (!is_active) return;

    try {
        switch (type) {
            case logtype.default:
                return console.log(data);
            case logtype.info:
                return console.info(data);
            case logtype.warning:
                return console.warn(data);
            case logtype.error:
                return console.error(data);
            case logtype.exception:
                return console.exception(data);
            case logtype.debug:
                return console.debug(data);
            case logtype.table:
                return console.table(data);
        }
    } catch (ex) {
        console.log(data);
    }
}

function info(data) {
    if (is_active) console.info(data);
}

function warning(data) {
    if (is_active) console.warn(data);
}

function error(data) {
    if (is_active) console.error(data);
}

function exception(data) {
    if (is_active) console.exception(data);
}

function debug(data) {
    if (is_active) console.debug(data);
}

function table(data) {
    if (is_active) console.table(data);
}