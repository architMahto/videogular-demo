;(function() {
  'use strict';

  angular.module('myControllers', [])
    .controller('videoController', videoController);

  videoController.$inject = ['$sce'];

  function videoController($sce) {
    var videoCtrl = this;

    videoCtrl.API = null;

    videoCtrl.onPlayerReady = function (API) {
      videoCtrl.API = API;
    };

    videoCtrl.videos = [
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/Mr+Bean+1+-+Mr+Bean.webm"),
            type: "video/webm"
          }
        ],
        poster: "https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/mrbean1.png",
        title: "Mr. Bean"
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/Mr+Bean+2+-+The+Return+Of+Mr+Bean.webm"),
            type: "video/webm"
          }
        ],
        poster: "https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/mrbean2.png",
        title: "The Return of Mr. Bean"
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/Mr+Bean+3+-+The+Curse+Of+Mr+Bean.webm"),
            type: "video/webm"
          }
        ],
        poster: "https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/mrbean3.png",
        title: "The Curse of Mr. Bean"
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/Mr+Bean+4+-+Mr+Bean+Goes+To+Town.webm"),
            type: "video/webm"
          }
        ],
        poster: "https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/mrbean4.png",
        title: "Mr. Bean Goes to Town"
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/Mr+Bean+5+-+The+Trouble+With+Mr+Bean.webm"),
            type: "video/webm"
          }
        ],
        poster: "https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/mrbean5.png",
        title: "The Trouble with Mr. Bean"
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/Mr+Bean+6+-+Mr+Bean+Rides+Again.webm"),
            type: "video/webm"
          }
        ],
        poster: "https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/mrbean6.png",
        title: "Mr. Bean Rides Again"
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/Mr+Bean+7+-+Merry+Christmas+Mr+Bean.webm"),
            type: "video/webm"
          }
        ],
        poster: "https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/mrbean7.png",
        title: "Merry Christmas, Mr. Bean"
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/Mr+Bean+8+-+Mr+Bean+In+Room+426.webm"),
            type: "video/webm"
          }
        ],
        poster: "https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/mrbean8.png",
        title: "Mr. Bean in Room 426"
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/Mr+Bean+9+-+Do-It-Yourself+Mr+Bean.webm"),
            type: "video/webm"
          }
        ],
        poster: "https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/mrbean9.png",
        title: "Do-It-Yourself Mr. Bean"
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/Mr+Bean+10+-+Mind+The+Baby+Mr+Bean.webm"),
            type: "video/webm"
          }
        ],
        poster: "https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/mrbean10.png",
        title: "Mind the Baby, Mr. Bean"
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/Mr+Bean+11+-+Back+To+School+Mr+Bean.webm"),
            type: "video/webm"
          }
        ],
        poster: "https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/mrbean11.png",
        title: "Back to School Mr. Bean"
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/Mr+Bean+12+-+Tee+Off%2C+Mr+Bean.webm"),
            type: "video/webm"
          }
        ],
        poster: "https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/mrbean12.png",
        title: "Tee Off, Mr. Bean"
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/Mr+Bean+13+-+Goodnight+Mr+Bean.webm"),
            type: "video/webm"
          }
        ],
        poster: "https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/mrbean13.png",
        title: "Goodnight Mr. Bean"
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/Mr+Bean+14+-+Hair+By+Mr+Bean+Of+London.webm"),
            type: "video/webm"
          }
        ],
        poster: "https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/mrbean14.png",
        title: "Hair by Mr. Bean of London"
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/Mr+Bean+15+-+The+Best+Bits+of+Mr+Bean.webm"),
            type: "video/webm"
          }
        ],
        poster: "https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/mrbean15.png",
        title: "The Best Bits of Mr. Bean"
      }
    ];

    videoCtrl.config = {
      autoHide: false,
      autoHideTime: 3000,
      autoPlay: false,
      sources: videoCtrl.videos[0].sources,
      theme: "bower_components/videogular-themes-default/videogular.css",
      plugins: {
        poster: videoCtrl.videos[0].poster
      }
    };

    videoCtrl.setVideo = function(index) {
      videoCtrl.API.stop();
      videoCtrl.config.sources = videoCtrl.videos[index].sources;
      videoCtrl.config.plugins.poster = videoCtrl.videos[index].poster;
    };
  }
}())
