const {
  fetchJson
} = require("../lib/functions");
const {
  downloadTiktok
} = require('@mrnima/tiktok-downloader');
const {
  facebook
} = require("@mrnima/facebook-downloader");
const cheerio = require("cheerio");
const {
  igdl
} = require("ruhend-scraper");
const axios = require('axios');
const {
  cmd,
  commands
} = require("../command");

cmd({
  'pattern': 'fb2',
  'alias': ["facebook2"],
  'desc': "Download Facebook videos",
  'category': "download",
  'filename': __filename
}, async (_0x1ac136, _0x5aec6a, _0x326675, {
  from: _0x1a04e3,
  quoted: _0x2255fc,
  body: _0x1f43bc,
  isCmd: _0x1c2063,
  command: _0x56b992,
  args: _0x35d02b,
  q: _0x3f223d,
  isGroup: _0x4c9e5a,
  sender: _0x2b95da,
  senderNumber: _0x2557e4,
  botNumber2: _0x288452,
  botNumber: _0x27499e,
  pushname: _0x16a64d,
  isMe: _0x453f87,
  isOwner: _0x2a8b1b,
  groupMetadata: _0x1e68c5,
  groupName: _0x4fa732,
  participants: _0x37c313,
  groupAdmins: _0x4d8ee2,
  isBotAdmins: _0x443398,
  isAdmins: _0x3ee4b7,
  reply: _0x4bd709
}) => {
  try {
    if (!_0x3f223d || !_0x3f223d.startsWith("https://")) {
      return _0x1ac136.sendMessage(_0x1a04e3, {
        'text': "*`Need URL`*"
      }, {
        'quoted': _0x5aec6a
      });
    }
    await _0x1ac136.sendMessage(_0x1a04e3, {
      'react': {
        'text': '⏳',
        'key': _0x5aec6a.key
      }
    });
    const _0x21f387 = await facebook(_0x3f223d);
    const _0x3ec2b8 = "\n┏━┫*⚬Lααɾα-ᴍᴅ-ꜰʙ⚬*┣━✾\n┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*\n┻\n*⌛ᴅᴜʀᴀᴛɪᴏɴ* : " + _0x21f387.result.duration + "\n\n*🔢 ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ᴛʜᴇ ɴᴜᴍʙᴇʀ*\n\n*ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅ 🎬*\n\n*1.1*     ┃  *ꜱᴅ Qᴜᴀʟɪᴛʏ*\n*1.2*     ┃  *ʜᴅ Qᴜᴀʟɪᴛʏ*\n\n*ᴀᴜᴅɪᴏ ᴅᴏᴡɴʟᴏᴀᴅ 🎧*\n\n*2.1*     ┃  *ᴀᴜᴅɪᴏ*\n*2.2*     ┃  *ᴅᴏᴄᴜᴍᴇɴᴛ*\n*2.3*     ┃  *ᴠᴏɪᴄᴇ*\n\n> Lααɾα-ᴍᴅ ✻\n";
    const _0x113e79 = await _0x1ac136.sendMessage(_0x1a04e3, {
      'image': {
        'url': _0x21f387.result.thumbnail
      },
      'caption': _0x3ec2b8
    }, {
      'quoted': _0x5aec6a
    });
    const _0x55f007 = _0x113e79.key.id;
    _0x1ac136.ev.on("messages.upsert", async _0x3b66fb => {
      const _0x5ded0a = _0x3b66fb.messages[0x0];
      if (!_0x5ded0a.message) {
        return;
      }
      const _0x48db83 = _0x5ded0a.message.conversation || _0x5ded0a.message.extendedTextMessage?.["text"];
      const _0x231677 = _0x5ded0a.key.remoteJid;
      const _0x58b051 = _0x5ded0a.message.extendedTextMessage && _0x5ded0a.message.extendedTextMessage.contextInfo.stanzaId === _0x55f007;
      if (_0x58b051) {
        await _0x1ac136.sendMessage(_0x231677, {
          'react': {
            'text': '⬇️',
            'key': _0x5ded0a.key
          }
        });
        let _0x2cfc3f = _0x21f387.result;
        await _0x1ac136.sendMessage(_0x231677, {
          'react': {
            'text': '⬆️',
            'key': _0x5ded0a.key
          }
        });
        if (_0x48db83 === "1.1") {
          await _0x1ac136.sendMessage(_0x231677, {
            'video': {
              'url': _0x2cfc3f.links.SD
            },
            'caption': "*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ · · ·*"
          }, {
            'quoted': _0x5ded0a
          });
        } else {
          if (_0x48db83 === "1.2") {
            await _0x1ac136.sendMessage(_0x231677, {
              'video': {
                'url': _0x2cfc3f.links.HD
              },
              'caption': "*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ · · ·*"
            }, {
              'quoted': _0x5ded0a
            });
          } else {
            if (_0x48db83 === "2.1") {
              await _0x1ac136.sendMessage(_0x231677, {
                'audio': {
                  'url': _0x2cfc3f.links.SD
                },
                'mimetype': "audio/mpeg"
              }, {
                'quoted': _0x5ded0a
              });
            } else {
              if (_0x48db83 === '2.2') {
                await _0x1ac136.sendMessage(_0x231677, {
                  'document': {
                    'url': _0x2cfc3f.links.SD
                  },
                  'mimetype': "audio/mpeg",
                  'fileName': "Lara-MD/FBDL.mp3",
                  'caption': "**© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ · · ·**"
                }, {
                  'quoted': _0x5ded0a
                });
              } else if (_0x48db83 === "2.3") {
                await _0x1ac136.sendMessage(_0x231677, {
                  'audio': {
                    'url': _0x2cfc3f.links.SD
                  },
                  'mimetype': 'audio/mp4',
                  'ptt': true
                }, {
                  'quoted': _0x5ded0a
                });
              }
            }
          }
        }
      }
    });
  } catch (_0x29aeea) {
    console.log(_0x29aeea);
    _0x4bd709('' + _0x29aeea);
  }
});

const fs = require('fs');
const path = require("path");
cmd({
  'pattern': "baiscope",
  'alias': ["movie2"],
  'react': '📑',
  'category': "download",
  'desc': 'baiscope.lk',
  'filename': __filename
}, async (_0xe3f231, _0x4bd58e, _0x189921, {
  from: _0x195bec,
  q: _0x464db7,
  isDev: _0x49b482,
  reply: _0x4ee609
}) => {
  try {
    if (!_0x464db7) {
      return await _0x4ee609("*Please provide a search query! (e.g., Avatar)*");
    }
    const _0x25ae15 = 'https://www.baiscope.lk/?s=' + encodeURIComponent(_0x464db7);
    const _0x3ee23b = await axios.get(_0x25ae15);
    const _0x50435e = cheerio.load(_0x3ee23b.data);
    let _0x4d43f1 = [];
    _0x50435e('article.elementor-post').each((_0x2b6f1e, _0x36c616) => {
      const _0x4f2aba = _0x50435e(_0x36c616).find("h5.elementor-post__title > a").text().trim();
      const _0x3e71ec = _0x50435e(_0x36c616).find("h5.elementor-post__title > a").attr("href");
      const _0x4106eb = _0x50435e(_0x36c616).find(".elementor-post__thumbnail img").attr("src");
      if (_0x4f2aba && _0x3e71ec && _0x4106eb) {
        _0x4d43f1.push({
          'title': _0x4f2aba,
          'episodeLink': _0x3e71ec,
          'imgUrl': _0x4106eb
        });
      }
    });
    if (_0x4d43f1.length === 0x0) {
      return await _0x4ee609("No results found for: " + _0x464db7);
    }
    let _0x14feea = "📺 Search Results for *" + _0x464db7 + ":*\n\n";
    _0x4d43f1.forEach((_0x352480, _0x5acfc4) => {
      _0x14feea += '*' + (_0x5acfc4 + 0x1) + ".* " + _0x352480.title + "\n🔗 Link: " + _0x352480.episodeLink + "\n\n";
    });
    const _0x37c506 = await _0xe3f231.sendMessage(_0x195bec, {
      'text': _0x14feea
    }, {
      'quoted': _0x189921
    });
    const _0x4e140d = _0x37c506.key.id;
    _0xe3f231.ev.on("messages.upsert", async _0x29e3fd => {
      const _0x28ef4d = _0x29e3fd.messages[0x0];
      if (!_0x28ef4d.message) {
        return;
      }
      const _0x1f10f3 = _0x28ef4d.message.conversation || _0x28ef4d.message.extendedTextMessage?.["text"];
      const _0x29ef5e = _0x28ef4d.key.remoteJid;
      const _0x49bbc0 = _0x28ef4d.message.extendedTextMessage && _0x28ef4d.message.extendedTextMessage.contextInfo.stanzaId === _0x4e140d;
      if (_0x49bbc0) {
        const _0x34c5d6 = parseInt(_0x1f10f3.trim());
        if (!isNaN(_0x34c5d6) && _0x34c5d6 > 0x0 && _0x34c5d6 <= _0x4d43f1.length) {
          const _0x12f737 = _0x4d43f1[_0x34c5d6 - 0x1];
          const _0x1cd6d7 = await axios.get(_0x12f737.episodeLink);
          const _0x2d28d2 = cheerio.load(_0x1cd6d7.data);
          const _0x16231a = _0x2d28d2("a.dlm-buttons-button").attr('href');
          if (_0x16231a) {
            await _0xe3f231.sendMessage(_0x29ef5e, {
              'image': {
                'url': _0x12f737.imgUrl
              },
              'caption': "🎬 *" + _0x12f737.title + "*\n🔗 Link: " + _0x12f737.episodeLink + "\n⬇️ Download will follow."
            }, {
              'quoted': _0x28ef4d
            });
            const _0x32029c = path.join(__dirname, 'downloaded_episode.zip');
            const _0x29c8e0 = fs.createWriteStream(_0x32029c);
            const _0x23fc82 = await axios({
              'url': _0x16231a,
              'method': "GET",
              'responseType': "stream"
            });
            _0x23fc82.data.pipe(_0x29c8e0);
            _0x29c8e0.on("finish", async () => {
              await _0xe3f231.sendMessage(_0x29ef5e, {
                'document': {
                  'url': _0x32029c
                },
                'mimetype': "application/zip",
                'fileName': _0x12f737.title + ".zip",
                'caption': '*' + _0x12f737.title + "*\n\n> Lααɾα-ᴍᴅ ✻"
              }, {
                'quoted': _0x28ef4d
              });
              fs.unlinkSync(_0x32029c);
            });
            _0x29c8e0.on("error", _0xf6647a => {
              console.error("Error downloading ZIP file:", _0xf6647a);
              _0x4ee609("*Error downloading the episode ZIP file.*");
            });
          } else {
            await _0x4ee609("*Download link not found for the selected episode.*");
          }
        } else {
          await _0x4ee609("*Invalid selection. Please choose a valid number.*");
        }
      }
    });
  } catch (_0x59ac25) {
    console.error(_0x59ac25);
    await _0x4ee609("*An error occurred while scraping the data.*");
  }
});
cmd({
  'pattern': 'ginisisila',
  'react': '📑',
  'category': 'download',
  'desc': "ginisisilacartoon.net",
  'filename': __filename
}, async (_0x5049fe, _0x194cab, _0x31c6bb, {
  from: _0x2287e7,
  q: _0x4564d6,
  isDev: _0x2a68be,
  reply: _0xc4807
}) => {
  try {
    if (!_0x4564d6) {
      return await _0xc4807("*Please provide a search query! (e.g., Garfield)*");
    }
    const _0x2e5011 = "https://ginisisilacartoon.net/search.php?q=" + encodeURIComponent(_0x4564d6);
    const _0x1a1ec0 = await axios.get(_0x2e5011);
    const _0x4099bd = cheerio.load(_0x1a1ec0.data);
    let _0x572788 = [];
    _0x4099bd("div.inner-video-cell").each((_0xaa6fae, _0x2e2bcc) => {
      const _0x4f6705 = _0x4099bd(_0x2e2bcc).find("div.video-title > a").attr('title');
      const _0x599247 = _0x4099bd(_0x2e2bcc).find("div.posted-time").text().trim();
      const _0x25bca3 = _0x4099bd(_0x2e2bcc).find("div.video-title > a").attr('href');
      const _0x5d44de = _0x4099bd(_0x2e2bcc).find("div.inner-video-thumb-wrapper img").attr("src");
      if (_0x4f6705 && _0x25bca3) {
        _0x572788.push({
          'title': _0x4f6705,
          'postedTime': _0x599247,
          'episodeLink': 'https://ginisisilacartoon.net/' + _0x25bca3,
          'imageUrl': _0x5d44de
        });
      }
    });
    if (_0x572788.length === 0x0) {
      return await _0xc4807("No results found for: " + _0x4564d6);
    }
    let _0x22c31b = "📺 Search Results for *" + _0x4564d6 + ":*\n\n";
    _0x572788.forEach((_0x16cf4a, _0x35b536) => {
      _0x22c31b += '*' + (_0x35b536 + 0x1) + ".* " + _0x16cf4a.title + "\n🗓️ Posted: " + _0x16cf4a.postedTime + "\n🔗 Link: " + _0x16cf4a.episodeLink + "\n\n";
    });
    const _0x5a1342 = await _0x5049fe.sendMessage(_0x2287e7, {
      'text': _0x22c31b
    }, {
      'quoted': _0x31c6bb
    });
    const _0x27a596 = _0x5a1342.key.id;
    _0x5049fe.ev.on("messages.upsert", async _0x9a7b7a => {
      const _0x171143 = _0x9a7b7a.messages[0x0];
      if (!_0x171143.message) {
        return;
      }
      const _0x14f608 = _0x171143.message.conversation || _0x171143.message.extendedTextMessage?.["text"];
      const _0x4a17a3 = _0x171143.key.remoteJid;
      const _0x14e10e = _0x171143.message.extendedTextMessage && _0x171143.message.extendedTextMessage.contextInfo.stanzaId === _0x27a596;
      if (_0x14e10e) {
        const _0x284411 = parseInt(_0x14f608.trim());
        if (!isNaN(_0x284411) && _0x284411 > 0x0 && _0x284411 <= _0x572788.length) {
          const _0x1d0aed = _0x572788[_0x284411 - 0x1];
          const _0x189e89 = "*🪄 ɴᴀᴍᴇ:-* " + _0x1d0aed.title + "\n⏳ *ᴅᴀᴛᴇ:-* " + _0x1d0aed.postedTime + "\n📎 *ᴇᴘɪꜱᴏᴅᴇ ʟɪɴᴋ*:- " + _0x1d0aed.episodeLink + "\n\n☘ *We are uploading the Movie/Episode you requested.*";
          const _0x456cc9 = {
            'image': {
              'url': _0x1d0aed.imageUrl
            },
            'caption': _0x189e89
          };
          await _0x5049fe.sendMessage(_0x4a17a3, _0x456cc9, {
            'quoted': _0x171143
          });
          const _0x175d46 = await axios.get(_0x1d0aed.episodeLink);
          const _0x1559da = cheerio.load(_0x175d46.data);
          const _0x32f8e7 = _0x1559da("div#player-holder iframe").attr('src');
          if (_0x32f8e7) {
            const _0x1a4a74 = 'https://api.fgmods.xyz/api/downloader/gdrive?url=' + _0x32f8e7 + "&apikey=mnp3grlZ";
            try {
              const _0xc4e6f4 = await axios.get(_0x1a4a74);
              const _0x46edb0 = _0xc4e6f4.data.result.downloadUrl;
              if (_0x46edb0) {
                await _0x5049fe.sendMessage(_0x4a17a3, {
                  'document': {
                    'url': _0x46edb0
                  },
                  'mimetype': "video/mp4",
                  'fileName': "MR JANIYA | " + _0x1d0aed.title + '.mp4',
                  'caption': _0x1d0aed.title + " |  *SADEESHA CODER*\n\n> Laara-MD"
                }, {
                  'quoted': _0x171143
                });
              } else {
                await _0xc4807("Failed to retrieve the download link for this episode.");
              }
            } catch (_0x587198) {
              console.error("Error fetching the download link:", _0x587198);
              await _0xc4807("An error occurred while trying to fetch the download link.");
            }
          } else {
            await _0xc4807("No downloadable link found for this episode.");
          }
        } else {
          await _0xc4807("Please reply with a valid number from the list.");
        }
      }
    });
  } catch (_0x546741) {
    _0xc4807("*Error occurred while scraping!*");
    console.error(_0x546741);
  }
});

const {
  sinhalaSub
} = require("mrnima-moviedl");
cmd({
  'pattern': "sinhalasub",
  'alias': ["movie"],
  'react': '📑',
  'category': "download",
  'desc': "Search movies on sinhalasub and get download links",
  'filename': __filename
}, async (_0x3dfd8e, _0x4ceff8, _0xe26d99, {
  from: _0x4a183a,
  q: _0x2f9e41,
  reply: _0x20f27b
}) => {
  try {
    if (!_0x2f9e41) {
      return await _0x20f27b("*Please provide a search query! (e.g., Deadpool)*");
    }
    var _0xb3afe = await sinhalaSub();
    const _0x5c943b = await _0xb3afe.search(_0x2f9e41);
    const _0x66d8c6 = _0x5c943b.result.slice(0x0, 0xa);
    if (!_0x66d8c6 || _0x66d8c6.length === 0x0) {
      return await _0x20f27b("No results found for: " + _0x2f9e41);
    }
    let _0x563ad3 = "📽️ *Search Results for* \"" + _0x2f9e41 + "\":\n\n";
    _0x66d8c6.forEach((_0x5634fb, _0x85e080) => {
      _0x563ad3 += '*' + (_0x85e080 + 0x1) + ".* " + _0x5634fb.title + "\n🔗 Link: " + _0x5634fb.link + "\n\n";
    });
    const _0x5c02b8 = await _0x3dfd8e.sendMessage(_0x4a183a, {
      'text': _0x563ad3
    }, {
      'quoted': _0xe26d99
    });
    const _0xc5b266 = _0x5c02b8.key.id;
    _0x3dfd8e.ev.on("messages.upsert", async _0x3276da => {
      const _0x220196 = _0x3276da.messages[0x0];
      if (!_0x220196.message) {
        return;
      }
      const _0x3f6bef = _0x220196.message.conversation || _0x220196.message.extendedTextMessage?.['text'];
      const _0xfacf40 = _0x220196.message.extendedTextMessage && _0x220196.message.extendedTextMessage.contextInfo.stanzaId === _0xc5b266;
      if (_0xfacf40) {
        const _0x5975fb = parseInt(_0x3f6bef.trim());
        if (!isNaN(_0x5975fb) && _0x5975fb > 0x0 && _0x5975fb <= _0x66d8c6.length) {
          const _0x51bcf2 = _0x66d8c6[_0x5975fb - 0x1];
          const _0x3c116b = "https://api-site-2.vercel.app/api/sinhalasub/movie?url=" + encodeURIComponent(_0x51bcf2.link);
          try {
            const _0x306fd2 = await axios.get(_0x3c116b);
            const _0x4bd79a = _0x306fd2.data.result;
            const _0x446048 = _0x4bd79a.dl_links || [];
            if (_0x446048.length === 0x0) {
              return await _0x20f27b("No PixelDrain links found.");
            }
            let _0x3dc978 = "🎥 *" + _0x4bd79a.title + "*\n\n";
            _0x3dc978 += "*Available PixelDrain Download Links:*\n";
            _0x446048.forEach((_0x359c3a, _0x5298f6) => {
              _0x3dc978 += '*' + (_0x5298f6 + 0x1) + ".* " + _0x359c3a.quality + " - " + _0x359c3a.size + "\n🔗 Link: " + _0x359c3a.link + "\n\n";
            });
            const _0xf30520 = await _0x3dfd8e.sendMessage(_0x4a183a, {
              'text': _0x3dc978
            }, {
              'quoted': _0x220196
            });
            const _0xe5d24f = _0xf30520.key.id;
            _0x3dfd8e.ev.on('messages.upsert', async _0xbe427f => {
              const _0x5e6a04 = _0xbe427f.messages[0x0];
              if (!_0x5e6a04.message) {
                return;
              }
              const _0x3e46b6 = _0x5e6a04.message.conversation || _0x5e6a04.message.extendedTextMessage?.['text'];
              const _0x14cafc = _0x5e6a04.message.extendedTextMessage && _0x5e6a04.message.extendedTextMessage.contextInfo.stanzaId === _0xe5d24f;
              if (_0x14cafc) {
                const _0x315031 = parseInt(_0x3e46b6.trim());
                if (!isNaN(_0x315031) && _0x315031 > 0x0 && _0x315031 <= _0x446048.length) {
                  const _0x2677a1 = _0x446048[_0x315031 - 0x1];
                  const _0x58dd91 = _0x2677a1.link.split('/').pop();
                  await _0x3dfd8e.sendMessage(_0x4a183a, {
                    'react': {
                      'text': '⬇️',
                      'key': _0xe26d99.key
                    }
                  });
                  const _0x27bb65 = "https://pixeldrain.com/api/file/" + _0x58dd91;
                  await _0x3dfd8e.sendMessage(_0x4a183a, {
                    'react': {
                      'text': '⬆',
                      'key': _0xe26d99.key
                    }
                  });
                  await _0x3dfd8e.sendMessage(_0x4a183a, {
                    'document': {
                      'url': _0x27bb65
                    },
                    'mimetype': "video/mp4",
                    'fileName': _0x4bd79a.title + " - " + _0x2677a1.quality + '.mp4',
                    'caption': _0x4bd79a.title + "\nQuality: " + _0x2677a1.quality + "\nPowered by SinhalaSub",
                    'contextInfo': {
                      'mentionedJid': [],
                      'externalAdReply': {
                        'title': _0x4bd79a.title,
                        'body': "Download powered by SinhalaSub",
                        'mediaType': 0x1,
                        'sourceUrl': _0x51bcf2.link,
                        'thumbnailUrl': _0x4bd79a.image
                      }
                    }
                  }, {
                    'quoted': _0x5e6a04
                  });
                  await _0x3dfd8e.sendMessage(_0x4a183a, {
                    'react': {
                      'text': '✅',
                      'key': _0xe26d99.key
                    }
                  });
                } else {
                  await _0x20f27b("Invalid selection. Please reply with a valid number.");
                }
              }
            });
          } catch (_0x3bf620) {
            console.error("Error fetching movie details:", _0x3bf620);
            await _0x20f27b("An error occurred while fetching movie details. Please try again.");
          }
        } else {
          await _0x20f27b("Invalid selection. Please reply with a valid number.");
        }
      }
    });
  } catch (_0x14553d) {
    console.error("Error during search:", _0x14553d);
    _0x20f27b("*An error occurred while searching!*");
  }
});
