/**
* Artist.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
      name:{
          type: 'string',
          required: true
      },
      songCount:{
          type:'number'
      },
      songs:{
          collection: 'song',
          via: 'artist'
      },
      numberOfSongs: function(){
          return songs.length;
      }
  }
};

