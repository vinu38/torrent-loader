var WebTorrent = require('webtorrent')
var client = new WebTorrent()
var magnetURI = 'magnet:?xt=urn:btih:7FE4176BFDF401501AC58B5FD7EAA850EA688AD4&tr=/announce&tr=udp://bigfoot1942.sektori.org:6969/announce&tr=udp://tracker.port443.xyz:6969/announce&tr=/announce&tr=/announce&tr=/announce&tr=udp://tracker.birkenwald.de:6969/announce&tr=udp://tracker.tiny-vps.com:6969/announce&tr=udp://tracker.vanitycore.co:6969/announce&tr=/announce&tr=udp://tracker1.dargh.xyz:6969/announce&tr=/announce&tr=udp://tracker.torrent.eu.org:451/announce&tr=udp://retracker.lanta-net.ru:2710/announce&tr=udp://retracker.hotplug.ru:2710/announce&tr=udp://tracker.coppersurfer.tk:6969/announce&tr=udp://explodie.org:6969/announce&tr=udp://open.demonii.si:1337/announce&tr=udp://bt.xxx-tracker.com:2710/announce&tr=udp://exodus.desync.com:6969/announce&tr=udp://ipv4.tracker.harry.lu:80/announce&tr=udp://tracker.toss.li:6969/announce&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://tracker.justseed.it:1337/announce&tr=/announce&tr=udp://zephir.monocul.us:6969/announce'

client.add(magnetURI, { path: '/' }, function (torrent) {
  torrent.on('done', function () {
    console.log('torrent download finished');
  })
})