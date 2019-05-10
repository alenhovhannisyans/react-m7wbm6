<p align="center">
  <img alt="logo" src="https://github.com/lijinke666/react-music-player/blob/master/assetsImg/logo.png" width="100" max-width="100%">
</p>

<h1 align="center">
react-jinke-music-player
</h1>

<h4 align="center">
:musical_note: Maybe the best beautiful HTML5 responsive player component for react : )
</h4>

<p align="center">
  <a href="https://www.npmjs.com/package/react-jinke-music-player" title="npm">
    <img src="https://img.shields.io/npm/dm/react-jinke-music-player.svg?style=flat-square" alt="npm">
  </a>
  <a href="https://www.npmjs.com/package/react-jinke-music-player" title="npm">
    <img src="https://img.shields.io/npm/l/react-jinke-music-player.svg?style=flat-square" alt="npm">
  </a>
   <a href="https://travis-ci.org/lijinke666/react-music-player" title="Build Status">
    <img src="https://travis-ci.org/lijinke666/react-music-player.svg?branch=master" alt="Build Status">
  </a>
   <a href="https://badge.fury.io/js/react-jinke-music-playerr" title="npm">
    <img src="https://img.shields.io/npm/v/react-jinke-music-player.svg?style=flat-square" alt="npm version">
  </a>
     <a href="https://coveralls.io/github/lijinke666/react-music-player?branch=master" title="Coverage Status">
    <img src="https://coveralls.io/repos/github/lijinke666/react-music-player/badge.svg?branch=master" alt="Coverage Status">
  </a>
</p>



<p align="center">
  <a href="https://github.com/lijinke666/react-music-player/blob/master/CN.md">
    中文文档
  </a>
</p>

## Installation

using `yarn` :

```
yarn add react-jinke-music-player
```

using `npm` :

```
npm install react-jinke-music-player --save
```

## Screenshots

> mini mode <br/>

> ![mini mode](https://github.com/lijinke666/react-music-player/blob/master/assetsImg/mini.png)

> Light Theme <br/>

![light theme](https://github.com/lijinke666/react-music-player/blob/master/assetsImg/light-theme.png)

> Dark Theme <br/>

![dark theme](https://github.com/lijinke666/react-music-player/blob/master/assetsImg/dark-theme.png)

> mobile <br/>

![mobile](https://github.com/lijinke666/react-music-player/blob/master/assetsImg/mobile.jpg)

## Example

> live example : [https://lijinke666.github.io/react-music-player/](https://lijinke666.github.io/react-music-player/)

> practical application : [Jinke.Li's House](http://www.lijinke.cn/)

> local example : [http://localhost:8081/](http://localhost:8081/)

[Source Code](https://github.com/lijinke666/react-music-player/blob/master/example/example.js)

## Usage

```jsx
import React from "react";
import ReactDOM from "react-dom";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

ReactDOM.render(
  <ReactJkMusicPlayer {...options} />,
  document.getElementById("root")
);
```

## API

| Name              | Type                  | Default           | Description |
| ------------ | ------- | ------- | ----------- |
| className         | `string`              | `-`               | Additional CSS class for the root DOM node                                                                                           |
| audioLists        | `object[]`            | `-`               | audio lists model : {name: "YOUR_AUDIO_NAME",singer: "YOUR_AUDIO_SINGER_NAME",cover: "YOUR_AUDIO_COVER",musicSrc: "YOUR_AUDIO_SRC"}  |
| theme             | `string`              | `dark`            | color of the music player theme  `dark` | `light`                                                                                                    |
| defaultPosition   | `object`              | `{top:0,left:0}`  | audio controller initial position with `left,top,right,and bottom` |
| playModeText | `object` | {order: "order",orderLoop: "orderLoop",singleLoop: "singleLoop",shufflePlay:"shufflePlay"}` | play mode text config of the audio player |
| playModeShowTime          | `number`  | `600`            |  play mode toggle show time (ms) |
| bounds          | `object`,`number`  | `body`            |  specifies movement boundaries. Accepted values:  `parent` restricts movement within the node's offsetParent    (nearest node with position relative or absolute), or a selector, restricts movement within the targeted node An object with `left, top, right, and bottom` properties. These indicate how far in each direction the draggable can be moved. |
| preload          | `boolean`,`string`  | `false`            |  Whether to load audio immediately after the page loads. can be set to `auto|metadata|none` `true|false` if `preload=true` preload="auto" |
| remember          | `boolean`  | `false`            |  The next time you access the player, do you keep the last state  |
| glassBg          | `boolean`  | `false`            |  Whether the player's background displays frosted glass effect |
| remove          | `boolean`  | `true`            |  The Audio Can be deleted  |
| defaultPlayIndex          | `number`  | `0`            |  Default play index of the audio player  |
| playIndex          | `number`  | `0`            |  play index of the audio player  |
| openText          | `string`  | `open`            | audio controller open text  |
| closeText         | `string`  | `close`           | audio controller close text |
| panelTitle        | `string`  | `PlayList`        | audio list panel title |
| notContentText    | `string`  | `no music`        | audio list panel show text of the playlist has no songs  |
| checkedText       | `string`  | `-`               | audio theme switch checkedText    |
| unCheckedText     | `string`  | `-`               | audio theme switch unCheckedText  |
| defaultPlayMode   | `string`              | `order`           | default play mode of the audio player options can be set to `order`,`orderLoop`,`singleLoop`,`shufflePlay` or omitted                |
| mode              | `string`              | `mini`            | audio theme switch checkedText can be set to `mini`,`full` or omitted  |
| once              | `boolean`             | `false`           | The default audioPlay handle function will be played again after each pause, If you only want to trigger it once, you can set 'true' |
| autoPlay          | `boolean`             | `true`            | Whether the audio is played after loading is completed.  |
| toggleMode        | `boolean`             | `true`            | Whether you can switch between two modes, full => mini or mini => full   |                                                                                           
| drag              | `boolean`             | `true`            | audio controller is can be drag of the "mini" mode   |
| seeked            | `boolean`             | `true`            | Whether you can drag or click the progress bar to play in the new progress.  |
| showMiniModeCover | `boolean`             | `true`            | audio cover is show of the "mini" mode |
| showMiniProcessBar | `boolean`             | `false`            | audio progress circle bar is show of the "mini" mode |
| showProgressLoadBar | `boolean`             | `true`            | Displays the audio load progress bar. |
| showPlay | `boolean`             | `true`            | play button display of the audio player panel |
| showReload | `boolean`             | `true`            | reload button display of the audio player panel  |
| showDownload | `boolean`             | `true`            | download button display of the audio player panel  |
| showPlayMode | `boolean`             | `true`            | play mode toggle button display of the audio player panel |
| showThemeSwitch | `boolean`             | `true`            | theme toggle switch display of the audio player panel |
| extendsContent | `array`             | `-`            | Extensible custom content like `[<button>button1</button>,<button>button2</button>]` |
| controllerTitle | `string`             | `<FaHeadphones/>`            | audio controller title |
| defaultVolume | `number`             | `100`            | default volume of the audio player , range `0`-`100` |
| loadAudioErrorPlayNext | `boolean`             | `true`            | Whether to try playing the next audio when the current audio playback fails |
| onAudioDownload | `function(audioInfo)` | `-`            | audio is downloaded handle |
| onAudioPlay     | `function(audioInfo)` | `-`            | audio play handle |
| onAudioPause    | `function(audioInfo)` | `-`          | audio pause handle |
| onAudioSeeked   | `function(audioInfo)` | `-`          | When the user has moved/jumped to a new location in audio handle |
| onAudioVolumeChange   | `function(audioInfo)` | `-`          |  When the volume has changed handle min = 0.0 max = 1.0  |
| onAudioEnded   | `function(audioInfo)` | `-`          |  The single song is ended handle |
| onAudioAbort   | `function(audioInfo)` | `-`          |  audio load abort The target event like {...,audioName:xx,audioSrc:xx,playMode:xx}|
| onAudioProgress   | `function(audioInfo)` | `-`          |  audio play progress handle |
| onAudioLoadError   | `function(audioInfo)` | `-`          |  audio load failed error handle |
| onAudioReload  | `function(audioInfo)` | `-`          |  audio reload handle |
| onAudioListsChange  | `function(currentPlayIndex,audioLists,audioInfo)` | `-`          |  audio lists change handle |
| onAudioPlayTrackChange  | `function(currentPlayIndex,audioLists,audioInfo)` | `-`          |  audio current play track change handle |
| onAudioPlayModeChange  | `function(playMode)` | `-`          |  play mode change handle |
| onAudioListsPanelChange  | `function(panelVisible)` | `-`          |  audio lists panel change handle |
| onThemeChange  | `function(theme)` | `-`          |  theme change handle |
| onModeChange  | `function(mode)` | `-`          |  mode change handle |
| onAudioListsDragEnd  | `function(fromIndex,endIndex)` | `-`          |  audio lists drag end handle |


## Development

```
git clone https://github.com/lijinke666/react-music-player.git
yarn | npm install
yarn start | npm start
open `http://localhost:8081/`
```

## Test case

```
npm run test
```

## AudioInfo

> Like This

```js
{
    cover:"xx.jpg"
    currentTime:10.211519
    duration:164.211519
    musicSrc:"xx.mp3"
    name:"Canon (piano version)"
    volume:100,
    muted:false,
    networkState:1,
    readyState:4,
    paused:false,
    ended:false,
    startDate:null,
    played:{length:1}
}
```

## Properties

```jsx
  static propTypes = {
    audioLists: PropTypes.array.isRequired,
    theme: PropTypes.oneOf(['dark', 'light']),
    mode: PropTypes.oneOf(['mini', 'full']),
    drag: PropTypes.bool,
    seeked: PropTypes.bool,
    autoPlay: PropTypes.bool,
    playModeText: PropTypes.object,
    closeText: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    openText: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    panelTitle:PropTypes.string,
    notContentText: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    controllerTitle: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    defaultPosition: PropTypes.shape({
      top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      right: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      bottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    }),
    onAudioPlay: PropTypes.func,
    onAudioPause: PropTypes.func,
    onAudioEnded: PropTypes.func,
    onAudioAbort: PropTypes.func,
    onAudioVolumeChange: PropTypes.func,
    onAudioLoadError: PropTypes.func,
    onAudioProgress: PropTypes.func,
    onAudioSeeked: PropTypes.func,
    onAudioDownload: PropTypes.func,
    onAudioReload: PropTypes.func,
    onThemeChange:PropTypes.func,
    onAudioListsChange: PropTypes.func,
    onAudioPlayTrackChange: PropTypes.func,
    onAudioPlayModeChange: PropTypes.func,
    onModeChange: PropTypes.func,
    onAudioListsPanelChange: PropTypes.func,
    onAudioListsDragEnd: PropTypes.func,
    showProgressLoadBar:PropTypes.bool,
    showDownload: PropTypes.bool,
    showPlay: PropTypes.bool,
    showReload: PropTypes.bool,
    showPlayMode: PropTypes.bool,
    showThemeSwitch: PropTypes.bool,
    showMiniModeCover: PropTypes.bool,
    toggleMode: PropTypes.bool,
    once: PropTypes.bool,
    extendsContent: PropTypes.array,
    checkedText: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    unCheckedText: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    defaultVolume:PropTypes.number,
    playModeShowTime: PropTypes.number,
    bounds: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    showMiniProcessBar: PropTypes.bool,
    loadAudioErrorPlayNext: PropTypes.bool,
    preload: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(["auto", "metadata", "none"])
    ]),
    glassBg: PropTypes.bool,
    remember: PropTypes.bool,
    remove: PropTypes.bool,
    defaultPlayIndex: PropTypes.number
  }
```

## License

[MIT](https://github.com/lijinke666/react-music-player/blob/master/LICENCE)
