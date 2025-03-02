import React from 'react';
import { FormattedMessage } from 'react-intl';

import externalExtensionIconURL from './externalExtension/external-extension.png';
import externalExtensionInsetIconURL from './externalExtension/external-extension-small.svg';

import musicIconURL from './music/music.png';
import musicInsetIconURL from './music/music-small.svg';

import penIconURL from './pen/pen.png';
import penInsetIconURL from './pen/pen-small.svg';

import videoSensingIconURL from './videoSensing/video-sensing.png';
import videoSensingInsetIconURL from './videoSensing/video-sensing-small.svg';

import text2speechIconURL from './text2speech/text2speech.png';
import text2speechInsetIconURL from './text2speech/text2speech-small.svg';

import translateIconURL from './translate/translate.png';
import translateInsetIconURL from './translate/translate-small.png';

import makeymakeyIconURL from './makeymakey/makeymakey.png';
import makeymakeyInsetIconURL from './makeymakey/makeymakey-small.svg';

import microbitIconURL from './microbit/microbit.png';
import microbitInsetIconURL from './microbit/microbit-small.svg';
import microbitConnectionIconURL from './microbit/microbit-illustration.svg';
import microbitConnectionSmallIconURL from './microbit/microbit-small.svg';

import ev3IconURL from './ev3/ev3.png';
import ev3InsetIconURL from './ev3/ev3-small.svg';
import ev3ConnectionIconURL from './ev3/ev3-hub-illustration.svg';
import ev3ConnectionSmallIconURL from './ev3/ev3-small.svg';

import wedo2IconURL from './wedo2/wedo.png'; // TODO: Rename file names to match variable/prop names?
import wedo2InsetIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionIconURL from './wedo2/wedo-illustration.svg';
import wedo2ConnectionSmallIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionTipIconURL from './wedo2/wedo-button-illustration.svg';

import boostIconURL from './boost/boost.png';
import boostInsetIconURL from './boost/boost-small.svg';
import boostConnectionIconURL from './boost/boost-illustration.svg';
import boostConnectionSmallIconURL from './boost/boost-small.svg';
import boostConnectionTipIconURL from './boost/boost-button-illustration.svg';

import gdxforIconURL from './gdxfor/gdxfor.png';
import gdxforInsetIconURL from './gdxfor/gdxfor-small.svg';
import gdxforConnectionIconURL from './gdxfor/gdxfor-illustration.svg';
import gdxforConnectionSmallIconURL from './gdxfor/gdxfor-small.svg';

import smartLumiesIconURL from './smart-lumies/smart-lumies.png';
import smartLumiesInsetIconURL from './smart-lumies/smart-lumies-small.svg';
import smartLumiesConnectionIconURL from './smart-lumies/smart-lumies-illustration.svg';
import smartLumiesConnectionSmallIconURL from './smart-lumies/smart-lumies-small.svg';
import smartLumiesConnectionTipIconURL from './smart-lumies/smart-lumies-button-illustration.svg';

import httpIconURL from './http/http.png';
import httpInsetIconURL from './http/http-small.svg';

import physicsIconURL from './physics/physics.png';
import physicsInsetIconURL from './physics/physics-small.svg';

import matatabotIconURL from './matatabot/matatabot.png';
import matatabotInsetIconURL from './matatabot/matatabot-small.svg';
import matatabotConnectionIconURL from './matatabot/matatabot-illustration.svg';
import matatabotConnectionSmallIconURL from './matatabot/matatabot-small.svg';

import midiIconURL from './midi/midi.png';
import midiInsetIconURL from './midi/midi-small.svg';

import spikePrimeIconURL from './spikePrime/spikePrime.png';
import spikePrimeInsetIconURL from './spikePrime/spikePrime-small.svg';
import spikePrimeConnectionIconURL from './spikePrime/spikePrime-illustration.svg';
import spikePrimeConnectionSmallIconURL from './spikePrime/spikePrime-small.svg';

import futureBoardIconURL from './futureBoard/futureBoard.png';
import futureBoardInsetIconURL from './futureBoard/futureBoard-small.svg';

import minecraftIconURL from './minecraft/minecraft.png';
import minecraftInsetIconURL from './minecraft/minecraft-small.svg';

import toolboxIconURL from './toolbox/toolbox.png';
import toolboxInsetIconURL from './toolbox/toolbox-small.svg';

import iCarProIconURL from './iCarPro/iCarPro.png';
import iCarProInsetIconURL from './iCarPro/iCarPro-small.svg';

import snapCircuitsU33IconURL from './snapCircuitsU33/snapCircuitsU33.png';
import snapCircuitsU33InsetIconURL from './snapCircuitsU33/snapCircuitsU33-small.svg';

import magicBlueUUIconURL from './magicBlueUU/magicBlueUU.png';
import magicBlueUUInsetIconURL from './magicBlueUU/magicBlueUU-small.svg';


export default [
    {
        name: (
            <FormattedMessage
                defaultMessage="External Extension"
                description="Name for the extension loader selector"
                id="gui.extension.externalExtension.name"
            />
        ),
        iconURL: externalExtensionIconURL,
        insetIconURL: externalExtensionInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Load extension from the Internet."
                description="Description for the extension loader selector"
                id="gui.extension.externalExtension.description"
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Music"
                description="Name for the 'Music' extension"
                id="gui.extension.music.name"
            />
        ),
        extensionId: 'music',
        iconURL: musicIconURL,
        insetIconURL: musicInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Play instruments and drums."
                description="Description for the 'Music' extension"
                id="gui.extension.music.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Pen"
                description="Name for the 'Pen' extension"
                id="gui.extension.pen.name"
            />
        ),
        extensionId: 'pen',
        iconURL: penIconURL,
        insetIconURL: penInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Draw with your sprites."
                description="Description for the 'Pen' extension"
                id="gui.extension.pen.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Video Sensing"
                description="Name for the 'Video Sensing' extension"
                id="gui.extension.videosensing.name"
            />
        ),
        extensionId: 'videoSensing',
        iconURL: videoSensingIconURL,
        insetIconURL: videoSensingInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Sense motion with the camera."
                description="Description for the 'Video Sensing' extension"
                id="gui.extension.videosensing.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Text to Speech"
                description="Name for the Text to Speech extension"
                id="gui.extension.text2speech.name"
            />
        ),
        extensionId: 'text2speech',
        collaborator: 'Amazon Web Services',
        iconURL: text2speechIconURL,
        insetIconURL: text2speechInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Make your projects talk."
                description="Description for the Text to speech extension"
                id="gui.extension.text2speech.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Translate"
                description="Name for the Translate extension"
                id="gui.extension.translate.name"
            />
        ),
        extensionId: 'translate',
        collaborator: 'Google',
        iconURL: translateIconURL,
        insetIconURL: translateInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Translate text into many languages."
                description="Description for the Translate extension"
                id="gui.extension.translate.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: 'Makey Makey',
        extensionId: 'makeymakey',
        collaborator: 'JoyLabz',
        iconURL: makeymakeyIconURL,
        insetIconURL: makeymakeyInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Make anything into a key."
                description="Description for the 'Makey Makey' extension"
                id="gui.extension.makeymakey.description"
            />
        ),
        featured: true
    },
    {
        name: 'micro:bit',
        extensionId: 'microbit',
        collaborator: 'micro:bit',
        iconURL: microbitIconURL,
        insetIconURL: microbitInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Connect your projects with the world."
                description="Description for the 'micro:bit' extension"
                id="gui.extension.microbit.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: microbitConnectionIconURL,
        connectionSmallIconURL: microbitConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their micro:bit."
                id="gui.extension.microbit.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/microbit'
    },
    {
        name: 'LEGO MINDSTORMS EV3',
        extensionId: 'ev3',
        collaborator: 'LEGO',
        iconURL: ev3IconURL,
        insetIconURL: ev3InsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Build interactive robots and more."
                description="Description for the 'LEGO MINDSTORMS EV3' extension"
                id="gui.extension.ev3.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: ev3ConnectionIconURL,
        connectionSmallIconURL: ev3ConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting. Make sure the pin on your EV3 is set to 1234."
                description="Message to help people connect to their EV3. Must note the PIN should be 1234."
                id="gui.extension.ev3.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/ev3'
    },
    {
        name: 'LEGO BOOST',
        extensionId: 'boost',
        collaborator: 'LEGO',
        iconURL: boostIconURL,
        insetIconURL: boostInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Bring robotic creations to life."
                description="Description for the 'LEGO BOOST' extension"
                id="gui.extension.boost.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        connectionIconURL: boostConnectionIconURL,
        connectionSmallIconURL: boostConnectionSmallIconURL,
        connectionTipIconURL: boostConnectionTipIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their BOOST."
                id="gui.extension.boost.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/boost'
    },
    {
        name: 'LEGO Education WeDo 2.0',
        extensionId: 'wedo2',
        collaborator: 'LEGO',
        iconURL: wedo2IconURL,
        insetIconURL: wedo2InsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Build with motors and sensors."
                description="Description for the 'LEGO WeDo 2.0' extension"
                id="gui.extension.wedo2.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        connectionIconURL: wedo2ConnectionIconURL,
        connectionSmallIconURL: wedo2ConnectionSmallIconURL,
        connectionTipIconURL: wedo2ConnectionTipIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their WeDo."
                id="gui.extension.wedo2.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/wedo'
    },
    {
        name: 'Go Direct Force & Acceleration',
        extensionId: 'gdxfor',
        collaborator: 'Vernier',
        iconURL: gdxforIconURL,
        insetIconURL: gdxforInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Sense push, pull, motion, and spin."
                description="Description for the Vernier Go Direct Force and Acceleration sensor extension"
                id="gui.extension.gdxfor.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: gdxforConnectionIconURL,
        connectionSmallIconURL: gdxforConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their force and acceleration sensor."
                id="gui.extension.gdxfor.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/vernier'
    },
    {
        name: 'Smart Lumies',
        extensionId: 'smartLumies',
        collaborator: 'PlusPlus',
        iconURL: smartLumiesIconURL,
        insetIconURL: smartLumiesInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Have fun with Smart Lumies Cube."
                description="The Cube is a fully interactive, play-proof digital smart-toy that helps kids boost their cognitive development."
                id="gui.extension.smartLumies.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: false,
        useAutoScan: false,
        connectionIconURL: smartLumiesConnectionIconURL,
        connectionSmallIconURL: smartLumiesConnectionSmallIconURL,
        connectionTipIconURL: smartLumiesConnectionTipIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Have your Cube nearby."
                id="gui.extension.smartLumies.connectingMessage"
            />
        ),
        helpLink: 'https://smartlumies.com'
    },
    {
        name: 'HTTP',
        extensionId: 'http',
        collaborator: 'PlusPlus',
        iconURL: httpIconURL,
        insetIconURL: httpInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Send HTTP requests and manage JSON responses."
                description="Description for the HTTP extension"
                id="gui.extension.http.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: false,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: false,
        useAutoScan: false
    },
    {
        name: 'Physics',
        extensionId: 'griffpatch',
        collaborator: 'Griffpatch',
        iconURL: physicsIconURL,
        insetIconURL: physicsInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Box2D Physics extension."
                description="Description for the Physics extension"
                id="gui.extension.physics.description"
            />
        ),
        featured: true,
        disabled: false
    },
    {
        name: 'MatataBot',
        extensionId: 'matatabot',
        collaborator: 'matatalab',
        iconURL: matatabotIconURL,
        insetIconURL: matatabotInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Connect your projects with the MatataBot."
                description="Description for the MatataBot extension"
                id="gui.extension.matatabot.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: false,
        useAutoScan: false,
        connectionIconURL: matatabotConnectionIconURL,
        connectionSmallIconURL: matatabotConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Have your MatataBot nearby."
                id="gui.extension.matatabot.connectingMessage"
            />
        ),
        helpLink: 'https://matatalab.com/'
    },
    {
        name: 'MIDI',
        extensionId: 'midi',
        collaborator: 'UchiwaFuujinn',
        iconURL: midiIconURL,
        insetIconURL: midiInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Web MIDI extension."
                description="Description for the MIDI extension"
                id="gui.extension.midi.description"
            />
        ),
        featured: true,
        disabled: false
    },
    {
        name: 'LEGO SPIKE Prime',
        extensionId: 'spikePrime',
        collaborator: 'bricklife',
        iconURL: spikePrimeIconURL,
        insetIconURL: spikePrimeInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="LEGO SPIKE Prime extension."
                description="Description for the LEGO SPIKE Prime extension"
                id="gui.extension.spikePrime.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: spikePrimeConnectionIconURL,
        connectionSmallIconURL: spikePrimeConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Have your SPIKE Prime nearby."
                id="gui.extension.spikePrime.connectingMessage"
            />
        ),
        helpLink: 'https://github.com/bricklife/scratch-lego-bluetooth-extensions'
    },
    {
        name: 'Future Board',
        extensionId: 'futureBoard',
        collaborator: 'PlusPlus',
        iconURL: futureBoardIconURL,
        insetIconURL: futureBoardInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Future Board extension."
                description="Description for the Future Board extension"
                id="gui.extension.futureBoard.description"
            />
        ),
        featured: true,
        disabled: false
    },
    {
        name: 'Minecraft EDU',
        extensionId: 'minecraft',
        collaborator: 'PlusPlus',
        iconURL: minecraftIconURL,
        insetIconURL: minecraftInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Minecraft EDU extension."
                description="Description for the Minecraft EDU extension"
                id="gui.extension.minecraft.description"
            />
        ),
        featured: true,
        disabled: false
    },
    {
        name: 'Toolbox',
        extensionId: 'toolbox',
        collaborator: 'PlusPlus',
        iconURL: toolboxIconURL,
        insetIconURL: toolboxInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Blocks that help the user in one way or another."
                description="Description for the Toolbox extension"
                id="gui.extension.toolbox.description"
            />
        ),
        featured: true,
        disabled: false
    },
    {
        name: 'Vgate iCar Pro',
        extensionId: 'iCarPro',
        collaborator: 'PlusPlus',
        iconURL: iCarProIconURL,
        insetIconURL: iCarProInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Vgate iCar Pro extension."
                description="Description for the Vgate iCar Pro extension"
                id="gui.extension.iCarPro.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: false,
        useAutoScan: false,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Have your iCar Pro nearby."
                id="gui.extension.iCarPro.connectingMessage"
            />
        )
    },
    {
        name: 'Snap Circuits U33',
        extensionId: 'snapCircuitsU33',
        collaborator: 'PlusPlus',
        iconURL: snapCircuitsU33IconURL,
        insetIconURL: snapCircuitsU33InsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Snap Circuits U33 extension."
                description="Description for the Snap Circuits U33 extension"
                id="gui.extension.snapCircuitsU33.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: false,
        useAutoScan: false,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Have your Snap Circuits U33 nearby."
                id="gui.extension.snapCircuitsU33.connectingMessage"
            />
        )
    },
    {
        name: 'Magic Blue UU',
        extensionId: 'magicBlueUU',
        collaborator: 'PlusPlus',
        iconURL: magicBlueUUIconURL,
        insetIconURL: magicBlueUUInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Magic Blue UU extension."
                description="Description for the Magic Blue UU extension"
                id="gui.extension.magicBlueUU.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: false,
        useAutoScan: false,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Have your Magic Blue UU nearby."
                id="gui.extension.magicBlueUU.connectingMessage"
            />
        )
    },
];
