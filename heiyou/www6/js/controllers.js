angular.module('gooeyApp.controllers', [])

.controller('DaysCtrl', function($scope, days) {
  $scope.days = days .all();
  $scope.remove = function(day) {
    days .remove(day);
  };
})
.controller('DayDetailCtrl', function($scope, $stateParams, days) {
  $scope.day = days.get($stateParams.dayId);
  
})
.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, plays) {
    $scope.listaudio = plays.all();
  $scope.remove = function(play) {
    plays .remove(play);
  };


    /*$(function(){
        $('video,audio').mediaelementplayer({
            success: function (mediaElement, domObject) {
                   var audio_src = $("li.current").attr("data-url");
              mediaElement.setSrc(audio_src);
                mediaElement.addEventListener('ended', function (e) {
                    mejsPlayNext(e.target);
                }, false);
              
            },
            keyActions: []
        }); 

        $('.mejs-list li').click(function() {
          console.log('playyyyy');
            $(this).addClass('current').siblings().removeClass('current');
            var audio_src = $(this).attr("data-url");
            $('audio#mejs:first').each(function(){
                this.player.pause();
                this.player.setSrc(audio_src);
                this.player.play();
            });
        });

    }); */



$scope.playpause = function (audio) {
  console.log(audio);
  $scope.fileaudio = audio;
  $timeout(function(){
    $scope.pp();
  },7000);
  
  /*if ($scope.fileaudio === null){
  
  var myAudio = document.getElementById("myAudio");
  if (myAudio.paused) {
    myAudio.play();
  } else {
    myAudio.pause();
  }
}*/
};

  $scope.pp = function()
{
  myAudio.play();
}

   /* function mejsPlayNext(currentPlayer) {
        if ($('.mejs-list li.current').length > 0){ // get the .current song
            var current_item = $('.mejs-list li.current:first'); // :first is added if we have few .current classes
            var audio_src = $(current_item).next().text();
            $(current_item).next().addClass('current').siblings().removeClass('current');
            console.log('if '+audio_src);
        }else{ // if there is no .current class
            var current_item = $('.mejs-list li:first'); // get :first if we don't have .current class
            var audio_src = $(current_item).next().text();
            $(current_item).next().addClass('current').siblings().removeClass('current');
            console.log('elseif '+audio_src);
        }

        if( $(current_item).is(':last-child') ) { // if it is last - stop playing
            $(current_item).removeClass('current');
        }else{
            currentPlayer.setSrc(audio_src);
            currentPlayer.play();
        }
    } */
})
.controller('LoginCtrl', function($scope, $stateParams, plays) {
  //$scope.play = plays.get($stateParams.playId);
});