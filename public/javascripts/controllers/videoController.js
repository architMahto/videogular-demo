;(function() {
  'use strict';

  angular.module('myControllers', [])
    .controller('videoController', videoController);

  videoController.$inject = ['$sce'];

  function videoController($sce) {
    var videoCtrl = this;

    videoCtrl.API = null;
    videoCtrl.currentIndex = 0;

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
        title: "Mr. Bean",
        synopsis: "Bean writes a maths exam; goes for an outing at the beach; and struggles to stay awake at church."
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/Mr+Bean+2+-+The+Return+Of+Mr+Bean.webm"),
            type: "video/webm"
          }
        ],
        poster: "https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/mrbean2.png",
        title: "The Return of Mr. Bean",
        synopsis: "Bean tries out his new credit card at a department store; visits a restaurant; and attends a premiere."
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/Mr+Bean+3+-+The+Curse+Of+Mr+Bean.webm"),
            type: "video/webm"
          }
        ],
        poster: "https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/mrbean3.png",
        title: "The Curse of Mr. Bean",
        synopsis: "Bean visits the local swimming pool; gets stuck at a car park; enjoys an outing at the park, and watches a horror movie with his girlfriend."
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/Mr+Bean+4+-+Mr+Bean+Goes+To+Town.webm"),
            type: "video/webm"
          }
        ],
        poster: "https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/mrbean4.png",
        title: "Mr. Bean Goes to Town",
        synopsis: "Bean tries out his new television set; gets his camera stolen at the park; hops around town to get back his show; and goes out on a date with his girlfriend."
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/Mr+Bean+5+-+The+Trouble+With+Mr+Bean.webm"),
            type: "video/webm"
          }
        ],
        poster: "https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/mrbean5.png",
        title: "The Trouble with Mr. Bean",
        synopsis: "Bean rushes for a dentist appointment after sleeping in; leaves a lasting impact on his dentist; helps a young boy with his remote control boat; and struggles to enjoy his picnic."
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/Mr+Bean+6+-+Mr+Bean+Rides+Again.webm"),
            type: "video/webm"
          }
        ],
        poster: "https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/mrbean6.png",
        title: "Mr. Bean Rides Again",
        synopsis: "Bean deals with a man suffering from a heart attack; struggles to post a letter; and goes on a trip."
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/Mr+Bean+7+-+Merry+Christmas+Mr+Bean.webm"),
            type: "video/webm"
          }
        ],
        poster: "https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/mrbean7.png",
        title: "Merry Christmas, Mr. Bean",
        synopsis: "Bean finds a nativity scene and gives his own take; and prepares for a relaxing Christmas dinner with his girlfriend."
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/Mr+Bean+8+-+Mr+Bean+In+Room+426.webm"),
            type: "video/webm"
          }
        ],
        poster: "https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/mrbean8.png",
        title: "Mr. Bean in Room 426",
        synopsis: "Bean treats himself to a weekend in a hotel and seeks competition with his hotel neighbour. A competition that leaves him in a less than flattering situation."
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/Mr+Bean+9+-+Do-It-Yourself+Mr+Bean.webm"),
            type: "video/webm"
          }
        ],
        poster: "https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/mrbean9.png",
        title: "Do-It-Yourself Mr. Bean",
        synopsis: "Bean enjoys a New Year's Eve celebration with his friends and goes on a DIY shopping spree."
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/Mr+Bean+10+-+Mind+The+Baby+Mr+Bean.webm"),
            type: "video/webm"
          }
        ],
        poster: "https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/mrbean10.png",
        title: "Mind the Baby, Mr. Bean",
        synopsis: "While visiting Southsea, Bean accidentally becomes lumbered with a baby, with no idea of how or where it came from."
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/Mr+Bean+11+-+Back+To+School+Mr+Bean.webm"),
            type: "video/webm"
          }
        ],
        poster: "https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/mrbean11.png",
        title: "Back to School Mr. Bean",
        synopsis: "Bean attends an open day at a school and unleashes his usual brand of chaos in the various classes he visits."
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/Mr+Bean+12+-+Tee+Off%2C+Mr+Bean.webm"),
            type: "video/webm"
          }
        ],
        poster: "https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/mrbean12.png",
        title: "Tee Off, Mr. Bean",
        synopsis: "Bean causes chaos at a laundrette and miniature golf."
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/Mr+Bean+13+-+Goodnight+Mr+Bean.webm"),
            type: "video/webm"
          }
        ],
        poster: "https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/mrbean13.png",
        title: "Goodnight Mr. Bean",
        synopsis: "Bean is in a rush at the hospital; has his own brand of fun with a Queen's Guard; and uses some unusual methods to cure his insomnia."
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/Mr+Bean+14+-+Hair+By+Mr+Bean+Of+London.webm"),
            type: "video/webm"
          }
        ],
        poster: "https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/mrbean14.png",
        title: "Hair by Mr. Bean of London",
        synopsis: "Bean takes over for a hairdresser; attends a fete; and loses his ticket at a train station."
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/Mr+Bean+15+-+The+Best+Bits+of+Mr+Bean.webm"),
            type: "video/webm"
          }
        ],
        poster: "https://s3-us-west-2.amazonaws.com/tellynet/ITV/Mr.+Bean/Episodes/mrbean15.png",
        title: "The Best Bits of Mr. Bean",
        synopsis: "On a rainy day, Bean tries to find an umbrella for Teddy."
      }
    ];

    videoCtrl.config = {
      autoHide: false,
      autoHideTime: 3000,
      autoPlay: true,
      sources: videoCtrl.videos[0].sources,
      theme: "bower_components/videogular-themes-default/videogular.css",
      plugins: {
        poster: videoCtrl.videos[0].poster
      }
    };

    videoCtrl.setVideo = function(index) {
      videoCtrl.currentIndex = index;
      videoCtrl.API.stop();
      videoCtrl.config.sources = videoCtrl.videos[index].sources;
      videoCtrl.config.plugins.poster = videoCtrl.videos[index].poster;
    };

    videoCtrl.onComplete = function() {
      if (videoCtrl.currentIndex === videoCtrl.videos.length - 1) {
        videoCtrl.currentIndex = 0;
      } else {
        videoCtrl.currentIndex++;
      }
      videoCtrl.config.sources = videoCtrl.videos[videoCtrl.currentIndex].sources;
      videoCtrl.config.plugins.poster = videoCtrl.videos[videoCtrl.currentIndex].poster;
    }
  }
}())
