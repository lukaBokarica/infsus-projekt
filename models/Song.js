import mongoose from 'mongoose';

const songSchema = mongoose.Schema({
    id: Number,
    title: String,
    albumId: Number,
    //artistsIds: Array,
    artistIds: {
        type: [Number],
        default: []
    }
});

const Song = mongoose.model('songs', songSchema);
export default Song;