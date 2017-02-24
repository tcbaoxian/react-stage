const $ = window.$;
export default (url, options) => {
  return new Promise((resolve, reject) => {
    if (options.dataType !== 'jsonp') {
      $.ajax({
        url,
        type: options.type,
        dataType: options.dataType || 'json',
        data: options.body,
        cache: options.cache || false,
        success: (data) => {
          resolve(data);
        },
        error: (err) => {
          reject(err);
        },
      });
    } else {
      $.ajax({
        url,
        type: options.type,
        dataType: options.dataType || 'jsonp',
        data: options.body,
        jsonp: options.jsonp || '',
        // jsonpCallback: 'jsonpCallback', // 就指定为key值，否则房型接口偶尔报错，原因不明
        cache: options.cache || false,
        success: (data) => {
          resolve(data);
        },
        error: (err) => {
          reject(err);
        },
      });
    }
  });
};



