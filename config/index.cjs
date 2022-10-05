/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: '',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '',
  PROVINCE: '河南',
  CITY: '驻马店',
  USERS: [
    {
      // 想要发送的人的名字
      name: '瑞云小可爱',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'obPbH5vwytl_qCN3w-t1DWm5Lkz0',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'oBWFlJYLVQj95YyM_6YKrZIU1r4rz7A0yQuEPiTWRMM',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '08-03',
      horoscopeDateType: '今日',
      LITERARY_PREFERENCE: '',
      openUrl: 'https://s.weibo.com/top/summary',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '小可爱农历', year: '1996', date: '06-19',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '小可爱公历', year: '1996', date: '08-03',
        },
        {
          type: '节日', name: '第一次见面纪念日', year: '2022', date: '09-21',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-10-01' },
        // 结婚纪念日
       // { keyword: 'marry_day', date: '2022-09-09' },
      ],
   
    },
    {
      // 想要发送的人的名字
      name: '瑞云小可爱',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'obPbH5vfIe1hiKBpKAYxf2bUAKhY',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'oBWFlJYLVQj95YyM_6YKrZIU1r4rz7A0yQuEPiTWRMM',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '08-03',
      horoscopeDateType: '今日',
      LITERARY_PREFERENCE: '',
      openUrl: 'https://s.weibo.com/top/summary',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '小可爱农历', year: '1996', date: '06-19',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '小可爱公历', year: '1996', date: '08-03',
        },
        {
          type: '节日', name: '第一次见面纪念日', year: '2022', date: '09-21',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-10-01' },
        // 结婚纪念日
       // { keyword: 'marry_day', date: '2022-09-09' },
      ],
   
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'oBWFlJYLVQj95YyM_6YKrZIU1r4rz7A0yQuEPiTWRMM',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'obPbH5vwytl_qCN3w-t1DWm5Lkz0',
    }
  ],

}

module.exports = USER_CONFIG

