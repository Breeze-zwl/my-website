import OSS from 'ali-oss';

// 配置你的OSS访问密钥
const client = new OSS({
  region: 'oss-cn-beijing', // 替换为你的OSS区域
  accessKeyId: 'LTAI5t8EB9pT7MKH2wWu7ekV',
  accessKeySecret: '7EtD2mcFDpJqmdOYm0MBn6mZwlEddr',
  bucket: 'website-image-as',
});

// 列出Bucket中的所有文件
const listObjects = async () => {
  const folder = 'music/';
  const files = [];

  try {
    let result = await client.list({
      prefix: folder,
      delimiter: '/',
      'max-keys': 100, // 设置每次返回的最大文件数
    });

    do {
      result.objects.forEach((obj, index) => {
        // 检查对象是否为文件夹
        if (obj.size > 0 && !obj.name.endsWith('/')) {
          // 去掉文件名前的文件夹前缀
          let fileName = obj.name.substring(folder.length);
          // 确定文件类型
          let fileType = fileName.endsWith('.mp3') ? 'mp3' : 'mp4';
          // 去掉文件名的后缀
          fileName = fileName.substring(0, fileName.lastIndexOf('.'));

          // 生成公共读的URL
          const publicUrl = `https://${client.options.bucket}.${client.options.region}.aliyuncs.com/${obj.name}`;
          files.push({ title: fileName, url: publicUrl, index: index - 1, type: fileType });
        }
      });

      // 如果没有更多文件，退出循环
      if (!result.isTruncated) {
        break;
      }

      // 获取下一页文件
      result = await client.list({
        prefix: folder,
        delimiter: '/',
        'max-keys': 100,
        marker: result.nextMarker,
      });
    } while (result.isTruncated);

    return files;
  } catch (error) {
    console.error('Error listing objects from OSS:', error);
    return []; // 返回一个空数组，以防调用此函数的代码崩溃
  }
};

export default listObjects;
