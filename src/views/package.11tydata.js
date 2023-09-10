module.exports = {
    layout: 'base.njk',
    
    pagination: {
        data: 'packages',
        size: 1,
        alias: 'package'
    },

    permalink: function (data) {
        return data.package + "/"
    },
}