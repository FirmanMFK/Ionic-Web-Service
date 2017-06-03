angular.module('gooeyApp.controllers', [])

.controller('DaysCtrl', function($scope,$state, gudang){
    $scope.showData = function() {
      gudang.getAll().success(function(data) {
            $scope.tambah_lagu = data;
        }).finally(function() {
            $scope.$broadcast('scroll.refreshComplete');
        });
    };
    $scope.showData();
    
    $scope.reload = function (){
        $state.go('tab.Days');
    };
    
    $scope.delete = function (tambah_lagu){
        gudang.delete(tambah_lagu.id);
        $scope.tambah_lagu.splice($scope.tambah_lagu.indexOf(tambah_lagu),1);
    };
})
.controller('DaysDetailCtrl', function($scope, $stateParams, gudang) {
  $scope.tambah_lagu = gudang.get($stateParams.Id);

})
.controller('DayDetailCtrl', function($scope,$stateParams,$ionicPopup,$ionicModal,$state,gudang){
        
    $scope.showDataId = function() {
      gudang.getId($stateParams.Id).success(function(tambah_lagu) {
            $scope.tambah_lagu = tambah_lagu;
        });
        
    };
    $scope.showDataId();
    
    $scope.back = function (){
        $state.go('tab.Days');
    };
    
})
.controller('EditCtrl', function($scope,$stateParams,$ionicPopup,$ionicModal,$state,gudang){
      
    $scope.showDataId = function() {
      gudang.getId($stateParams.id).success(function(tambah_lagu) {
            $scope.tambah_lagu = tambah_lagu;
        });
        
    };
    $scope.showDataId();
    
    $scope.back = function (){
        $state.go('tab.chats');
    };
    
    $ionicModal.fromTemplateUrl('edit.html', function(modal){
        $scope.taskModal = modal;
    }, {
            scope : $scope,
            animation : 'slide-in-up'   
    });
        
        $scope.showAlert = function(msg) {
            $ionicPopup.alert({
                title: msg.title,
                template: msg.message,
                okText: 'Ok',
                okType: 'button-positive'
            });
          };
    
    $scope.editModal = function(){
            $scope.taskModal.show();
    };
    
    $scope.batal = function(){
            $scope.taskModal.hide();
            $scope.showDataId();
    };
        
    $scope.edit = function(id,artist,image,url,namelagu,lirik){
            if (!id){
                $scope.showAlert({
                    title: "Information",
                    message: "Id Mohon Diisi"
                });
            }else if (!artist){
                $scope.showAlert({
                    title: "Information",
                    message: "Nama Mohon Diisi"
                });
            }else if(!image){
                $scope.showAlert({
                    title: "Information",
                    message: "Jumlah Mohon Diisi"
                });
            }else if(!url){
                $scope.showAlert({
                    title: "Information",
                    message: "Jenis Mohon Diisi"
                });
            }else if(!namelagu){
                $scope.showAlert({
                    title: "Information",
                    message: "Status Mohon Diisi"
                });
            }else if(!lirik){
                $scope.showAlert({
                    title: "Information",
                    message: "Gambar Mohon Diisi"
                });
            }else{
                $scope.id = id;
                $scope.artist = artist;
                $scope.image = image;
                $scope.url = url;
                $scope.namelagu = namelagu;
                $scope.lirik = lirik;
                gudang.update({
                    'id' : id,
                    'artist': artist,
                    'image': image,
                    'url': url,
                    'namelagu': namelagu,
                    'lirik': lirik
                }).success(function(resp){
                $scope.showAlert({
                    title: "Information",
                    message: "Data Telah Tersimpan"
                });
            });

        }
    };
    
})


.controller('TambahCtrl', function($scope,$ionicPopup,gudang){
    $scope.showAlert = function(msg) {
      $ionicPopup.alert({
          title: msg.title,
          template: msg.message,
          okText: 'Ok',
          okType: 'button-positive'
      });
    };
    
    $scope.tambah_lagu={};
    $scope.simpan = function (){
        if (!$scope.tambah_lagu.artist){
            $scope.showAlert({
                title: "Information",
                message: "Nama Penyanyi Mohon Diisi"
            });
        }else if (!$scope.tambah_lagu.image){
            $scope.showAlert({
                title: "Information",
                message: "Cover Lagu Mohon Diisi"
            });
        }else if (!$scope.tambah_lagu.url){
            $scope.showAlert({
                title: "Information",
                message: "Url Musik Mohon Diisi"
            }); 
        }else if (!$scope.tambah_lagu.namelagu){
            $scope.showAlert({
                title: "Information",
                message: "Judul Lagu Mohon Diisi"
            });
        }else if (!$scope.tambah_lagu.lirik){
            $scope.showAlert({
                title: "Information",
                message: "Judul Lagu Mohon Diisi"
            });
        }else{
            gudang.create({
                artist: $scope.tambah_lagu.artist,
                image: $scope.tambah_lagu.image,
                url: $scope.tambah_lagu.url,
                namelagu: $scope.tambah_lagu.namelagu,
                lirik: $scope.tambah_lagu.lirik,

                }).success(function(data){
                $scope.showAlert({
                    title: "Information",
                    message: "Data Telah Tersimpan"
                });
            });
        }
        
    };
       
})
.controller('ChatsCtrl', function($scope,$state, gudang){
    $scope.showData = function() {
      gudang.getAll().success(function(data) {
            $scope.tambah_lagu = data;
        }).finally(function() {
            $scope.$broadcast('scroll.refreshComplete');
        });
    };
    $scope.showData();
    
    $scope.reload = function (){
        $state.go('tab.Chat-detail');
    };
    
    $scope.delete = function (tambah_lagu){
        gudang.delete(tambah_lagu.id);
        $scope.tambah_lagu.splice($scope.tambah_lagu.indexOf(tambah_lagu),1);
    };
})
.controller('ChatDetailCtrl', function($scope, $stateParams, $ionicModal,$ionicPopup, gudang) {
 
    $scope.showDataId = function() {
      gudang.getId($stateParams.Id).success(function(tambah_lagu) {
            $scope.tambah_lagu = tambah_lagu;
        });
        
    };
    $scope.showDataId();
    
    $scope.back = function (){
        $state.go('tab.chats');
    };
    
    $ionicModal.fromTemplateUrl('edit.html', function(modal){
        $scope.taskModal = modal;
    }, {
            scope : $scope,
            animation : 'slide-in-up'   
    });
        
        $scope.showAlert = function(msg) {
            $ionicPopup.alert({
                title: msg.title,
                template: msg.message,
                okText: 'Ok',
                okType: 'button-positive'
            });
          };
    
    $scope.editModal = function(){
            $scope.taskModal.show();
    };
    
    $scope.batal = function(){
            $scope.taskModal.hide();
            $scope.showDataId();
    };
        
    $scope.edit = function(id,artist,image,url,namelagu,lirik){
            if (!id){
                $scope.showAlert({
                    title: "Information",
                    message: "Id Mohon Diisi"
                });
            }else if (!artist){
                $scope.showAlert({
                    title: "Information",
                    message: "Nama Mohon Diisi"
                });
            }else if(!image){
                $scope.showAlert({
                    title: "Information",
                    message: "Jumlah Mohon Diisi"
                });
            }else if(!url){
                $scope.showAlert({
                    title: "Information",
                    message: "Jenis Mohon Diisi"
                });
            }else if(!namelagu){
                $scope.showAlert({
                    title: "Information",
                    message: "Status Mohon Diisi"
                });
            }else if(!lirik){
                $scope.showAlert({
                    title: "Information",
                    message: "Gambar Mohon Diisi"
                });
            }else{
                $scope.id = id;
                $scope.artist = artist;
                $scope.image = image;
                $scope.url = url;
                $scope.namelagu = namelagu;
                $scope.lirik = lirik;
                gudang.update({
                    'id' : id,
                    'artist': artist,
                    'image': image,
                    'url': url,
                    'namelagu': namelagu,
                    'lirik': lirik
                }).then(function(resp) {
                  console.log('Success', resp);
                  $scope.showAlert({
                        title: "Information",
                        message: "Data Telah Diupdate"
                    });
                },function(err) {
                  console.error('Error', err);
                }); 
        }
    };

})

.controller('AccountCtrl', function($scope, $state, gudang) {
    $scope.listaudio = tambah_lagu.all();
  $scope.remove = function(tambah_lagu) {
    gudang.remove(play);
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