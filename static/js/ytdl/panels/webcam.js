/*
  Copyright 2012 Google Inc. All Rights Reserved.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

define(['jquery', '../utils', '../constants', '../globals', '../config'], function($, utils, constants, globals, config) {
  return {
    needsPlaylist: true,
    init: function() {
      window.onYouTubeUploadWidgetReady = function() {
        new YT.UploadWidget('webcam-widget', {
          webcamOnly: true,
          events: {
            onApiReady: function(event) {
              event.target.setVideoTitle(config.VIDEO_TITLE || constants.WEBCAM_VIDEO_TITLE);
              event.target.setVideoDescription(config.VIDEO_DESCRIPTION || constants.WEBCAM_VIDEO_DESCRIPTION);
              event.target.setVideoKeywords([utils.generateKeywordFromPlaylistId(globals.hashParams.playlist)]);
            },
            onUploadSuccess: function(event) {
              utils.showMessage('Your webcam submission was received.');
            }
          }
        });
      };

      $.getScript('//www.youtube.com/upload_embed');
    }
  };
});