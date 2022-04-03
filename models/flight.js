const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const flightSchema = new Schema ({
    airline: {
        type: String,
        enum: ['American','Delta', 'Southwest', 'United']
    },
    airport: {
        default: 'DEN',
        type: String,
        enum: ['ATL', 'DFW', 'DEN', 'LAX', ]
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function() {
            return (new Date().getFullYear +1)
        }
    }
    //destination.[destinationSchema]

});


//compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);