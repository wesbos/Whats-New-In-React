let fs = require('fs'),
  request = require('request');

const download = function(callback) {
  const uri = images.pop(); // take the last one off
  request.head(uri, (err, res, body) => {
    const extension = res.headers['content-type'].split('/').pop();
    const fileName = `${uri.split('/')[3]}.${extension}`;
    console.log('downloading...', fileName);
    request(uri)
      .pipe(fs.createWriteStream(`images/screenshots/${fileName}`))
      .on('close', callback);
  });
};

var images = [
  'http://wes.io/2a8cf532e3b0/content',
  'http://wes.io/2fdcb1e8926b/content',
  'http://wes.io/95b0a816817f/content',
  'http://wes.io/d58ce7c7bdd3/content',
  'http://wes.io/f5cccea33d8a/content',
  'http://wes.io/15fdae917203/content',
  'http://wes.io/3642c6831da3/content',
  'http://wes.io/d58ce7c7bdd3/content',
  'http://wes.io/3f8737990068/content',
  'http://wes.io/4361617b02ed/content',
  'http://wes.io/f8d562660c62/content',
  'http://wes.io/3149107c4eb1/content',
  'http://wes.io/c921e460ad83/content',
  'http://wes.io/9a84670f7d85/content',
  'http://wes.io/60b6be467a70/content',
  'http://wes.io/8e3d4c6e9b9e/content',
  'http://wes.io/8e3d4c6e9b9e/content',
  'http://wes.io/1fdf005628d4/content',
  'http://wes.io/d9bb1dac8dc4/content',
  'http://wes.io/4737fd4819e7/content',
  'http://wes.io/d3b295a40556/content',
  'http://wes.io/95f6cb0fba1b/content',
  'http://wes.io/34b7e97f4cd2/content',
  'http://wes.io/1218122f94e1/content',
  'http://wes.io/341c2d41ef9a/content',
  'http://wes.io/9eaebdcd3fa9/content',
  'http://wes.io/d234edad8e68/content',
  'http://wes.io/7da7ed48695b/content',
  'http://wes.io/fa842bcb4142/content',
  'http://wes.io/c383e7efef80/content',
  'http://wes.io/efcf5d24301d/content',
  'http://wes.io/5fdd87279f1d/content',
  'http://wes.io/fee1bda374ea/content',
  'http://wes.io/346367a8beb8/content',
  'http://wes.io/337470369b9a/content',
  'http://wes.io/20428156b97a/content',
  'http://wes.io/adb7c4ea4b26/content',
  'http://wes.io/5fdd87279f1d/content',
  'http://wes.io/b8fb24970454/content',
  'http://wes.io/3e72597e7c27/content',
  'http://wes.io/d8cc0b83b818/content',
  'http://wes.io/e9c6c147db09/content',
  'http://wes.io/a45b536fa6a1/content',
  'http://wes.io/144acd093799/content',
  'http://wes.io/08cbf7cf6b80/content',
  'http://wes.io/7deabfa88ee9/content',
];

function start() {
  console.log('done');
  if (images.length) {
    download(start);
  }
}

download(start);
